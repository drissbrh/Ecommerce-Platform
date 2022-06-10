import express from "express";
const userRoutes = express.Router();

import {
  getUsers,
  getUserById,
  getUserProfile,
  updateUser,
  updateUserProfile,
  deleteUser,
  authUser,
  registerUser,
} from "../controllers/userControllers.js";

userRoutes.get("/", getUsers);
userRoutes.get("/:id", getUserById);
userRoutes.route("/login").post(authUser);
userRoutes.route("/").post(registerUser);

export default userRoutes;
