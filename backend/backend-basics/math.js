// function add(a, b) {
//   return a + b;
// }


// function mul(a, b) {
//   return a * b;
// }
// export {add,mul};




// export function add(a, b) {  //"type": "module",
//   return a + b;
// }


// const express = require("express")
// import express from "express";



























// console.log("Hello world!");

// const name = "Node.js";
// console.log(name);



// console.log("First");   //The statement execute in order becuase these are syncronious statement 
// console.log("Second");
// console.log("Third");



// console.log("First");   //Node.js supports asynchronous operations, allowing it to handle tasks without blocking the entire application while waiting for many I/O operations to finish.

// setTimeout(()=>{
//   console.log("Second");
// }, 2000);

// console.log("Third");





// const storeName = "Petal & Purl";
// const productName = "Crochet Flower Bouquet";
// const price = 1299;

// console.log("Store :" + storeName);
// console.log("Product :" + productName);
// console.log("Price :" + price);



// function add(a, b){
//     return  a + b;
// }
// module.exports = add;



// import { add } from "./math.js";
// console.log(add(10, 20));



// import path from "node:path";
// const filepath = "folder/demo.txt";
// console.log(path.basename(filepath)); //Basename : is use to abstract the last part of the path , filename along with it's extention 







// const product = {
//     name: "Crochet Flower Bouquet",
//     price: 1299,
//     stock: 12,
//     category: "Handmade Gifts"
// };

// console.log("Name: ", product.name);
// console.log("Price:", product.price);
// console.log("Stock:", product.stock);
// console.log("Category:", product.category);






// const store = {
//     name: "Petal & Purl",
//     product: "Crochet Flower Bouquet",
//     price: 1299,
//     stock: 12
// };

// const totalStockValue = store.price * store.stock;

// console.log("Store Name:", store.name);
// console.log("Product:", store.product);
// console.log("Price per item: ₹", store.price);
// console.log("Available Stock:", store.stock);
// console.log("Total Stock Value: ₹", totalStockValue);



// const os = require("os");
// const path = require("path");
// const fs = require("fs");

// console.log("Platform:", os.platform());


// const fs = require("fs");
// fs.writeFileSync("demo.txt", "Hello Node.js!");





// import http from "node:http";

// const server = http.createServer((req, res) => {
//   res.end("Hello World");
// });

// server.listen(3000);

// import http from "node:http";
// console.log("Math.js is running successfully!");


// const EventEmitter = require("events");
// const event = new EventEmitter();

// event.on("greet",()=>{
//     console.log("Hello Event trigered");
    
// })

// event.emit("greet");


// const os = require("os");

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.totalmem());



// const crypto = require("crypto"); //Use to generate random number 
// console.log(crypto.randomUUID());




