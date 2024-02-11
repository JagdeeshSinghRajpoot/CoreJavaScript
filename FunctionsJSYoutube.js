// Function Definition

function myFunction(){
  console.log("walcome to javaScript");
}

function myFunction(/*parameter*/msg){
  console.log(msg);
}


// Function call
// myFunction();
myFunction(/*argument*/"I love JS");


function sum(x, y){
  console.log(x + y);
}

sum(3,5);
console.log(multiply(3, 5));

function multiply(x, y){
  return x*y;
}

// Modern JS
// Arrow Function

const arrowSum = (x, y) => {
  console.log(x + y);
  return x+y;
}

console.log(arrowSum(2, 3));

// Multiplication function

const arrowMul = (x, y) => {
  return x*y;
}

console.log(arrowMul(0, 4));

const printHello = () => {
  console.log("hello");
}
printHello();

/* Q1. Create a function using the "function" keyword that takes a String as an argument & returns the 
numbers of vowels in the string */ 

function NoOfVowels(String){
  let sum = 0;
   
  
for(let i = 0;i<String.length;i++){
  if(String.charAt(i)==="a" || String.charAt(i)==="e" || String.charAt(i)==="i" || String.charAt(i)==="o" || String.charAt(i)==="u"
   || String.charAt(i)==="A" || String.charAt(i)==="E" || String.charAt(i)==="I" || String.charAt(i)==="O" || String.charAt(i)==="U"){
      sum++;
  }
}
return sum;
}

console.log(NoOfVowels("jagdeesh"));

/* Q2. Create an arrow function to perform the same task.*/
const countVowels = (String) =>{
  let sum = 0;
  for(const val of String){
    if(val==="a" || val==="e" || val==="i" || val==="o" || val==="u"){
      sum++;
    }
  }
  return sum;
}

console.log(countVowels("jagdeesh"));


//call back function
//forEach only for uge Array
let ar = [1,2,3,4,5,6,7,8,9,10];
ar.forEach((val) => {
  console.log(val);
});

ar.forEach(function printar(val){
  console.log(val);
});


let citys = ["seoni", "jabalpur", "indor", "mumbai", "delhi", "puna"];
citys.forEach((val, idx, arr) =>{
    console.log(val, idx, arr);
});


/* Q3. For a given array of numbers, print the square of each value using the forEach loop.*/

let nums = [3,4,5];
nums.forEach((val) => {
  console.log(val*val);
});


// Map method
// return calculate value of array
let squar = nums.map((val) => {
  return val * val;
});

console.log(squar);

// Filter method
//return true value array
let evenArr = ar.filter((val) =>{
  return val%2===0;
});
console.log(evenArr);

// Reduce method
//return one value 

let output = ar.reduce((prev, curr) =>{
  return prev + curr;
})
console.log(output);

const out = ar.reduce((prev, curr) =>{
  return prev < curr ? prev : curr;
});

console.log(out);


// Q1. We are given array of maks of students. Filter out of the marks of students that scored 90+.

let Smarks = [80,64,95,96,91,93];
let F90Plus = Smarks.filter((val) =>{
  return val > 90;
});

console.log(F90Plus);


/*
Q2. Take a number n as input form user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product(factorial) of all numbers in the array.
*/

let n = 5;
let arr = [];

for(let i=1;i<=n;i++){
  arr[i-1] = i;
}
console.log(arr);

//reduce method
let reduceSum = arr.reduce((prev, curr) =>{
  return prev + curr;
});
console.log(reduceSum);

let product = arr.reduce((prev, curr) =>{
  return prev * curr;
});
console.log(product);


// setTimeout(()=>{
//   console.log("areyyy... madom");
// },1000)

// setInterval(() => {
//   console.log("areyyy... madom");
// },1000)
