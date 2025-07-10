import mongoose from "mongoose";
export const connectDb = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Mongodb connected ${conn.connection.host}`); // connection .hsot is a string
    }catch(error){
        console.log(`Error connecting to mongoDB ${error.message}`);
        process.exit(1); // it is used for forcefully connection break
    }
}