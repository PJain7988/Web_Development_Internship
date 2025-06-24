/////////////////////////////////////////// eventListeners //////////////////////////////////////////////////////////
const h1 = document.querySelector("h1");

// h1.addEventListener("click",()=>{
//     h1.classList.toggle("background");
// })

// h1.addEventListener("click",(e)=>{
//     console.log(e);
//     h1.classList.toggle("background");
// })
h1.addEventListener("click",(e)=>{
    console.log(e.target); // return element at which the event occur
    h1.classList.toggle("background");
    console.log("h1 clicked")
})
const input = document.getElementById("textInp");
//////////////////////////////////////// event bubling ////////////////////////////////////////////
// Event Flow: The event goes from the innermost element to the outermost, like child → parent → grandparent.
// Default Behavior: JavaScript event listeners react in the bubbling phase by default (unless you specify otherwise).
// Real-life Example: Imagine clicking a button inside a form. The click event happens on the button first, then moves up to the form, and then maybe the whole webpage (document).
// Use Case: You can listen for events on a parent instead of each child. This is super useful for dynamic elements!
// Stop Bubbling : You can use event.stopPropagation() if you don’t want the event to bubble up further.

// h1.children[0].addEventListener("click",(e)=>{
//     console.log("span clicked");
// })

h1.children[0].addEventListener("click",(e)=>{
    e.stopPropagation(); // use this in child to stop propogation.
    console.log("span clicked");
    input.value = "";
})

// onchange event unpar lage gya jha hum type kar sakte h
// const input = document.getElementById("textInp");

///////////////////////////////////////////////////// input event ///////////////////////////////////////////////////
input.addEventListener("change",(e)=>{
    console.log(input.value);
    console.log(e.target.value);
})