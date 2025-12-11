import {
  getAllProductsService,
  getProductByIdService,
} from "../services/products.service.js";

// GET /products
export const getAllProducts = async (req, res) => {
  try {
    const data = await getAllProductsService(req.query);
    res.status(200).json(data);
  } catch (err) {
    console.error("Products Error:", err.message);
    res.status(500).json({ error: "Failed to retrieve products" });
  }
};

// GET /products/:id
export const getProductById = async (req, res) => {
  try {
    const product = await getProductByIdService(req.params.id);
    res.json(product);
  } catch (err) {
    if (err.message === "Product not found") {
      return res.status(404).json({ error: err.message });
    }
    res.status(500).json({ error: "Failed to fetch product details" });
  }
};
