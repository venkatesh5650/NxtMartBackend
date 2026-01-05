import * as repo from "../repositories/orders.repository.js";
import { changeOrderStatus } from "../services/orders.service.js";

const transitions = {
  CREATED: ["PAID", "CANCELLED"],
  PAID: ["PACKED", "CANCELLED"],
  PACKED: ["SHIPPED"],
  SHIPPED: ["DELIVERED"],
};

export async function getAllOrders(req, res) {
  const { status } = req.query;
  const orders = await repo.getAllOrders(status);
  res.json({ orders });
}



export async function getAdminOrderDetails(req, res) {
  try {
    const orderId = Number(req.params.id);

    if (Number.isNaN(orderId)) {
      return res.status(400).json({ error: "Invalid order id" });
    }

    const order = await repo.getOrderWithItems(orderId);

    if (!order) {
      return res.status(404).json({ error: "Not found" });
    }

    res.json({ order });
  } catch (err) {
    console.error("Failed to fetch admin order:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}


export async function adminUpdateStatus(req, res) {
  try {
    const actor = req.user?.role || "SYSTEM";
    const result = await changeOrderStatus(
      req.params.id,
      req.body.status,
      actor
    );

    res.json({ message: "Updated", ...result });
  } catch (err) {
    if (err.code === "ORDER_NOT_FOUND") {
      return res.status(404).json({ message: "Order not found" });
    }

    if (err.code === "INVALID_TRANSITION") {
      return res.status(400).json({
        message: `Invalid transition from ${err.details.from} to ${err.details.to}`,
      });
    }

    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}
