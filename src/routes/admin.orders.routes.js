import express from "express";
import auth from "../middleware/auth.js";
import requireRole from "../middleware/requireRole.js";
import {
  getAllOrders,
  getAdminOrderDetails,
  adminUpdateStatus,
} from "../controllers/admin.orders.controller.js";

const router = express.Router();

router.use(auth, requireRole("ADMIN", "DEMO_ADMIN"));

router.get("/orders", auth, requireRole("ADMIN", "DEMO_ADMIN"), getAllOrders);
router.get(
  "/orders/:id",
  auth,
  requireRole("ADMIN", "DEMO_ADMIN"),
  getAdminOrderDetails
);

router.put("/orders/:id/status", auth, requireRole("ADMIN"), adminUpdateStatus);

export default router;
