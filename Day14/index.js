const express = require("express");
const PORT = 4000;
const app = express();
require("dotenv").config();
const path = require("path");
const connectToDB = require("./db/connection");

app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
const userRouter = require("./routes/user.routes");
app.use("/user",userRouter)


app.listen(PORT,async()=>{
    await connectToDB();
    console.log(`server is running on port ${PORT}`);
})