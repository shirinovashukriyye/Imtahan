import express from "express"
import {createProduct,getProduct,deleteProduct} from "../controllers/productController.js"

const productRouter=express.Router()

productRouter.post("/",createProduct)
productRouter.get("/",getProduct)
productRouter.delete("/",deleteProduct)


export default productRouter