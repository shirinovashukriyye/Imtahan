import express from 'express';
import { addProducts, deleteProducts, getProducts } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.post("/", addProducts);
productRouter.get("/", getProducts)
productRouter.delete("/:id", deleteProducts)

export default productRouter