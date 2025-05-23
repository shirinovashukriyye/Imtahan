import product from "../models/productModel.js"

export const addProducts = async (req, res) => {
try {
    const newProduct = new product(req.body)
    await newProduct.save()
    res.status(201).json({success: true ,message: "Product created successfully" })
} catch (error) {
    return res.status(500).json({success: false , message: "internal server error"})
}
}

export const getProducts = async (req, res) => {
  try {
    const products = await product.find();
    res.status(200).json({success: true , products })
  } catch (error) {
    return res.status(500).json({success: false , message: "internal server error"})
  }
}

export const deleteProducts = async (req, res) => {
    const{id} = req.params
   try {
    const deleteProduct = await product.findByIdAndDelete(id);
    if(!deleteProduct) {
        return res(400).json({success: false, message: "Product not found"})
    }
    res.status(200).json({success: true, message: "Product deleted successfully" })
   } catch (error) {
    
    return res.status(500).json({success: false , message: "internal server error"})
   }
}