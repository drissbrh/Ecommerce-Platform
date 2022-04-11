import express from "express";
import colors from "colors";
import connectDB from "./config/db.js";
import path from "path";
import sneakerRoutes from "./routes/sneakerRoutes.js";
import dotenv from "dotenv";

dotenv.config();

connectDB();
const app = express();

app.use(express.json());

app.use("/api/sneakers", sneakerRoutes);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`.yellow.bold);
});
