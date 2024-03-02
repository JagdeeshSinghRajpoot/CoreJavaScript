let btn1 = document.querySelector("#btn1");

// btn1.onclick = (e) => {
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.clientX, e.clientY);
//   // console.log("btn1 was clicked");
//   // let a = 25;
//   // a++;
//   // console.log(a); //26
// };

// btn1.addEventListener("click", (e) =>{
//   console.log("button1 was clicked - handler1");
//   // console.log(e);
// });

// btn1.addEventListener("click", () => {
//   console.log("button1 was clicked - handler2");
// });

// const handler3 = () => {
//   console.log("button was clicked - handler3");
// };

// btn1.addEventListener("click", handler3);

// btn1.addEventListener("click", () => {
//   console.log("button1 was clicked - handler4");
// });

// btn1.removeEventListener("click", handler3);
// let div = document.querySelector("div");


let modeBtn = document.querySelector("#mode");


let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
  if(currMode === "light"){
    currMode = "dark";
    body.classList.remove("light");
    body.classList.add(currMode);
    
    // document.querySelector("body").style.backgroundColor = "black";
  }else{
    currMode = "light";
    body.classList.remove("dark");
    body.classList.add(currMode);
    
    // document.querySelector("body").style.backgroundColor = "white";
  }
  
console.log(currMode);
});

let Y = document.querySelector("#Y");
let box = document.querySelector("#box");
console.log(box);
box.innerHTML = "<h1>hello!</h1>"
let p = document.createElement("p");
box.after(Y);
box.addEventListener('mouseover', (e) => {
  p.innerHTML= e.clientX;
  p.style.color = "rgb(40,200,100)";
  console.log(box);

});

