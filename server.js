const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Supabase CRUD with Sequelize");
});

// User routes
app.use("/api/users", userRoutes);

// Start server
const PORT = process.env.PORT || 5000;
sequelize
  .sync() // create tables automatically
  .then(() => {
    console.log("Database connected.");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("Error connecting to DB:", err));
