import UserModel from "../models/userModel.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
class UserService {
    constructor() {
        this.getAll = async () => {
            try {
                return await UserModel.find();
            }
            catch (error) {
                throw new Error("Failed to get all users");
            }
        };
        this.getUserById = async (userId) => {
            try {
                const foundUser = await UserModel.findById(userId);
                return foundUser;
            }
            catch (error) {
                throw new Error("Failed to get user by ID");
            }
        };
        this.register = async (newUser) => {
            try {
                const users = await UserModel.create(newUser);
                newUser.id = uuidv4();
                newUser.password = await bcrypt.hash(newUser.password, 7);
                return newUser;
            }
            catch (error) {
                throw new Error("Failed to create user");
            }
        };
        this.update = async (userId, user) => {
            try {
                const updatedUser = await UserModel.findByIdAndUpdate(userId, user, { new: true });
                return updatedUser;
            }
            catch (error) {
                throw new Error("Failed to update user");
            }
        };
        this.delete = async (userId) => {
            try {
                const deletedUser = await UserModel.findByIdAndDelete(userId);
                return deletedUser;
            }
            catch (error) {
                throw new Error("Failed to delete user");
            }
        };
    }
}
export default new UserService();
