// app.js
require("dotenv").config();
const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const { authenticateToken } = require("./middleware/authMiddleware");

app.use(express.json());

app.use("/api/products", authenticateToken, productRoutes);
app.use("/api/users", userRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
