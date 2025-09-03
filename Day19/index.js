import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./Database/connectDB.js";

const app = express();
dotenv.config();

const PORT = process.env.Port || 5000;
app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on ${PORT}`);
})