import * as repo from "../repositories/users.repository.js";
import { getOrdersByUser } from "../repositories/orders.repository.js";


export const listUsers = async (req, res) => {
  const users = await repo.getAllUsers();
  res.json(users);
};

export const toggleUser = async (req, res) => {
  const { reason } = req.body;
  const user = await repo.toggleUserStatus(req.params.id, reason);
  res.json(user);
};

export const getUserOrders = async (req, res) => {
  try {
    const orders = await getOrdersByUser(req.params.id);
    res.json(orders);
  } catch (err) {
    console.error("Failed to fetch user orders:", err.message);
    res.status(500).json({ error: "Failed to fetch user orders" });
  }
};
