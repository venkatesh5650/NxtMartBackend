import express from "express";
import auth from "../middleware/auth.js";
import {
  createOrder,
  updateStatus,
  getOrderHistory,
  getMyOrders,
} from "../controllers/orders.controller.js";
import { getOrderDetails } from "../controllers/orders.controller.js";

const router = express.Router();

router.post("/", auth, createOrder);
router.get("/", auth, getMyOrders);
router.get("/:id/history", auth, getOrderHistory);
router.put(
  "/:id/status",
  (req, res, next) => {
    console.log("PUT /orders/:id/status hit", req.body);
    next();
  },
  updateStatus
);

router.get("/:id", auth, getOrderDetails);

export default router;
