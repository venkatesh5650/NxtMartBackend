import { changeOrderStatus } from "./orders.service.js";

export async function confirmPayment(orderId, actor) {
  if (!orderId) {
    const err = new Error("ORDER_ID_REQUIRED");
    err.code = "ORDER_ID_REQUIRED";
    throw err;
  }

  return changeOrderStatus(orderId, "PAID", actor);
}
