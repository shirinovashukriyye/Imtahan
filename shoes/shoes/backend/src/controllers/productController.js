import product from "../models/productModel.js"

export const createProduct= async(req,res)=>{
try {
    let newProduct=new product(req.body)
    await newProduct.save()
    res.status(201).send("Product create success",newProduct)
} catch (error) {
    res.status(500).send("send error")
}
}


export const getProduct=async(req,res)=>{
    try {
        let Products=await product.find()
        if(!Products){
            res.status(404).send("Product not found")
        }
        res.status(200).send(Products)
        res.status
    } catch (error) {
        res.status(500).send("Server error")
    }
}

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).send("Product not found");
    }

    res.status(200).send("Product deleted successfully");
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).send("Server error");
  }
};