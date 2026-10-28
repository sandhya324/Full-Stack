//API : Application programming interface
                
//REST: Respredtaion State transfor





const express = require("express");

const app = express();
const PORT = 3000;

// Middleware to read JSON request bodies
app.use(express.json());

// Initial product data
let products = [
  { id: 1, name: "Crochet Daisy", price: 299 },
  { id: 2, name: "Crochet Rose", price: 599 },
  { id: 3, name: "Handmade Keychain", price: 149 }
];

// Helper function to find a product by ID
function findProduct(id) {
  return products.find(
    (product) => product.id === Number(id)
  );
}

// CREATE: Add a new product
app.post("/api/products", (req, res) => {
  const { name, price } = req.body;

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof price !== "number" ||
    !Number.isFinite(price) ||
    price < 0
  ) {
    return res.status(400).json({
      message: "A valid name and non-negative price are required"
    });
  }

  const newProduct = {
    id: Math.max(0, ...products.map((p) => p.id)) + 1,
    name: name.trim(),
    price
  };

  products.push(newProduct);

  res.status(201).json({
    message: "Product created successfully",
    data: newProduct
  });
});

// READ: Get all products
app.get("/api/products", (req, res) => {
  res.status(200).json({
    count: products.length,
    data: products
  });
});

// READ: Get one product by ID
app.get("/api/products/:id", (req, res) => {
  const product = findProduct(req.params.id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  res.status(200).json({ data: product });
});

// UPDATE: Modify selected product fields
app.patch("/api/products/:id", (req, res) => {
  const product = findProduct(req.params.id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  const { name, price } = req.body;

  if (
    (name === undefined && price === undefined) ||
    (name !== undefined &&
      (typeof name !== "string" || !name.trim())) ||
    (price !== undefined &&
      (typeof price !== "number" ||
        !Number.isFinite(price) ||
        price < 0))
  ) {
    return res.status(400).json({
      message: "Provide a valid name or non-negative price"
    });
  }

  if (name !== undefined) product.name = name.trim();
  if (price !== undefined) product.price = price;

  res.status(200).json({
    message: "Product updated successfully",
    data: product
  });
});



//PUT


app.put("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const productIndex = products.findIndex(
    (product) => product.id === id
  );

  if (productIndex === -1) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  const { name, price } = req.body;

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof price !== "number" ||
    !Number.isFinite(price) ||
    price < 0
  ) {
    return res.status(400).json({
      message: "Valid name and price are required"
    });
  }

  products[productIndex] = {
    id,
    name: name.trim(),
    price
  };

  res.status(200).json({
    message: "Product replaced successfully",
    data: products[productIndex]
  });
});



// DELETE: Remove a product by ID
app.delete("/api/products/:id", (req, res) => {
  const product = findProduct(req.params.id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  products = products.filter(
    (item) => item.id !== product.id
  );

  res.status(204).end();
});

// Handle unknown API endpoints
app.use("/api", (req, res) => {
  res.status(404).json({
    message: "API endpoint not found"
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
