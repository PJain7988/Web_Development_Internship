import mongoose from "mongoose";

export const connectionDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Mongoose Connected ${conn.connection.host}`)
    }catch(error){
        console.log(error.message);
        process.exit(1);
    }
}