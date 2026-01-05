import * as repo from "../repositories/products.repository.js";

export async function listProducts(req, res) {
  const products = await repo.getAllProductsAdmin();
  res.json(products);
}

export async function create(req, res) {
  const product = await repo.createProduct(req.body);
  res.status(201).json(product);
}

export async function update(req, res) {
  const updated = await repo.updateProduct(req.params.id, req.body);
  res.json(updated);
}

export async function toggle(req, res) {
  const { reason } = req.body;
  const product = await repo.toggleProductActive(req.params.id, reason);
  res.json(product);
}
