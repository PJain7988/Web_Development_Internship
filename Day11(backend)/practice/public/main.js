
const getAllTodo = async()=>{
    const res = await axios.get("http://localhost:5000/all-todos");
    console.log(res.data);
    // console.log(res.data.TODOS);
}

getAllTodo();