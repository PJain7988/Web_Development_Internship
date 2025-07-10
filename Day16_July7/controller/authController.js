import bcryptjs from "bcryptjs"
import {generateTokenAndSetCookie} from "../utilis/generateTokenAndSetCookie.js"
import {
    sendVerificationEmail,
    sendWelcomeEmail,
    sendPasswordResetEmail,
} from "../mailTrap/emails.js"
import User from "../models/userModel.js"

export const signup = async (req,res)=>{
    const{email,password,name} = req.body;
    // console.log("ssnkssssssssssssssssssssssss")

    try{
        if(!email || !password || !name){
            throw new Error("All fields are required");
        }
        const userAlreadyExists = await User.findOne({email});
        console.log("userAlreadyExists",userAlreadyExists);

        if(userAlreadyExists){
            return res.status(400).json({success: false,message: "User Already exist"})
        }

        const hashedPassword = await bcryptjs.hash(password,10); // hash is a function from bcryptjs library it helps in encryption and 10 means the complexity of encryption that how much level of security we want for the encryption
        const verificationToken = Math.floor(100000 + Math.random()*900000).toString(); // here I make 6-digit OTP code // math.random gives random number between 0 and 1 it gives in decimal math.floor used to remove the decimal part

        const user= new User({
            email,
            password:hashedPassword,
            name,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, //24 hours me change karne ke liye
        });

        await user.save();

        //jwt
        generateTokenAndSetCookie(res,user._id);

        await sendVerificationEmail(user.email,verificationToken);
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user:{
                ...user._doc,
                password: undefined,
            },
        });
        }catch(error){
            console.log(error);
            res.status(500).json({success: false,message: error.message})
    }
};
export const verifyEmail = async(req,res)=>{
    const {code} = req.body.code?.trim();
    console.log(code);
    try{
        const user = await User.findOne({
            verificationToken : code,
            verificationExpiresAt : {$gt : Date.now()}
        })
        // console.log("User found:", user);
        if(!user){
            return res.status(400).json({
                success:false,
                message : "Invalid or expired token"
            })
        }
        user.isverified = true;
        user.verificationToken = undefined;
        user.verificationExpiresAt = undefined;
        await user.save();

        await sendWelcomeEmail(user.name,user.email);
        return res.status(200).json({
            success:true,
            message:"email verified"
        })
    } catch(error){
        console.log(error)
    }
}

export const login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success: false,
                message: "Email does not exist"})
        }
        const isValidPassword = await bcryptjs.compare(password,user.password);
        if(!isValidPassword){
            return res.status(400).json({
                success: false,
                message: "Invalid password"})
            }
        user.lastLogin = new Date();
        await user.save();

        generateTokenAndSetCookie(res,user._id);
        res.status(200).json({
            success: true,
            message: "User logged in successfully"
        })

    }catch(error){
        console.log(error);
    }
}

export const logout = async(req,res)=>{
    try{
        res.clearCookie("token");
        res.status(200).json({
            success: true,
            message: "User logged out successfully"
            })
        }catch(error){
            console.log(error);
        }
}

export const forgotPassword = async(req,res)=>{
    try{
        const {email} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success: false,
                message: "Email does not exist"
                })
        }

        const resetToken = Math.floor(Math.random()*1000000);
        const resetPasswordExpiresAt = Date.now() + 1 * 60 * 60 * 1000;

        user.resetToken = resetToken;
        user.resetPasswordExpiresAt = resetPasswordExpiresAt;

        await user.save();

        await sendPasswordResetEmail(user.email,`${process.env.CLIENT_URL}/reset-password/${resetToken}`);
    }catch(error){
        console.log(error);
    }
}

// export const resetPassword = async(req,res)=>{
//     try{

//     }catch(error){
//         console.log(error);
//     }
// } 