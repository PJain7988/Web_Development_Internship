function cb(x){
    console.log("CallBack function",x);
    return function(y){
        console.log("Inner function",y);
        return x + y;
    };
}
function higher(callback){
    console.log("higher order function");
    let innerFunc = callback(5);
    console.log("this is below call");
    return innerFunc(10);
}

console.log(higher(cb));

console.log("-----------------------------------------2nd-----------------");
function cb(x){
    console.log("CallBack function",x);
    if(x>10){
        return "Greater than 10";
    }else{
        return "Less than or equal to 10";
    }
}
function higher(callback,value){
    console.log("higher order function");
    let ans = callback(value);
    console.log("this is below call");
    return ans;
}

console.log(higher(cb,12));
console.log("----------------------------------------------------------");
console.log(higher(cb,8));

console.log("-----------------------------------------3rd-----------------");
function cb(){
    console.log("CallBack function");
    return function(){
        console.log("Inner function 1");
        return function(){
            console.log("Inner function 2");
            return "Final Return";
        };
    };
}
function higher(callback){
    console.log("higher order function");
    let innerFunc = callback();
    console.log("this is below call 1");
    let innerFunc2 = innerFunc();
    console.log("this is below call 2");
    return innerFunc2();
}
console.log(higher(cb));

console.log("-----------------------------------------4th-----------------");
// Take an input(number) from user and console whether the number is 0,less than 0, or greater than 0 or a word
function check(x){
    console.log("Check function",x);
    if(x>0){
        return "Greater than 0";
    }else if(x == 0){
        return "Equal to 0";
    }else if(x<0){
        return "Less than 0";
    }else{
        return "Invalid Input";
    }
}

let num = prompt("Enter a number : ");
console.log("NUmber is : ",num);
console.log("By conditional operator : ",check(num));
console.log("By ternary operator : ");
(num>=0)?((num==0)?console.log("Equal to 0"):console.log("Greater than 0")): ((num<0)?console.log("less than 0") : console.log("Invalid Input"));
