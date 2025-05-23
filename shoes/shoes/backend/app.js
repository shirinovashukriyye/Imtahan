import mongoose from "mongoose";
import express from "express"
import 'dotenv/config.js'
import cors from 'cors'
import productRouter from './src/routes/productRouter.js';
import "./src/db/Connection.js"


const port=process.env.PORT||6001
const app=express()
app.use(cors())
app.use(express.json())

app.use("/api/products", productRouter)
app.listen(port,()=>{
    console.log(`server running http://localhost:${port}`)
    mongoose.connect("mongodb+srv://Shukriyya:11222004ss@cluster0.vguqqj0.mongodb.net/").then(()=>{
        console.log("connected mongodb");
        
    })
})