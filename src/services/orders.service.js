import * as repo from "../repositories/orders.repository.js";
import { reserveStock, releaseStock } from "./inventory.service.js";

const transitions = {
  CREATED: ["PAID", "CANCELLED"],
  PAID: ["PACKED", "CANCELLED"],
  PACKED: ["SHIPPED"],
  SHIPPED: ["DELIVERED"],
};

export async function createOrderWithItems(userId, items, total) {
  const normalizedItems = items.map((item) => {
    const quantity =
      typeof item.quantity === "number"
        ? item.quantity
        : parseFloat(item.quantity) || 1;

    const price =
      typeof item.price === "number" ? item.price : parseFloat(item.price) || 0;

    if (quantity <= 0 || Number.isNaN(quantity)) {
      throw new Error("Invalid quantity");
    }

    return {
      ...item,
      quantity,
      price,
    };
  });

  const finalTotal =
    total && !Number.isNaN(total)
      ? total
      : normalizedItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const orderId = await repo.createOrder(userId, finalTotal);

  for (const item of normalizedItems) {
    await reserveStock(item.product_id, item.quantity);
    await repo.addOrderItem(
      orderId,
      item.product_id,
      item.quantity,
      item.price
    );
  }

  await repo.addHistory(orderId, null, "CREATED");

  return orderId;
}

export async function changeOrderStatus(orderId, newStatus, actor) {
  const order = await repo.getOrderById(orderId);

  if (!order) {
    const err = new Error("ORDER_NOT_FOUND");
    err.code = "ORDER_NOT_FOUND";
    throw err;
  }

  const allowed = transitions[order.status] || [];

  if (!allowed.includes(newStatus)) {
    const err = new Error("INVALID_TRANSITION");
    err.code = "INVALID_TRANSITION";
    err.details = { from: order.status, to: newStatus };
    throw err;
  }

  if (newStatus === "CANCELLED") {
    const items = await repo.getOrderItems(orderId);
    for (const item of items) {
      await releaseStock(item.product_id, item.quantity);
    }
  }

  await repo.updateOrderStatus(orderId, newStatus);
  await repo.addHistory(orderId, order.status, newStatus, actor || "SYSTEM");

  return { from: order.status, to: newStatus };
}

