import express from "express";
import auth from "../middleware/auth.js";
import { confirmPaymentController } from "../controllers/payments.controller.js";

const router = express.Router();

router.post("/", auth, confirmPaymentController);

export default router;
