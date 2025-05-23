import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to the database')
}).catch(() => {
    console.log('Failed to connect to the database')
})