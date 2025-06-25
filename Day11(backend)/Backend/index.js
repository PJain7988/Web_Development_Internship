const express = require('express');
const app = express();
const path = require("path");
const PORT = 4000;

app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// app.use(()=>{
//     console.log("Generic Middleware");
// })

app.use((req,res,next)=>{
    console.log("Generic Middleware");
    next(); // I am telling req that it go forward(down)
})

app.use("/user",(req,res,next)=>{
    console.log("path specific middleware for '/user' ");
    next();
})

app.get("/contact",(req,res)=>{
    console.log("API hit");
    res.redirect("/contact.html");
})

app.get("/user",(req,res)=>{
    // res.send("Hello from user");
    return res.json({name:"Priya"})
    res.json({name:"Priya"})  // this will not work as function returned
})

app.post("/user",(req,res)=>{
    console.log("Form Submitted");
    console.log(req.body);
    res.send("Form submitted successfully");
})

app.get("/user",(req,res)=>{
    // res.send("Welcome from user");
    res.json({name:"Priya Jain"})
})

app.get("/",(req,res)=>{
    res.send("Server is running");
})

app.get("/test",(req,res)=>{
    console.log(req.query);
    // res.status(201).send("OK");
    res.status(201).json({
        data:req.query
});
})

app.listen(PORT,()=>{
    console.log(`server is live on port ${PORT}`);
})