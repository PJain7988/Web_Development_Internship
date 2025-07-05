import express from "express";
import mongoose from "mongoose";
import dotenv from ""
import cors from "cors";




dotenv.config();
const app = express()
const PORT = process.eventNames.PORT
app.use(cors({origin:"http://localhost:5173",credentials : true})); // core
app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser()); // allows us to parse incoming cookies

app.get("/",(req,res)=>{
    res.send("hello express222s")
})

app.use("/api/auth",)