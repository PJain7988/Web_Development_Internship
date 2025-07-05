const createUser = async()=>{
    let res = await axios.post("http://localhost:4000/user/create",{
        name : "axios",
        email : "axios@gmail.com",
        password : "567890"
    });
    console.log(res.data);
}

createUser();