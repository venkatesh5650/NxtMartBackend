import {
  getTotalCount,
  getPaginatedProducts,
  fetchProductById,
} from "../repositories/products.repository.js";

export const getAllProductsService = async (queryParams) => {
  const {
    search_q = "",
    category = "All",
    order_by = "id",
    order = "ASC",
    page = 1,
    limit = 10,
  } = queryParams;

  const offset = (page - 1) * limit;

  let query = `SELECT * FROM Products`;
  let params = [];
  let whereClauses = [];

  // Category filter
  if (category.toLowerCase() !== "all") {
    whereClauses.push("category = ?");
    params.push(category);
  }

  // Search filter
  if (search_q.trim() !== "") {
    whereClauses.push("LOWER(name) LIKE LOWER(?)");
    params.push(`%${search_q}%`);
  }

  // Apply WHERE
  if (whereClauses.length > 0) {
    query += " WHERE " + whereClauses.join(" AND ");
  }

  // COUNT Query
  const countQuery =
    "SELECT COUNT(*) AS total FROM Products" +
    (whereClauses.length ? " WHERE " + whereClauses.join(" AND ") : "");

  // Safe sorting
  const allowedOrderColumns = ["id", "price", "name", "category"];
  const allowedOrderDirections = ["ASC", "DESC"];

  const finalOrderBy = allowedOrderColumns.includes(order_by) ? order_by : "id";
  const finalOrder = allowedOrderDirections.includes(order) ? order : "ASC";

  query += ` ORDER BY ${finalOrderBy} ${finalOrder}`;

  // Pagination
  query += ` LIMIT ? OFFSET ?`;
  const paginatedParams = [...params, limit, offset];

  // Step 1 — count total rows
  const totalProducts = await getTotalCount(countQuery, params);

  // Step 2 — fetch paginated data
  const products = await getPaginatedProducts(query, paginatedParams);

  const totalPages = Math.ceil(totalProducts / limit);

  return {
    products,
    totalProducts,
    totalPages,
    currentPage: Number(page),
  };
};

export const getProductByIdService = async (id) => {
  const row = await fetchProductById(id);

  if (!row) {
    throw new Error("Product not found");
  }

  return row;
};
