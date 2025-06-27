const btncontainer = document.getElementById("btn-container");
const form = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const clearBtn = document.getElementById("clearBtn");

todoList.addEventListener("click",async(e)=>{
    // console.log(e.target.parentElement);
    if(e.target.id == "delete"){
       const id = e.target.parentElement.id;
       const response = await axios.delete(`http://localhost:3000/todo/${id}`)
    //    console.log(response);
        renderTodos(response.data.todos);
    }
    if(e.target.id == "complete"){
        const id = e.target.parentElement.id;
        const response = await axios.put(`http://localhost:3000/todo/${id}`)
        renderTodos(response.data.todos);
    }
})
clearBtn.addEventListener("click",async(e)=>{
    // e.preventDefault();
    const res = await axios.delete("http://localhost:3000/clear-complete");
    renderTodos(res.data.todos);
})

form.addEventListener("submit",async(e)=>{
    e.preventDefault();
    const taskText = e.target.children[0].value;
    if(taskText.trim().length==0){
        alert("Please enter a task");
        return;
    }
    let result = await axios.post("http://localhost:3000/taskMaster",{task:taskText});
    e.target.children[0].value = "";
    renderTodos(result.data.todos);
})
function renderTodos(todos){
    todoList.innerHTML = "";
    for(let todo of todos){
        let div = document.createElement("div");
        div.id=todo.id;
        div.className = "todo-item";
        div.innerHTML = `${todo.task}<div id=${todo.id} class="extra">
        <button id="complete" class="btn-extra">
        ${todo.completed?"undo":"complete"}
        </button>
        <button id= "delete" class="btn-extra2">Delete</button>
        </div>`
        todoList.appendChild(div);
    }          
}

async function getAllTodos(){
    let result = await axios.get("http://localhost:3000/taskMaster");
    renderTodos(result.data.todos);
}

getAllTodos();
async function filterTodos(filter){
    let res = await axios.get("http://localhost:3000/todo/filter",{
        params:{
            filter:filter
        }
    });
    renderTodos(res.data.todos);
}

btncontainer.addEventListener("click",(e)=>{
    if(e.target.id=="active" || e.target.id=="all" || e.target.id=="completed"){
        for(let btn of btncontainer.children){
            btn.classList.remove("background");
        };
        e.target.classList.add("background");
    }
    if(e.target.id=="active"){
        filterTodos("active")
    }else if(e.target.id=="completed"){
        filterTodos("completed")
    }else if(e.target.id=="all"){
        filterTodos("all")
    }
    
})
