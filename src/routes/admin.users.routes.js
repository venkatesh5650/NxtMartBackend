import express from "express";
import requireRole from "../middleware/requireRole.js";
import * as controller from "../controllers/admin.users.controller.js";

const router = express.Router();


router.use(requireRole("ADMIN"));
router.get("/", controller.listUsers);
router.patch("/:id/toggle", controller.toggleUser);
router.get("/:id/orders", controller.getUserOrders);

export default router;
