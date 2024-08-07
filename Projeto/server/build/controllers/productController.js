import productService from "../services/productService.js";
import { validationResult } from "express-validator";
class ProductController {
    constructor() {
        this.getAll = async (req, res) => {
            try {
                const products = await productService.getAll();
                res.json(products);
            }
            catch (error) {
                res.status(500).json({ error: "Failed to get products" });
            }
        };
        this.getOne = async (req, res) => {
            try {
                const productId = req.params.id;
                const product = await productService.getProductById(productId);
                if (!product == null) {
                    return res.status(404).json({ error: "Product not found" });
                }
                res.json(product);
            }
            catch (error) {
                res.status(500).json({ error: "Failed to get product" });
            }
        };
        this.create = async (req, res) => {
            try {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.array() });
                }
                const productToCreate = req.body;
                const createdProduct = await productService.create(productToCreate);
                res.status(201).json(createdProduct);
            }
            catch (error) {
                res.status(500).json({ error: "Failed to create product" });
            }
        };
        this.update = async (req, res) => {
            try {
                const productId = req.params.id;
                const productToUpdate = req.body;
                const updatedProduct = await productService.update(productId, productToUpdate);
                if (!updatedProduct) {
                    return res.status(404).json({ error: "Product not found" });
                }
                res.json(updatedProduct);
            }
            catch (error) {
                res.status(500).json({ error: "Failed to update product" });
            }
        };
        this.delete = async (req, res) => {
            try {
                const productId = req.params.id;
                const deletedProduct = await productService.delete(productId);
                if (!deletedProduct) {
                    res.status(404).json({ error: "Product not found" });
                }
                res.json(deletedProduct);
            }
            catch (error) {
                res.status(500).json({ error: "Failed to delete product" });
            }
        };
    }
}
export default new ProductController();
