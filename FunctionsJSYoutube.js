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





setTimeout(()=>{
  console.log("areyyy... madom");
},1000)

setInterval(() => {
  console.log("areyyy... madom");
},1000)
