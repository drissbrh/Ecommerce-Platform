const express = require("express");
const colors = require("colors");
const connectDB = require("./config/db");
const path = require("path");
const sneakerRoutes = require("./routes/sneakerRoutes");

require("dotenv").config({});

connectDB();
const app = express();
app.use(express.json());

app.use("/api/sneakers", sneakerRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api Is Running");
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`.yellow.bold);
});
