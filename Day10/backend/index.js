const express = require("express");
const app = express();
const PORT = 3000;

console.log("object");
app.get("/",(req,res)=>{
    res.send("hello World");
})

app.get("/user",(req,res)=>{
    // res.send("this is request on '/user' ");
    let user = {
        name:"priya",
        arr : [1,2,3,"4",true]
    }
    res.json(user);
})



app.listen(PORT,()=>{
    console.log(`App is started at port ${PORT}!`);
});