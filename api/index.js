const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json()); // MUST be above routes

// Sample product data
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Tablet", price: 15000 },
  { id: 4, name: "Headphones", price: 3000 },
  { id: 5, name: "Keyboard", price: 1500 },
  { id: 6, name: "Mouse", price: 800 },
  { id: 7, name: "Monitor", price: 12000 },
  { id: 8, name: "Printer", price: 9000 },
  { id: 9, name: "Camera", price: 25000 },
  { id: 10, name: "Speaker", price: 4000 }
];

// GET API
app.get("/api/products", (req, res) => {
  res.status(200).json({
    status: true,
    total: products.length,
    data: products
  });
});

// POST API


app.post("/api/products", (req, res) => {
  const { id, name, price } = req.body;

  if (!id || !name || !price) {
    return res.status(400).json({
      status: false,
      message: "All fields are required"
    });
  }

  products.push({ id, name, price });

  res.status(201).json({
    status: true,
    message: "Product added successfully"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
