import { confirmPayment } from "../services/payments.service.js";

export async function confirmPaymentController(req, res) {
  try {
    const { orderId } = req.body;
    const actor = req.user?.role || "USER";

    const result = await confirmPayment(orderId, actor);

    res.json({ message: "Payment successful", ...result });
  } catch (err) {
    if (err.code === "ORDER_ID_REQUIRED") {
      return res.status(400).json({ message: "orderId is required" });
    }

    if (err.code === "ORDER_NOT_FOUND") {
      return res.status(404).json({ message: "Order not found" });
    }

    if (err.code === "INVALID_TRANSITION") {
      return res.status(400).json({
        message: `Invalid transition from ${err.details.from} to ${err.details.to}`,
      });
    }

    console.error(err);
    res.status(500).json({ message: "Payment failed" });
  }
}
