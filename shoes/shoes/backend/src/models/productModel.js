import mongoose from "mongoose";

const productSchema=mongoose.Schema({
    image:{type:String, required:true},
    title:{type:String, required:true},
    description:{type:String, required:true},
    price:{type:Number, required:true}
}, {collection:"Products"})

const product =mongoose.model("Product", productSchema)

export default product