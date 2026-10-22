// npm i nodeman
//npx nodemon server










// const name = document.getElementsId("name");

// button.addEventListner("click", function(){
//     name.textcontext = "Welcome to JavaScript!";
// });




//--------------Variables-----------------

// const productName = "Crochet Flower Bouquet";
// const price = 1299;
// let stock = 12;

// console.log(productName);
// console.log(price);
// console.log(stock);




// ----------let — value can be reassigned------
// let stock = 12;
// stock = 10;

// console.log(stock);


// ----------const — binding cannot be reassigned-------
// const port = 5000;
// console.log(port);



// --------var — older declaration style----------
// var username = "Riya";
// username = "Priya";

// console.log(username);




// const cartItems = [];
// cartItems.push("Flower Bouquet");

// console.log(cartItems);




//------------scope variable ----------
// if (true) {
//   let stock = 10;
//   const price = 499;

//   console.log(stock); 
// }

// console.log(stock)




// function greet(name){
//     console.log("Hello, " + name);
// }

// greet("Sandhya");





// function add(a, b){
//     return a + b;
// }

// let result = add(10, 20);
// console.log(result);






// function square(number){ // function parameter 
//     return number * number;
// }

// console.log(square(4)); //Function argument 




// const shopName = "Petal & Purl";

// function showShop() {
//   const message = "Welcome to our store";

//   console.log(shopName);
//   console.log(message);
// }

// showShop();

// console.log(shopName);







// function calculatePrice(price, quantity) {
//   return price * quantity;
// }

// const total = calculatePrice(100, 2);
// console.log(total);









// console.log("Hello");

// const name = "Petal & Purl";
// const price = 1299;

// console.log("Store:", name);
// console.log("Product price:", price);











// const { log } = require("node:console");
// const http = require("node:http");

// const server = http.createServer((req, res)=>{
//     res.writeHead(200, {
//         "Content-Type" : "Text/Plain"
//     })

//     res.end("Hello from my node.js server !");
// });

// server.listen(3000, ()=>{
//    console.log("Server running at http://localhost:3000");
// });



// const name = "Student1";
// const learningGoal = "Learn node.js"
// const currentTopic = "Node.js" ;


// console.log(name);
// console.log(learningGoal);
// console.log(currentTopic);






// const add = require("./math")
// console.log(add(10, 20));


// import { log } from "node:console";
// import { add,mul } from "./math.js";
// console.log(add(5, 3));
// console.log(mul(2, 3));
// console.log(add(100,500));



// import { log } from "node:console";
// import fs from "node:fs";
// fs.writeFileSync("demo.txt", "Hello!");

// console.log("File created");




// import fs from "node:fs";
// fs.writeFileSync("Greet.txt", "Good Morning !");

// console.log("File is Created!");





// import path from "node:path";

// console.log(path.basename("folder/server.js"));
// console.log(path.extname("server.js"));








// import os from "node:os";

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.freemem());










// import http from "node:http";

// const server = http.createServer((req, res) => {
//   res.end("Hello from Node.js");
// });

// server.listen(8000, () => {
//   console.log("Server running on port 8000");
// });





// 1. fs — File System

// const fs = require("fs");
// fs.writeFileSync("hello.txt","Hello Node.js");






// 2. http — HTTP Server
// const http = require("http");

// const server = http.createServer((req, res) =>{
//     res.end("Hello node.js");
// });

// server.listen(3000);




// 3. path — Path Utilities
// const path = require("path");
// console.log(path.basename("folder/demo.txt"));   //basename() is a method of Node.js's built-in path module. It returns the last part of a file path, usually the file name along with its extension.

// console.log(path.basename("images/photo.png"));
// // photo.png

// console.log(path.basename("src/components/Navbar.jsx"));
// // Navbar.jsx

// console.log(path.basename("/home/user/index.js"));
// index.js






// 4. os — Operating System
// const os = require("os");

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.totalmem());





// 5. events — Event Handling
// const EventEmitter = require("events");
// const event = new EventEmitter();

// event.on("greet", ()=>{
//     console.log("Hello"); 
// });

// event.emit("greet");
// on() listens for an event; emit() triggers it.




// 6. timers — Scheduling Tasks
// setTimeout(()=>{
//     console.log("Executed after 2 seconds");
// }, 2000);



// 7. crypto — Cryptography
//used for hashing, generating random values and cryptographic operations 

// const crypto = require("crypto");
// console.log(crypto.randomUUID());



// const add = require("./math.js");
// console.log(add(10, 20));



// import { add } from "./math.js";
// console.log(add(10, 20));









// Js classes  
// virtual dom 
// js and react differece 
// single page application 
// tailwing and css 
// react dom
// boostrap diff tailwind 
//website flow








