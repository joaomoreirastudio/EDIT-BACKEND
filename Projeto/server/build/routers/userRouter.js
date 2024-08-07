import { Router } from "express";
import UserController from "../controllers/userController.js";
import { check } from "express-validator";
const router = Router();
const validateUser = [
    check("name").notEmpty().withMessage("Name is required"),
    check("email")
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
        .withMessage("Invalid email format"),
    check("password")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
        .withMessage("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
];
router.get("/users", UserController.getAll);
router.get("/users/:id", UserController.getOne);
router.post("/users", UserController.register);
router.put("/users/:id", UserController.update);
router.delete("/users/:id", UserController.delete);
export default router;
