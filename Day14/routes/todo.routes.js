const express = require("express");
const Todo = require("../models/todo.model");

const router = express.Router();

router.post("/add-todo",async (req,res)=>{
    const task = req.body.task;
    let todo = await Todo.create({task:task});
    const Todos = await Todo.find();
    res.status(201).json({Todos});
})

router.delete("/todo/:id",async (req,res)=>{
    const id = req.params.id;
    await Todo.findByIdAndDelete(id);
    // await Todo.deleteOne({_id:id});
    const Todos = await Todo.find();
    res.status(200).json({Todos});
})

router.put("/todo/:id",async(req,res)=>{
    const id = req.params.id;
    const todo = await Todo.findById(id);
    await Todo.findByIdAndUpdate(id,{completed:!todo.completed})
    const Todos = await Todo.find();
    res.status(200).json({Todos});
})

router.delete("/clear-complete",async(req,res)=>{
  await Todo.deleteMany({completed:true});
  const Todos = await Todo.find();
  res.status(200).json({Todos});
})

router.get("/todo/filter",async(req,res)=>{
    const filter = req.query.filter;

    if(filter=="active"){
      const Todos = await Todo.find({completed:false});
      return res.status(200).json({Todos})
    }
    if(filter=="completed"){
      const Todos = await Todo.find({completed:true});
      return res.status(200).json({Todos})
    }
    const Todos = await Todo.find();
    res.status(200).json({Todos})
    // const Todos = await Todo.find();
    // if(filter=="active"){
    //     const filteredTodos = Todos.filter((todo)=>{
    //         return todo.completed == false;
    //     })
    //     return res.status(200).json({Todos:filteredTodos})
    // }
    // if(filter=="completed"){
    //     const filteredTodos = Todos.filter((todo)=>{
    //         return todo.completed == true;
    //     })
    //     return res.status(200).json({Todos:filteredTodos})
    // }
    // res.status(200).json({Todos})
})

router.get("/all-todos",async(req,res)=>{
  const Todos = await Todo.find()
  res.status(200).json({Todos})
})

module.exports = router