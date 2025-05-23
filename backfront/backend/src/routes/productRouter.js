import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.delete("/:id", deleteProduct);
productRouter.post("/", createProduct);

export default productRouter;
