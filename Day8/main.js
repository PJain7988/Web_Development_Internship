console.log("\n----------------------------- spread operator in object ---------------------------------\n");
let person = {
    name : "person",
    age : 24,
    skills:["js","react"]
}

let newPerson = {
    ...person,
    profession : "dev",
    home:"Panipat"
}

console.log("Original Object : ",person);
console.log("Updated Object as modified Original object : ",newPerson);
let numArr = [1,2,3,4,5,6];

console.log("\n----------------------------- spread operator in array ---------------------------------\n");

console.log("Original Array : ",numArr);
let newNum = [...numArr,7,8,9];
console.log("Updated Array as modified Original array : ",newNum);

console.log("\n----------------------------- spread operator in map ---------------------------------\n");
let arr = [
    {
        name:"abc",
        age:29,
    },
    {
        name:"Dinesh",
        age:21,
    },
    {
        name:"Mohit",
        age:14,
    },
    {
        name:"xyz",
        age:20,
    },
];

// add a new key "id" & its value to every object

console.log("Original Array of Object : ",arr);
arr = arr.map((obj,index)=>{
    return {
        ...obj,
        name: `${obj.name} Jain`, // overwrite Original key's value
        id:index+1,// new key & its value
        salary: (index + 1)*1000
    }
})
console.log("Updated Array as modified Original array of object : ",arr);

console.log("\n----------------------------- filter ---------------------------------\n");
let newArr = arr.filter((person)=>{
    return (person.age >= 18);
})
console.log(newArr);

console.log("\n----------------------------- Reducce ---------------------------------\n");
// accumulator (acc) is the initial value of the accumulator, and the current value in the array
// current value is the value of the element at the current index of the array
// index is the index of the current element being processed in the array
let ar = [1,2,3,4,5,6,7];
let sum = ar.reduce((acc,cur)=>{
    return acc + cur;
},0)
console.log("Sum of ",ar," is : ",sum);

let mul = ar.reduce((acc,cur)=>{
    return acc * cur;
},1)
console.log("\nMultiply of ",ar," is : ",mul);

let salarySum = arr.reduce((accum,person)=>{
    return accum + person.salary;
},0);
console.log("\nSum of salary of all persons in array is : ",salarySum);

console.log("\n----------------------------- find ---------------------------------\n");
// find() method returns the first element in the array that satisfies the provided testing function.
// If no elements satisfy the testing function, undefined is returned.
// same as filter but return first matching element.
let result = arr.find((person)=>{
    return (person.age < 25);
})
console.log(result);

console.log("\n----------------------------- foreach ---------------------------------\n");
// forEach() method calls a function once for each array element.
// The array is not passed to the function, but the function is called with the array element as
// an argument.

arr.forEach(element=>{
    console.log(element);
})

