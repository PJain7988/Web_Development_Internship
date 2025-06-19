// Objects
console.log("_______________ Object ___________________\n");
let person = {
    name:"Priya",
    age: 19,
    profession : "developer",
    skills : ["HTML","CSS","JS"]
}
console.log(person);
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
console.log(person.skills);
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
console.log(person["profession"]);

// arithmetic operators (+ , - , * , / , **)
console.log("___________ Arithmetic Operator _______________________\n");
console.log(Math.pow(2,5));
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
console.log(2**5);
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
console.log(Math.sqrt(4));

// assignment operators (== , != ,)
console.log("___________ Assignment Operator _______________________\n");
// conditional operators
let a = 10;
let b = "10";
if(b == a){
    console.log(true);
}
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
if(a === b){
    console.log(true);
}
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
if(a === b || b==a){
    console.log(true);
}
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
if(a === b && b==a){
    console.log(true);
}
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
if((a===b || a== b) || (a===b && b==a)){
    console.log("true");
}else{
    console.log("false");
}
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
if((a===b || a== b) || (a===b && b==a) && (a==b)){
    console.log("true");
}else{
    console.log("false");
}

// ternary operator
console.log("___________ Ternary Operator _______________________\n");
(a==b ? console.log("true statement"):console.log("false statement"));
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
let result = (a==b ? true : false);
console.log("result : ", result);
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");

// chaining
(a==b?(a===b?console.log("a and b both are of same data type"):console.log("a and b are equal but different data type")):console.log("not equal"));

// loops
console.log("_____________ for of loop _____________________\n");
let arr = [1,2,3,4,5,6,7,8];
for(let element of arr){
    console.log(element);
}

let person2 = {
    name:"Dinesh",
    age: 22,
    profession : "developer",
    skills : ["HTML","CSS","JS"]
}

// for in loop
console.log("___________ for in loop _______________________\n");
for(let key in arr){
    console.log(key,"->",arr[key]);
}
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
for(let key in person2){
    // console.log(key,"->",person2.key);  // not work as key is string and it gives undefined
    console.log(key,"->",person2[key]);
}

