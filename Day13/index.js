const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const { error } = require("console");
require('dotenv').config()
const PORT = 4000;

app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));

mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("Connected to MongoDB");
})
.catch((error)=>{
    console.log(error);
})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    email: {
        type: String,
        required: true,
        trim:true,
        unique:true
    },
    age:{
        type:Number,
        min: 0,
        max: 125
    },
    available:{
        type:Boolean,
        default:false
    },
    arr:[
        {
            type:String
        }
    ]
})

const User = mongoose.model("User",userSchema);

// console.log(process.env.DATABASE_URL);

app.get("/create",async(req,res)=>{
    try{
    let newUser = await User.create(
        {
            name:"Priya Jain",
            email:"Priyajain@example.com",
            age:30,
            arr:["hi","hello","bye"]
        }
    )
    console.log(newUser);
    res.send({newUser});
    }catch(error){
        res.status(400).json({message:error.message});
        console.log(error);
    }
})
app.get("/users",async(req,res)=>{
    try{
        let users = await User.find();
        res.status(200).json({users});
    }catch(eror){
        res.status(400).json({message:message.eror});
        console.log(error)
    }
})
app.get("/update/:id",async(req,res)=>{
    try{
        let id = req.params.id;
        await User.updateOne({id:id,name:"Priya Jain"})
        res.status(200).json({message:"user updated successfully"})
    }catch(error){
        res.status(400).json({message:error.message});
        console.log(error)
    }
})

app.listen(PORT,()=>{
    console.log(`live on ${PORT}`);
})