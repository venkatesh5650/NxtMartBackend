import { createOrderWithItems, changeOrderStatus } from "../services/orders.service.js";
import * as repo from "../repositories/orders.repository.js";

/**
 * Create a new order for the logged-in user
 */
export async function createOrder(req, res) {
  try {
    const { items, total } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ error: "No items provided" });
    }

    const orderId = await createOrderWithItems(req.user.id, items, total);
    res.json({ orderId });
  } catch (e) {
    console.error("Create order error:", e.message);
    res.status(400).json({ error: e.message });
  }
}

/**
 * Update order status
 */
export async function updateStatus(req, res) {
  try {
    await changeOrderStatus(req.params.id, req.body.status);
    res.json({ message: "Updated" });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

/**
 * Get history of a specific order
 */
export async function getOrderHistory(req, res) {
  try {
    const orderId = Number(req.params.id);
    const history = await repo.getOrderHistory(orderId);
    res.json(history);
  } catch (err) {
    console.error("History error:", err.message);
    res.status(500).json({ error: err.message });
  }
}

/**
 * Get all orders for the logged-in user
 */
export async function getMyOrders(req, res) {
  try {
    const orders = await repo.getOrdersByUser(req.user.id);
    res.json(orders);
  } catch (err) {
    console.error("Get orders error:", err.message);
    res.status(500).json({ error: err.message });
  }
}

/**
 * Get full order details including items
 */
export async function getOrderDetails(req, res) {
  try {
    const orderId = Number(req.params.id);
    const order = await repo.getOrderWithItems(orderId);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json(order);
  } catch (err) {
    console.error("Order details error:", err.message);
    res.status(500).json({ error: err.message });
  }
}
