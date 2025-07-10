import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import { connectionDB } from "./Database/connection.js";

const app = express();
app.use(express.json());
app.use(express.static("public"))
const PORT = process.env.port || 3000;
app.use(cors());
dotenv.config();


app.use("/products", productRoutes);

app.listen(PORT,()=>{
    connectionDB();
    console.log(`Server is running ${PORT}`);
})

