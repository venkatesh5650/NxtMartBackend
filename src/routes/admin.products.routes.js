import express from "express";
import requireRole from "../middleware/requireRole.js";
import * as controller from "../controllers/admin.products.controller.js";

const router = express.Router();

router.use(requireRole("ADMIN", "DEMO_ADMIN"));

router.get("/", requireRole("ADMIN", "DEMO_ADMIN"), controller.listProducts);
router.post("/", requireRole("ADMIN"), controller.create);
router.put("/:id", requireRole("ADMIN"), controller.update);
router.patch("/:id/toggle", requireRole("ADMIN"), controller.toggle);

export default router;
