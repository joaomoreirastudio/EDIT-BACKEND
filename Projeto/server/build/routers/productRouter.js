import { Router } from "express";
import ProductController from "../controllers/productController.js";
import { check } from "express-validator";
const router = Router();
const validateProduct = [
    check("name").notEmpty().withMessage("Product name is required"),
    check("description")
        .notEmpty()
        .withMessage("Product description is required"),
    check("price").isNumeric().withMessage("Product must be an number"),
    check("ean")
        .optional()
        .isLength({ min: 13, max: 13 })
        .withMessage("EAN must be 13 digits long"),
];
router.get("/products", ProductController.getAll);
router.get("/products/:id", ProductController.getOne);
router.post("/products", validateProduct, ProductController.create);
router.put("/products/:id", ProductController.update);
router.delete("/products/:id", ProductController.delete);
export default router;
