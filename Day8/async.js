console.log("\n----------------------------- Async Js ---------------------------------\n");

console.log("----------------------------- setTimeout ---------------------------------\n");
// setTimeout() function is used to execute a function after a specified time in milliseconds.
// The function to be executed is passed as an argument to the setTimeout() function.
setTimeout(()=>{
    console.log("this comes after 2s");
},2000) // runs the callback function after 2000ms(2sec).

const callback = () =>{
    console.log("this is a outer callback function");
}
setTimeout(callback,1000) // runs the callback function after 1000ms(1sec).

console.log("----------------------------- setInterval ---------------------------------\n");
// The setInterval() function is used to execute a function at specified intervals (in milliseconds).
// The function to be executed is passed as an argument to the setInterval() function.
// The setInterval() function returns an interval ID which can be used to clear the interval.

const id = setInterval(()=>{
    console.log("this function is running every 3s");
},3000);
// To clear the interval, we use the clearInterval() function and pass the interval ID as an argument
// clearInterval(id); // this will stop the interval from running.
// The clearInterval() function is used to clear a timer set with setInterval().
// The clearInterval() function takes one argument, the interval ID returned by setInterval().
// The clearInterval() function clears the timer that was set by the setInterval() function.
// The clearInterval() function does not return any value.
// The clearInterval() function is used to clear a timer set with setInterval().

// clearInterval(id);
setTimeout(()=>{
    clearInterval(id);
},3000*4)

console.log("----------------------------- Promises ---------------------------------\n");
// A promise is a result of an operation that hasn't completed yet, but is expected to resolve with a value at some point in the future.
// A promise is an object that is used to handle asynchronous operations in JavaScript.
// A promise represents a value that may not be available yet, but will be available at some point in the future.
// A promise is created using the Promise constructor.
// The Promise constructor takes a callback function as an argument.
// The callback function is called with two arguments, resolve and reject and these both are function.
// The resolve function is used to resolve the promise with a value.
// The resolve function is called when the promise is resolved.
// The reject function is called when the promise is rejected.
// A promise is a value that may not be available yet, but will be resolved at some point
let b = 10;
const myPromise = new Promise((resolve,reject)=>{
    let num = Math.random()*10
    if(num<5){
        resolve(num)
    }else{
        reject(num)
    }
})
// The then() method is used to handle the resolved value of a promise.
// The then() method takes a callback function as an argument.
// The callback function is called with the resolved value of the promise.
// The then() method returns a new promise that resolves with the value returned by the callback function.
myPromise.then((data)=>{
    console.log("resolved value is ",data);
}).catch((err)=>{
    console.log("rejected value is ",err);
})
console.log(b);

const newMyPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("this is a promise which is resolved after 2s");
        resolve();
    },2000)
})

// The catch() method is used to handle the rejected value of a promise.
// The catch() method takes a callback function as an argument.
// The callback function is called with the rejected value of the promise.
newMyPromise.then(()=>{
    console.log("promise resolved");
})
console.log(newMyPromise);

//////////////////////////////////chaining
const chainPromise = new Promise((resolve,reject)=>{
    let num = Math.random()*100
    if(num<5){
        resolve(num)
    }else{
        reject(num)
    }
})

chainPromise.then((data)=>{
    if(data<25){
        return `num is less than 25 ${data}`
    }else{
        return `num is greater than 25 ${data}`
    }
}).then((dta)=>{
    if(dta<25){
        return `num is less than 25 ${dta}`
    }else{
        return `num is greater than 25 ${dta}`
    }
}).catch(()=>{
    console.log("object");
})


//////////////////////////////////// async function
let a = 10;
async function fun(){
    console.log("Async function");
}
let result;
const arrowfun = async() =>{
    console.log("async arrow function start");
    // let data = await fetch("https://jsonplaceholder.typicode.com/posts") // some api call
    // result = await data.json();
    let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    result = res.data;
    console.log(result);
    console.log("async arrow function end");
}
// The await keyword is used to pause the execution of an async function until a promise is resolved or rejected.
// The await keyword is used with the fetch() function to wait for the response of the API call
// The await keyword is used with the json() method to wait for the JSON data to be parsed

fun();
arrowfun();
console.log(a);

