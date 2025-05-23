import express from 'express';
import productRouter from './src/routes/productRouter.js';
import 'dotenv/config'
import './src/db/dbConnection.js'
import cors from 'cors';

const port = process.env.PORT || 3001
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productRouter)



app.get("/", (req, res) => {
    res.send("Server is running");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
