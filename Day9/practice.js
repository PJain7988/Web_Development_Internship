const form = document.getElementById("search-form");
form.addEventListener("submit",async (e)=>{
    e.preventDefault();  // stops page reload
    let search = e.target.children[0].value;
    let res = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=b9e28845`);
    console.log(res.data.Search);
    localStorage.setItem("movies",JSON.stringify(res.data.Search));
    createcard()
})
const container = document.getElementById("container");
function createcard(){
    let movies = JSON.parse(localStorage.getItem("movies"));
    container.innerHTML = "";
    movies.forEach(movie =>{
        const div = document.createElement("div");
        const img = document.createElement("img");
        img.src = movie.Poster;
        div.innerHTML = `<h2>${movie.Title}</h2> <span>${movie.Year}</span>`;
        div.prepend(img);

        container.append(div);
    })
}

if(localStorage.getItem("movies")){
    createcard();
}

localStorage.removeItem("name");