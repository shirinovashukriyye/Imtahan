import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://Shukriyya:11222004ss@cluster0.vguqqj0.mongodb.net/")
  .then(() => {
    console.log("connect mongodb");
  })
  .catch(() => {
    "disconnect mongodb";
  });
