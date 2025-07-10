import mongoose from "mongoose";
const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    description:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        min:0
    },
    category:{
        type:String,
        required: true
    }
},{timestamps:true});

const Product = mongoose.model("Product",productSchema);
export default Product;