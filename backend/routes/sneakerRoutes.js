import express from "express";
const sneakerRoutes = express.Router();

import {
  getProducts,
  getProductById,
} from "../controllers/sneakerControllers.js";

sneakerRoutes.get("/", getProducts);
sneakerRoutes.get("/:id", getProductById);

export default sneakerRoutes;
