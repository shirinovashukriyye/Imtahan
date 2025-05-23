import product from "../models/productModel.js"


export const addProducts = async (req, res) => {
try {
    const newProducts = new product(req.body)
    await newProducts.save()
    return res.status(201).json({success: true, message: "Product added successfully"})
} catch (error) {
    return res.status(500).json({success: false ,message: "Internal server error"})
}
}
export const getProducts = async (req, res) => {
  try {
    const products = await product.find();
    return res.status(200).json({success: true, products})
  } catch (error) {
    return res.status(500).json({success: false, message: "Internal server error"})
  }
}

export const deleteProducts = async (req, res) => {
    const {id} = req.params
    try {
        const deleteProducts = await product.findByIdAndDelete(id);
        if(!deleteProducts) {
            return res.status(400).json({success: false, message: "Product not found"})
        }
        return res.status(200).json({success: true, message: "Product deleted successfully"})

        
    } catch (error) {
        return res.status(500).json({success: false, message: "Internal server error"})
    }
}