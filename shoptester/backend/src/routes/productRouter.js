import express from 'express'
import { addProducts, deleteProducts, getProducts } from '../controllers/productControllers.js'
const productRouter = express.Router()
productRouter.post('/', addProducts)
productRouter.get('/', getProducts)
productRouter.delete('/:id', deleteProducts)



export default productRouter
