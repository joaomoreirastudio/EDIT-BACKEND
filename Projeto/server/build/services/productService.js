import ProductModel from "../models/productModel.js";
class ProductService {
    constructor() {
        this.getAll = async () => {
            try {
                return await ProductModel.find();
            }
            catch (error) {
                throw new Error("Failed to get all products");
            }
        };
        this.getProductById = async (productId) => {
            try {
                const foundProduct = await ProductModel.findById(productId);
                return foundProduct;
            }
            catch (error) {
                throw new Error("Failed to get product by id");
            }
        };
        this.create = async (newProduct) => {
            try {
                const createdProduct = await ProductModel.create(newProduct);
                return createdProduct;
            }
            catch (error) {
                throw new Error("Failed to create product");
            }
        };
        this.update = async (productId, product) => {
            try {
                const updatedProduct = await ProductModel.findByIdAndUpdate(productId, product, { new: true });
                return updatedProduct;
            }
            catch (error) {
                throw new Error("Failed to update product");
            }
        };
        this.delete = async (productId) => {
            try {
                const deletedProduct = await ProductModel.findByIdAndDelete(productId);
                return deletedProduct;
            }
            catch (error) {
                throw new Error("Failed to delete product");
            }
        };
    }
}
export default new ProductService();
