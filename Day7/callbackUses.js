// map, filter, reduces, find, forEach , some
// async javascript - setTimeout, setInterval, Promise, asynnc await,
// api calling
console.log("________________________________________________MAp____________________________________________________\n");
console.log("------------------------Square-------------------------");
let arr = [1,2,3,4,5,6,7,8,9,10];
function square(num){
    return num*num;
}
let sqArr = arr.map(square);
console.log(sqArr);
// map() is a built-in JavaScript method that creates a new array populated with the results of calling
// a provided function on every element in the calling array.
// map() does not change the original array.

let squareArr = arr.map(function (num){
    return num*num;
})
console.log(squareArr);

let squareArr2 = arr.map((num)=>{
    return num*num;
})
console.log(squareArr2);

console.log("------------------------Cube-------------------------");
let cubeArr = arr.map((num)=>{
    return num*num*num;
})
console.log(cubeArr);

let cubeAr = arr.map(function (num){
    return num*num*num;
})
console.log(cubeAr);

function cube(num){
    return num*num*num;
}
let cubeArr2 = arr.map(cube);
console.log(cubeArr2);

console.log("________________________________________________ filter ____________________________________________________\n");
// filter() is a built-in JavaScript method that creates a new array with all elements that pass th
// filter() method.
// The filter() method creates a new array with all elements that pass the test implemented by a provided
// function.
// filter() does not change the original array.

function odd(num){
    return (num%2!=0);
}
console.log("------------------------Odd-------------------------");
let oddArr = arr.filter(odd);
console.log(oddArr);

let oddAr = arr.filter(function (num){
    return (num%2!=0);
})
console.log(oddAr);

let OddNum = arr.filter((num)=>{
    return (num%2!=0);
})
console.log(OddNum);

console.log("------------------------Even-------------------------");
function Even(num){
    return (num%2==0);
}
let EvenArr = arr.filter(Even);
console.log(EvenArr);

let EvenAr = arr.filter(function (num){
    return (num%2==0);
})
console.log(EvenAr);

let EvenNum = arr.filter((num)=>{
    return (num%2==0);
})
console.log(EvenNum);