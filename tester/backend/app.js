import express from 'express';
import cors from 'cors';
import "dotenv/config"
import "./src/db/dbConnection.js"
import productRouter from './src/routes/productRouter.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/products", productRouter);
    
const port = process.env.PORT || 5001

app.get("/", (req, res) => {
    res.send("Hello Word");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})