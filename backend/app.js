import express from "express"
import "dotenv/config"
import "./src/db/Connection.js"
import cors from "cors"
import productRouter from "./src/routes/productRouter.js"


const app = express()
const port = process.env.PORT || 4001

app.use(express.json())
app.use(cors())
app.use("/api/products", productRouter)

app.listen(port, () => {
    console.log(`server is running ${`http://localhost:${port}`}`)
})