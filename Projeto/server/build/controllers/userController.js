import userService from "../services/userService.js";
import { validationResult } from "express-validator";
class UserController {
    constructor() {
        this.getAll = async (req, res) => {
            try {
                const users = await userService.getAll();
                res.json(users);
            }
            catch (error) {
                res.status(500).json({ error: "Failed to get users" });
            }
        };
        this.getOne = async (req, res) => {
            try {
                const userId = req.params.id;
                const user = userService.getUserById(userId);
                if (!user) {
                    res.status(404).json({ error: "User not found" });
                }
                res.json(user);
            }
            catch (error) {
                res.status(500).json({ error: "Failed to get user" });
            }
        };
        this.register = async (req, res) => {
            try {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.array() });
                }
                const userToCreate = req.body;
                const createdUser = await userService.register(userToCreate);
                res.status(201).json(createdUser);
            }
            catch (error) {
                res.status(500).json({ error: "Failed to create user" });
            }
        };
        this.update = async (req, res) => {
            try {
                const userId = req.params.id;
                const userToUpdate = req.body;
                const updatedUser = userService.update(userId, userToUpdate);
                if (!updatedUser) {
                    res.status(404).json({ error: "User not found" });
                }
                res.json(updatedUser);
            }
            catch (error) {
                res.status(500).json({ error: "Failed to update user" });
            }
        };
        this.delete = async (req, res) => {
            try {
                const userId = req.params.id;
                const deletedUser = userService.delete(userId);
                if (!deletedUser) {
                    res.status(404).json({ error: "User not found" });
                }
                res.json(deletedUser);
            }
            catch (error) {
                res.status(500).json({ error: "Failed to delete user" });
            }
        };
    }
}
export default new UserController();
