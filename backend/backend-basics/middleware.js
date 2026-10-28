

//------------------------Middleware--------------------------

// import express from "express";  //Import an express 
// const app = express(); //Create an appliation 

// app.use((req, res, next) => {
//   console.log("Middleware executed");     //basic syntax of middleware

//   next();
// });









// import express from "express";
// const app = express();

// // Middleware
// app.use((req, res, next) => {
//   console.log("Request received");
//   next();
// });

// // Route handler
// app.get("/", (req, res) => {
//   res.send("Welcome to Express!");
// });

// app.listen(3000, () => {
//   console.log("Server running on port 3000");     // http://localhost:3000/
// });






// ------------------  Built-in Middleware --------------------

// 1. express.json()  : Read JSON request bodies


// import express from "express";
// const app = express();

// // Built-in middleware
// app.use(express.json());

// app.post("/products", (req, res) => {
//   console.log(req.body);

//   res.json({
//     message: "Product received",
//     product: req.body
//   });
// });

// app.listen(3000);






//2. express.urlencoded() : Read form data
// format: application/x-www-form-urlencoded


// import express from "express";
// const app = express();

// app.use(express.urlencoded({ extended: true }));

// app.post("/register", (req, res) => {
//   const username = req.body.username;
//   const email = req.body.email;

//   res.json({ username, email });
// });






// 3. express.static() — Serve static files

// app.use(express.static("public"));






// --------------------3. Custom Middleware ----------------------------
// Example 1: Request logger

// import express from "express";
// const app = express();

// function logger(req, res, next) {
//   console.log(req.method, req.url);
//   next();
// }

// app.use(logger);

// app.get("/", (req, res) => {
//   res.send("Home page");
// });

// app.listen(3000);







// Example 2: Add information to the request
// Middleware can modify req before the route handler runs.

// import express from "express";
// const app = express();

// function addStoreName(req, res, next) {
//   req.storeName = "Petal & Purl";
//   next();
// }

// app.use(addStoreName);

// app.get("/", (req, res) => {
//   res.send(`Welcome to ${req.storeName}`);
// });





// Example 3: Authentication middleware
// Suppose an admin-only route should be accessible only when the request contains a valid token.



// import express from "express";
// const app = express();

// function checkAuth(req, res, next) {
//   const token = req.headers.authorization;

//   if (token === "demo-token") {
//     next();
//   } else {
//     res.status(401).json({
//       message: "Unauthorized"
//     });
//   }
// }

// app.get("/admin", checkAuth, (req, res) => {
//   res.send("Welcome, admin!");
// });





// -------------------- 4. Third-party Middleware --------------------

// 1. morgan : Request logging 

// import express from "express";
// import morgan from "morgan";

// const app = express();

// app.use(morgan("dev"));

// app.get("/", (req, res) => {
//   res.send("Hello!");
// });

// app.listen(3000);






// B. CORS — Allow frontend requests

// import express from "express";
// import cors from "cors";

// const app = express();

// app.use(cors({
//   origin: "http://localhost:5173"
// }));

// app.get("/products", (req, res) => {
//   res.json([
//     { name: "Crochet Rose", price: 799 }
//   ]);
// });

// app.listen(3000);






// C. Helmet — Security-related headers

// import express from "express";
// import helmet from "helmet";

// const app = express();

// app.use(helmet());

// app.get("/", (req, res) => {
//   res.send("Secure Express application");
// });

// app.listen(3000);





// D. Cookie-parser — Read cookies

// import express from "express";
// import cookieParser from "cookie-parser";

// const app = express();
// app.use(cookieParser());

// app.get("/cookies", (req, res) => {
//   res.json(req.cookies);
// });

// app.listen(3000);
