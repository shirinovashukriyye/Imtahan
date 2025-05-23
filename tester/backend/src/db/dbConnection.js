import mongoose from "mongoose"

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected MongoDB")
}).catch(() => {
    console.log("Failed to connect MongoDB")
})