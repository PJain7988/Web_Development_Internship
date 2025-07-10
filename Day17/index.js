// const express = require ('express');
// const { connection } = require('mongoose');
// const app = express();
// const port = 3000;
// require("dotenv").config();
import express  from 'express';
import dotenv from 'dotenv';
import {connectDb} from "./database/connection.js";

import authRoutes from "./routes/authRoutes.js"

dotenv.config();
const app = express();
app.use(express.json()); // allows us to parse incoming requests : req.body
const port = 3000;

// app.get("/",(req,res)=>{
//     res.send("hello express222s")
// })p

app.use("/api/auth",authRoutes);

app.listen(port,()=>{
    connectDb();
    console.log(`Server run on port ${port}`);
});