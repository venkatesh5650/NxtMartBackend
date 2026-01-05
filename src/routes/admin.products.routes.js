import express from "express";
import requireRole from "../middleware/requireRole.js";
import * as controller from "../controllers/admin.products.controller.js";

const router = express.Router();

router.use(requireRole("ADMIN"));

router.get("/", controller.listProducts);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.patch("/:id/toggle", controller.toggle);

export default router;
