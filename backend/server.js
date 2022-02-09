const express = require("express");
const colors = require("colors");
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const sneakerRoutes = require("./routes/sneakerRoutes");

require("dotenv").config({ path: "./backend/config/config.env" });

connectDB();
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Big Big time man");
});

app.use("/api/sneakers", sneakerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`.yellow.bold);
});
