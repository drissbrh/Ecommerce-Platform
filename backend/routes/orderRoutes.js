import express from "express";
const orderRouter = express.Router();
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
} from "../controllers/orderControllers.js";
import { protect, admin } from "../middleware/authMiddleware.js";

orderRouter
  .route("/")
  .post(protect, addOrderItems)
  .get(protect, admin, getOrders);
orderRouter.route("/myorders").get(protect, getMyOrders);
orderRouter.route("/:id").get(protect, getOrderById);
orderRouter.route("/:id/pay").put(protect, updateOrderToPaid);
orderRouter.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);

export default orderRouter;
