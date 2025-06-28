const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minLength:6
    }
},{
    timestamps:true
})
const User = mongoose.model("User",userSchema);
module.exports = User;  // A file is also called a module. moduler approach -> using export to export functions,methods and models and require to import it in files where we want to use them.
// const User = require("./user.model"); // importing the user model in another file.  //