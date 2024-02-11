// let myArray1 = new Array(3);
// myArray1[0] = 3;
// myArray1[1] = 4;
// myArray1[2] = 7;

// for(let i=0;i<myArray1.length;i++){
// console.log(myArray1[i]);
// }
// console.log("================");

// let myArray2 = [5,4,6,7,9];
// for(let i=0;i<myArray2.length;i++){
//   console.log(myArray2[i]);
//   }

//   console.log(myArray2);

  let evenArray = [2, 4, 6, 8, 10, 12];
  console.log(evenArray);
  evenArray.push(14);
  console.log(evenArray);
  evenArray.pop();
  console.log(evenArray);
  evenArray.unshift(0);
  console.log(evenArray);
  evenArray.shift()
  console.log(evenArray);
  evenArray.splice(2, 1);  //change original array (add, remove, replace)
  console.log(evenArray);

  evenArray.forEach(function(element){
    console.log(element);
  });


