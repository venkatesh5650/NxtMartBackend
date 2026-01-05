import express from "express";
import auth from "../middleware/auth.js";
import requireRole from "../middleware/requireRole.js";
import {
  getAllOrders,
  getAdminOrderDetails,
  adminUpdateStatus
} from "../controllers/admin.orders.controller.js";

const router = express.Router();

router.use(auth, requireRole("ADMIN"));

router.get("/orders", getAllOrders);
router.get("/orders/:id", getAdminOrderDetails);
router.put("/orders/:id/status", adminUpdateStatus);

export default router;
