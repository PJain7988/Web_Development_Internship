// console.log("Hello World");

// var a = 5;
// let b ="hello";
// // only work for let and const
// // {
// //     // console.log(b);
// //     let b = 30;
// //     console.log(b);
// // }
// var a = 5;
// {
//     console.log(a);
//     var a = 20;
//     console.log(a);
// }
// console.log(a);

// console.log(b);
// const c = true;

// const arr = [1,2,3,4];
// arr[1] = 10; // tis is updation

// // arr = [6,7,8,9,10]; // this is reassingment and not allowed

// console.log(temp);
// var temp = "this is temp";
// console.log(temp);

// // console.log(temp2);
// // dead temproral zone (unless it is assigned a value)
// let temp2 = "this is temp 2";
// console.log(temp2);

// console.log(ar);
// var ar;
// console.log(ar);
// ar = 10;
// console.log(ar);

// let num = [1,2,3,"item 4",true,null,undefined];
// console.log(num[4]);

// let TwoDArr = [
//                 [1,2,3],
//                 [5,4,6]
//             ]
// console.log(TwoDArr);
// console.log(TwoDArr[0][1]);  // -> 2
// console.log(TwoDArr[1][2]);  // -> 6


// for(var i=0;i<3;i++){
//     // some code
// }
// console.log(i);

// var a = 1;
// {
//     let a = 2;
//     {
//         // gives redeclaration error as a is already declared above by let
//         var a = 3;
//         console.log(a);
//     }
// }

// // ---------------------------------------------------------------
// let a = 1;
// {
//     var a = 2;
// }
// console.log(a);
// // ---------------------------------
// {
//     var x = 10;
//     let x = 10;
//     // error, as it declared with let and can't be declared again
//     console.log(x);
// }

// array methds
let nums;
// add items at begining
nums = [1,2,3,4,5,6]
// nums .unshift(50);
nums.unshift(50,44,55);
console.log(nums);

// delete item from begining
nums.shift();
console.log(nums);

let a = [1,2,3,4,5];
let subArr = a.slice(2,4);
let subArr2 = a.slice(2); // start from 2nd index and ends at last
console.log(subArr);
console.log(subArr2);

// splice is used for 3 functionality
    // 1) to delete item in between
        a.splice(3,1); // delete one element at index 3
        a.splice(3,3); // delete 1 element at index 3 three times
        console.log(a);

    // 2) to add item in between
        a.splice(1,0,10);
        a.splice(1,0,10,11,12,13) ; // add multiple element at index 1 and shift elements forward
        console.log(a);
    // 3) to replace item in between
        a.splice(1,1,20);
        a.splice(1,1,10,11,12,13); // replace one element
        console.log(a);

// to  convert array into string
let str = a.toString();
let st = a.join(" ");
console.log(str);
console.log(st);

// String
let s = "Hello, World!";

// to replace word
s[4] = "-";
console.log(s);
s = s.replace("W","w"); // return a new string
console.log(s);

console.log(s[4]);
console.log(s.charAt(4));

console.log(s.startsWith("is")); // boolean
console.log(s.startsWith("H")); // boolean

console.log(s.includes("ri")); // check string is include or not
console.log(s.includes("wo"));

console.log(s.endsWith("ing"));
console.log(s.endsWith("ld!"));

let ar = s.split(" ");
console.log(ar);

let arr = s.split(" ")[0];
console.log(arr);

