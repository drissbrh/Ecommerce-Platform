import express from "express";
const sneakerRoutes = express.Router();

import {
  getAllSneakers,
  getSneakerById,
} from "../controllers/sneakerControllers.js";

sneakerRoutes.get("/", getAllSneakers);
sneakerRoutes.get("/:id", getSneakerById);

export default sneakerRoutes;
