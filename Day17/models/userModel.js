import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    lastLogin:{
        type:Date,
        default:Date.now
    },
    isverified:{
        type:Boolean,
        default:false
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken : String,
    verificationExpiresAt : Date,
},
    {timestamps:true}
);

const User = mongoose.model("User",userSchema);
export default User;