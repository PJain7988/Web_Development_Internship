const User = require("../models/user.model");

module.exports.createUser = async(req,res)=>{
    try{
        let {name,email,password} = req.body; // destructuring
        let user = await User.create({
            name:name,
            email:email,
            password:password
        })
        res.status(201).json({user});
    }catch(error){
        res.status(400).json({message:error.message});
        console.log(error);
    }
}

module.exports.getAllUsers = async (req,res)=>{
    try{
        let users = await User.find();
        res.status(200).json({users});
        }catch(error){
            res.status(400).json({message:error.message});
            console.log(error);
        }
}

// exports function
// module.exports = {createUser,getAllUsers};