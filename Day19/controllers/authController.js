import User from "../model/authModel.js";
import bcryptjs from "bcryptjs";
import { generateToken } from "../utilis/generateToken.js";
export const signup = async(req,res) =>{
    try{
        const {email,name,password} = req.body;
        if(!email || !password || !name){
            res.status(400).json({
                message:"All Fields are required"
            })
        }
        const userAlreadyExist = await User.findOne({email})

        if(!userAlreadyExist){
            res.status(400).json({
                message:"user already exist"
            })
        }
        const hashedPassword = await bcryptjs.hash(password,10);
        const user = new User({
            name,
            email,
            password:hashedPassword
        })

        await user.save();

        generateToken(res,user._id);
        res.status(201).json({
            user:{
                ...user_doc,
                password:undefined
            },
            message:"User created Successfully"
        })

    }catch(error){
        console.log(error.message);
    }
}
export const login = async(req,res) =>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            res.status(400).json({
                message:"User not found"
            })
        }
        const isPasswordValid = await bcryptjs.compare(password,user.password);
        if(!isPasswordValid){
            res.status(400).json({
                message:"Wrong Password"
            })
        }
        // user.lastLogin = new Date();
            await user.save();
        
        generateTokenAndSetCookie(res,user._id);
            res.status(200).json({
                message: "User logged in successfully"
        })
    }catch(error){
        console.log(error.message);
    }
}

export const logout = async(req,res)=>{
    res.clearCookie("token");
    res.status(200).json({
        message:"User logged out successfully"
    })
}

export const getProfile = async(req,res)=>{
    try{
        const user = await User.findById(req.userId).select("password");
        res.status(200).json({
            message:"User Profile",
            user
        });
    }catch(error){
        console.log(error.message);
    }
}