// --------------- Synchronous code ----------------


// console.log("First");
// console.log("Second");
// console.log("Third");





// --------------- Asynchronous code ----------------

// console.log("First");

// setTimeout(() => {
//     console.log("Second");
// }, 2000);

// console.log("Third");











// --------------- setImmediate ----------------

// console.log("Start..");

// setImmediate(()=>{
//     console.log("Immediate");
// })

// console.log("End");










//--------------- Promises and process.nextTick()---------------
// This is another important part of Node.js asynchronous execution.

// console.log("A");

// setTimeout(()=>{
//     console.log("B");
// })

// Promise.resolve().then(()=>{
//     console.log("C");
// })
// console.log("D");








//-------------process.nextTick()-------------------
// Process.nextTick scheduled the callback run or execute after the current operation completes ,before tha event loop continues to the next phase


// console.log("A");

// process.nextTick(()=>{
//     console.log("B");
// })

// Promise.resolve().then(()=>{
//     console.log("C");
// })

// console.log("D");










// console.log("1");

// setTimeout(()=>{
//     console.log("2");
// }, 0);

// setInterval(()=>{
//     console.log("3");
// }, 3000);

// Promise.resolve().then(()=>{
//     console.log("4");
// })

// console.log("5");








// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
//     res.send("Hello from Node.js!");
// });

// app.get("/data", async (req, res) => {
//     const result = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//     );

//     const users = await result.json();

//     res.json(users);
// });

// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });



