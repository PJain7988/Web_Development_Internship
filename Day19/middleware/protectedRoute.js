import jwt from "jsonwebtoken";
import User from "../model/authModel.js";

export const protectedRoute = (req,res,next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        if(!token){
            return res.status(401).json({
                msg:"token not provided"
            });
        }
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );
        if(!decoded){
            return res.status(401).json({
                message:"invalid token"
                });
        }
        req.userId = decoded.userId;
        next(); //it is used to jump from one middleware to another middleware
    }catch(error){
        res.status(401).json({message:"Unauthorized"})
        console.log(error.message);
    }
}

export const adminRoute = async(req,res,next)=>{
    try{
        const user = await User.findById(req.userId);
        if(user.role === "admin"){
            next();
        }else{
            return res.status(403).json({
                msg:"access denied"
            });
        }
    }catch(error){
        console.log(error.message);
    }
}