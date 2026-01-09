import express from "express";
import requireRole from "../middleware/requireRole.js";
import * as controller from "../controllers/admin.users.controller.js";

const router = express.Router();


router.use(requireRole("ADMIN", "DEMO_ADMIN"));
router.get("/",requireRole("ADMIN", "DEMO_ADMIN"), controller.listUsers);
router.patch("/:id/toggle",requireRole("ADMIN"), controller.toggleUser);
router.get("/:id/orders",requireRole("ADMIN", "DEMO_ADMIN"), controller.getUserOrders);

export default router;
