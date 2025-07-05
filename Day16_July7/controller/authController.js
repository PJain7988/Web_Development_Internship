import bcryptjs from "bcryptjs"
import {
    send

} from "../mailTrap/emails.js";
import {User} from "../models/userModel.js"

export const signup = async (req,res)=>{
    const{email,password,name} = req.body;

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