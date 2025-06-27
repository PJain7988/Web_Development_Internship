const express = require ("express");
const app = express();
const path = require("path");
const {v4: uuidv4 } = require("uuid");
const port = 3000;

app.use(express.static(path.join(__dirname,"public")))
app.use(express.json()); // used to convert raw data into JSON
app.use(express.urlencoded({extended:true}));
let todos = [
    // {
    //     id:"1",
    //     task:"Somethng",
    //     completed:false
    // }
]
app.post("/taskMaster",(req,res)=>{
    const task = req.body.task;
    todos.push({task:task,completed:false,id:uuidv4()});
    res.status(201).json({todos});
})
app.delete("/todo/:id",(req,res)=>{
    const id = req.params.id;
    todos = todos.filter((todo)=>{
        return todo.id != id;
    })
    res.status(200).json({todos});
})
app.put("/todo/:id",(req,res)=>{
    const id = req.params.id;
    todos = todos.map((todo)=>{
        if(todo.id == id){
            // todo.completed = !todo.completed;
            // return todo;
            return {
                ...todo,
                completed: !todo.completed
            }
        }else{
            return todo;
        }
    })
    res.status(200).json({todos});
})
app.delete("/clear-complete",(req,res)=>{
    todos = todos.filter((todo)=>{
        return todo.completed == false;
    })
    res.status(200).json({todos});
})
app.get("/todo/filter",(req,res)=>{
    const filter = req.query.filter;
    console.log(req.query);
    if(filter == "active"){
        const filteredTodos = todos.filter((todo)=>{
            return todo.completed == false;
        })
        return res.status(200).json({todos:filteredTodos})
    }
    if(filter == "completed"){
        const filteredTodos = todos.filter((todo)=>{
            return todo.completed == true;
        })
        return res.status(200).json({todos:filteredTodos})
    }
    res.status(200).json({todos});
})

app.get("/taskMaster",(req,res)=>{   // sabse fast API get
    res.status(200).json({todos});
})
app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`);
})