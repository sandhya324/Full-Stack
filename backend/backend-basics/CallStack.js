//----------------1. Call Stack-----------------------
// function first(){
//     console.log("First funtion");
// }

// function second(){
//     first();
//     console.log("Second function");
// }

// second();








//----------------2. Callback Function----------------------
// Callback is a funtion that passed an argument to another function so that i can be called later or at a paticular point 

// function greet(name, callback){
//     console.log("Hello " + name + " !");
//     callback();
// }

// function sayBye(){
//     console.log("Good Bye !");
// }

// greet("Sam", sayBye);





// --------------- 3. Callback Queue ---------------

// console.log("Start");

// setTimeout(()=>{
//     console.log("Timer Finished");
// }, 2000);

// console.log("End");








// console.log("Start");

// process.nextTick(()=>{
//     console.log("Next Tick");
// })

// Promise.resolve().then(()=>{
//     console.log("Promise");  
// });

// setTimeout(()=>{
//     console.log("Timer");
// }, 0);

// console.log("End");
