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

  let query = `SELECT * FROM Products WHERE active = 1`;
  let countQuery = `SELECT COUNT(*) AS total FROM Products WHERE active = 1`;

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

  if (whereClauses.length > 0) {
    query += " AND " + whereClauses.join(" AND ");
    countQuery += " AND " + whereClauses.join(" AND ");
  }

  // Safe sorting
  const allowedOrderColumns = ["id", "price", "name", "category"];
  const allowedOrderDirections = ["ASC", "DESC"];

  const finalOrderBy = allowedOrderColumns.includes(order_by) ? order_by : "id";
  const finalOrder = allowedOrderDirections.includes(order) ? order : "ASC";

  query += ` ORDER BY ${finalOrderBy} ${finalOrder}`;

  // Pagination
  query += ` LIMIT ? OFFSET ?`;
  const paginatedParams = [...params, limit, offset];

  const totalProducts = await getTotalCount(countQuery, params);
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
