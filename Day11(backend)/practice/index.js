const express = require('express');
const app = express();
const path = require("path");
const PORT = 5000;

const TODOS = [
    {
        task : "this is task 1",
        completeed: false
    }
]

app.use(express.static(path.join(__dirname,"public")))
app.use(express.json()); // used to convert raw data into JSON
app.use(express.urlencoded({extended:true}));

app.get("/addTodo",(req,res)=>{
    res.redirect("addForm.html")
})
app.post("/addTodo",(req,res)=>{
    console.log(req.body);
    const task = req.body.task;
    TODOS.push(
        {
            task:task,
            completeed:false
        }
    )
    res.redirect("/all-todos")
})
app.get("/all-todos",(req,res)=>{
    res.status(200).json({TODOS});
})
app.listen(PORT,()=>{
    console.log(`server is live on port ${PORT}`);
})