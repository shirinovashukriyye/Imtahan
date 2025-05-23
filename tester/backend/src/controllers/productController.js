import product from "../models/productModel.js"


export const addProducts = async (req, res) => {
    try {
        const newProduct = new product(req.body);
        await newProduct.save();
        return res.status(201).json({ message: "Product added successfully" });
    } catch (error) {
        return res.status(500).json({success:true, message: "Internal error server"})
    }
}

export const getProducts = async (req, res) => {
    try {
        const products = await product.find();
        return res.status(200).json({message: "product get", products });
    } catch (error) {
        return res.status(500).json({success:true, message: "Internal error server"})
    }
}

export const deleteProducts = async (req, res) => {
    const {id} = req.params;
    try {
        const deleteProducts = await product.findByIdAndDelete(id);
        if(!deleteProducts) {
            return res.status(404).json({success: false, message: "Product not found"})

        }
        return res.status(200).json({success: true, message: "Product deleted successfully"})
    } catch (error) {
        return res.status(500).json({success:true, message: "Internal error server"})
    }
}
