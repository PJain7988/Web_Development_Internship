//////////////////////////////////////////////// Function //////////////////////////////////////////////////////////////
console.log("____________________________-__ Functions ___________________________________________________\n");
function fun(){
    console.log("objects");
}
let result = fun();
console.log("----------------------------------------------------------------------");
console.log(result); // gives undefined beacause we not return any value and by default return value of function is undefined.
console.log("----------------------------------------------------------------------");
console.log(fun());
console.log("----------------------------------------------------------------------");

function fun2(){
    return 10 + 20;
}
console.log(fun2());

console.log("___________________ Argument Functions ______________________________\n");
function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a+b;
}
let ans = sum(100,200);
let ans2 = sub(100,200);
let res = sum (b = 100 , a = -400);
let res2 = sub (b = 100 , a = -400);
console.log("----------------------------- SUM -----------------------------------------");
console.log(ans);
console.log(res);
console.log("----------------------------- SUB -----------------------------------------");
console.log(ans2);
console.log(res2);

console.log("----------------------------- Three argument -----------------------------------------");

function fun3(a,b,c){
    return a+b+c;
}
let res3 = fun3(1,3);
console.log(res3); // gives NAN because we pass only two argument and third argument  is by default is undefined

console.log("----------------------------- Default arguments -----------------------------------------");
// used for to prevent undefined
function fun4(a,b,c=0){
    return a+b+c;
}
let ans3 = fun4(1,3);
console.log(ans3); // gives 4 because c is 0 by default

// console.log("----------------------------- Anonymous function -----------------------------------------");
// we can use function expression to create anonymous function
function fun5(){
    return{
        name:"hello",
        work:"nothing"
    }
}
console.log(fun5());

console.log("----------------------------- Arrow function -----------------------------------------");
// arrow function is used to create small function
// it is used to reduce the code
// it is used to create function expression
// it is used to create function declaration
// it is used to create function expression with return statement
// it is used to create function expression without return statement
// it can't access arrow fun before creating
// it can't use this keyword
// it can't use arguments keyword
// it can't use function name

let arrowFun =() =>{
    console.log("this is arrow function");
    return "return from arrow function";
}
let arrowRes = arrowFun();
console.log(arrowRes); // gives return from arrow function

let arrowFun2 =(a,b)=>{
    console.log("this is arrow function");
    return a+b;
}
let arrowRes2 = arrowFun2(1,5);
console.log(arrowRes2);

// Difference between arrow function and simple function

///////////////////////////////////////////////// Hosting /////////////////////////////////////////////////
console.log("----------------------------- Hoisting -----------------------------------------");
// hoisting is used to move the variable or function at the top of the code
function f(a){
    return a;
}
function f(a,b){
    return a+b;
}
let re = f(2,3);
console.log(re); // it gives NaN  because jo hmne sbse last function ko call kiya hai uska hi output print hoga

function f(a,b,c){
    return a+b+c;
}
let rest = f(7,8,20);
console.log(rest);

console.log("----------------------------- Higher order functions & callback functions ---------------------------------");
// When we pass a function as a arguments(parameters) to another function is called higher order function.
// When we pass a function as a return type of a function is called higher order function.
// When we pass a function as a return type of a function is called callback function.
// When we pass a function as a arguments(parameters) to another function is called callback function.

function helper(){
        console.log("helper function is executing...");
        return 10;
}
function higherOrderFun(fun){
    console.log("higher order executing...");
    let res = fun();
    return +(res)+5;  // to make string
}

let answer = higherOrderFun(helper);
console.log(answer); // gives 15
console.log("----------------------------- Annoymus function ---------------------------------");
// Annoymus function is a function which is not defined with any name.
// It is used when we need to use a function only once.

let result2 = higherOrderFun(function(){
    console.log("this is annoymous function");
    return "20";
})
console.log(result2); // gives 25

console.log("----------------------------- Callback function ---------------------------------");
// callback function is a function which is passed as an argument to another function.
// It is used when we need to perform some operation after some operation is completed.

function cb(a,b){
    console.log("Call back function is executing....");
    return a+b;
}

function parent(a,b,fun){
    console.log("Parent function is executing...");
    let sum = a+b;
    // let res = fun(sum,20);
    // return res;
    return fun(sum,20);
}

let answer2 = parent(10,20,cb);
console.log(answer2); // gives 50