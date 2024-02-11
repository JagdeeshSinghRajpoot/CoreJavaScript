let marks_student1 = 97;
let marks_student2 = 82;

let marks = {
  stu1: 97,
  stu2: 82
}


let arr = [1, 2, 5, 7];
console.log(arr);
console.log("arr[0] "+ arr[0]);
console.log("arr[1] "+ arr[1]);
console.log("arr[2] "+ arr[2]);
console.log("arr[3] "+ arr[3]);
console.log("arr[4] "+ arr[4]);

let StudentName = ["ankit", "mahesh", "yogesh", "gagan", "jagdeesh"];

StudentName[3] = "monu";

let name = "jagdeesh";
name = "yogesh";
console.log(name);

for(let i = 0;i<StudentName.length;i++){
  console.log(StudentName[i]);
}


for(let i = 0;i<arr.length;i++){
  console.log("arr["+i+"] "+ arr[i]);
}

let studentMarks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let i = 0;i<studentMarks.length;i++){
  sum += studentMarks[i];
}

let Avg = sum/studentMarks.length;

console.log(`Average marks of the entire class = ${Avg}`);



let arr = ["jagdeesh", "mahesh", "yogesh", "mannu", "Aashutosh"];
console.log("Length of the orgnal array is = "+arr.length);
console.log(arr);

console.log("length of new array is = " + arr.push("uttam")); // add a element end of array and return ne length 
console.log(arr);

console.log("remove last element is = "+arr.pop()); //remove last element of a array and return the element 
console.log(arr);

arr.shift(); //remove frist element and return the element
console.log(arr);

let fristSubArray = arr.slice(/*Starting Index*/0, /*Ending Index*/2);// Returns a copy of a section of an array.
console.log(fristSubArray);

let SecondSubArray = arr.slice(2,3);
console.log(SecondSubArray);

let concatArray = arr.concat(fristSubArray);
console.log(concatArray);

// Q1 Create an array to store compaines -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

let compaines = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(compaines);

// a. Remove the frist company from the array
compaines.shift();
console.log(compaines);

// b. Remove Uber & Add Ola in its place
compaines.splice(1,1,"Ola");
console.log(compaines);

// c. Add Amazon at the end
compaines.push("Amazon");
console.log(compaines);






