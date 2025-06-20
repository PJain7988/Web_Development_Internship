console.log("\n----------------------------- Question 1 ---------------------------------\n");
let menu = [
    "roti","rice","paneer","egg","dal","egg-curry","pizza","chicken","chicken-rice","matar paneer","dal-makhni",
]

// filter out veg and non-veg items
let nonveg = menu.filter((items)=>{
    return items.includes("chicken") || items.includes("egg");
})
console.log("Non veg : ",nonveg);

let veg = menu.filter((items)=>{
    return !(items.includes("chicken") || items.includes("egg"));
})
console.log("Veg : ",veg);

console.log("\n----------------------------- Question 2 ---------------------------------\n");


let products = [
  {
    name: "product 1 name",
    category: "wearable",
    color: ["red", "white"]
  },
  {
    name: "product 2 name",
    category: "playable",
    color: ["black", "silver"]
  },
  {
    name: "product 3 name",
    category: "wearable",
    color: ["blue", "white"]
  },
  {
    name: "product 4 name",
    category: "playable",
    color: ["white", "gray"]
  },
  {
    name: "product 5 name",
    category: "playable",
    color: ["gold", "black"]
  },
  {
    name: "product 6 name",
    category: "wearable",
    color: ["orange", "black"]
  },
  {
    name: "product 7 name",
    category: "wearable",
    color: ["purple", "pink"]
  }
];

// filter out all the product which are white & wearable
let wearableWhite = products.filter((product) =>{
    return (product.category == "wearable" && product.color.includes("white"));
})
console.log("The Product which are white & wearable is : ",wearableWhite);

console.log("\n----------------------------- Question 3 ---------------------------------\n");
new Promise((resolve) => {
  resolve(5);
})
  .then((num) => {
    console.log("First then:", num);
    return num * 2;
  })
  .then((num) => {
    console.log("Second then:", num);
    return num - 3;
  })
  .then((num) => {
    console.log("Final then:", num);
  });
console.log("\n----------------------------- Question 4 ---------------------------------\n");

console.log("A");
Promise.resolve().then(()=>{
    console.log("B");
});
console.log("c");
setTimeout(()=>{
    console.log("D");
},0);
console.log("E");

console.log("\n----------------------------- Question 5 ---------------------------------\n");
console.log("X");
new Promise((resolve)=>{
    console.log("Y");
    resolve();
})
.then(()=> {
    console.log("Z");
    return Promise.resolve("W");
})
.then((val)=>{
    console.log(val);
})
console.log("End");