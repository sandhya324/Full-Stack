// 1 — Create an array called `students` containing 5 student names.
// Print the first and last student.

// let students = ["Sandhya", "Manya", "Kavya", "Shivansh", "Girisha"];

// console.log(students[0]);
// console.log(students[4]);







// 2 — Modify
// Given: let cities = ["Delhi", "Mumbai", "Dehradun", "Jaipur"];
// Change "Mumbai" to "Bangalore".

let cities = ["Delhi", "Mumbai", "Dehradun", "Jaipur"];

cities[1] = "Bangalore";
console.log(cities);








//  3 — Add & Remove
// Given: let numbers = [10, 20, 30];

// Do this:
// 1. Add `40` at the end.
// 2. Add `5` at the beginning.
// 3. Remove the last element.
// 4. Remove the first element.
// 5. Print the final array.

// let numbers = [10, 20, 30];
// numbers.push(40);
// numbers.unshift(5);
// numbers.pop();
// numbers.shift();
// console.log(numbers);








// 4 — Search
// Given: let skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

// Check whether:
// JavaScript
// Python
// React

// exist in the array.  Use `includes()`.

let skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

console.log(skills.includes("JavaScript"));
console.log(skills.includes("Python"));
console.log(skills.includes("React"));





// 5 — Loop 
// Given: let numbers = [10, 20, 30, 40, 50];

// Use a `for` loop to print every number.
// Then try to print only the numbers greater than `25`.


let number = [10, 20, 30, 40, 50];

//print every number
for(let i=0; i<number.length; i++){
    console.log(number[i]);
}

//print only the numbers greater than `25`
for(let i=0; i<number.length; i++){
    if(number[i] > 25){
        console.log(number[i]);
    }
}







// 6- Create: let marks = [78, 85, 92, 67, 88];

// Using a loop, calculate the total marks.
// Don't use `reduce()` yet—we'll learn that later.

let marks = [78, 85, 92, 67, 88];
let totalMarks = 0;

for(let i=0; i<marks.length; i++){
   totalMarks += marks[i];   
}

console.log(totalMarks);







// // Q1 — Basic
// // Find the largest number.

// let numbers = [12, 45, 7, 89, 23];
// let largest = 0;

// for(let i=0; i<5; i++){

//     if(numbers[i] > largest){
//         largest = numbers[i];
//     }

// }
// console.log(largest);



// // Q2 — forEach()
// // Use forEach() to calculate the sum.

// let numbers = [10, 20, 30, 40];
// let sum = 0;
// let total =  numbers.forEach(function(num){
//       Mistake 2: forEach() doesn't return a new value
//       return sum += num;
//       sum += num;  it should be this
// })

// console.log(total);






// // Q3 — map()
// // Create a new array where every number is doubled.
// // Expected: [4, 8, 12, 16]

// let numbers = [2, 4, 6, 8];

// let doubled = numbers.map(function(num){
//     return num * 2;
// })

// console.log(doubled);





// // Q4 — filter()
// // Create a new array containing only ages 18 or above.

// let ages = [12, 18, 25, 15, 30, 16];

// let newNumbers = numbers.filter(function(num){
//     return num >= 18;
// })

// console.log(newNumbers);




// // Q5 — reduce()
// // Calculate the total price using reduce().

// let prices = [100, 250, 50, 300];

// let total = prices.reduce(function(num, sum){
//      return sum + num;
// }, 0);

// console.log(total);

