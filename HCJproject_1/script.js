// console.log("hello");

// console.dir(document.body);

// let hading = document.getElementById("hadding");
// console.dir(hading);


// let headings = document.getElementsByClassName("CHading");
// console.dir(headings);
// console.log(headings);

// let pera = document.getElementsByTagName("p");
// console.log(pera); 


// let element = document.querySelector("p");
// console.log(element);


// let allElement = document.querySelectorAll("p");
// console.log(allElement);

// let hading = document.querySelector("#hadding");
// console.dir(hading);

// let perag = document.querySelector(".CHading");
// console.dir(perag);

let newBtn = document.createElement("button");
newBtn.innerHTML="click me";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

let body = document.querySelector("body");
body.prepend(newBtn);