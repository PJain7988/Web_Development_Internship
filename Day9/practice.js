const form = document.getElementById("search-form");
form.addEventListener("submit",async (e)=>{
    e.preventDefault();  // stops page reload
    let search = e.target.children[0].value;
    let res = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=b9e28845`);
    console.log(res.data.Search);
    createcard(res.data.Search)
})
const container = document.getElementById("container");
function createcard(movies){
    container.innerHTML
    movies.forEach(movie =>{
        const div = document.createElement("div");
        const img = document.createElement("img");
        img.src = movie.Poster;
        div.innerHTML = `<h2>${movie.Title}</h2> <span>${movie.Year}</span>`;
        div.prepend(img);

        container.append(div);
    })
}