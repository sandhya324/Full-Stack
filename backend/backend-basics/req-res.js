//----------Request and Response-----------------------

// import express from "express";
// const app = express();

// app.get("/products", (req, res) => {
//   res.send("Here are the products");
// });

// app.listen(3000);


 



// ---------- Request Object (req) ------------------

// 1. req.method

// import express from "express";
// const app = express();

// app.get("/info", (req, res) => {
//   console.log(req.method);

//   res.send("Request received");
// });

// app.listen(3000);





// import express from "express";
// const app = express();


// const products = [
//   { id: 1, name: "Crochet Rose", price: 799 },
//   { id: 2, name: "Crochet Daisy", price: 499 }
// ];

// app.get("/products/:id", (req, res) => {
//   const id = Number(req.params.id);

//   if (!Number.isInteger(id) || id < 1) {
//     return res.status(400).json({
//       message: "Invalid product ID"
//     });
//   }

//   const product = products.find(item => item.id === id);

//   if (!product) {
//     return res.status(404).json({
//       message: "Product not found"
//     });
//   }

//   return res.status(200).json(product);
// });




// app.get("/product", (req, res) => {
//   res.json({
//     id: 1,
//     name: "Crochet Rose",
//     price: 799,
//     inStock: true
//   });
// });



