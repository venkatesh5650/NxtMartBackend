import { useState, useEffect } from "react";
import Header from "../Header";
import ProductItem from "../ProductItem";

import {
  HomeContainer,
  HomeSection,
  CategorySection,
  CategoryHeader,
  CategoryContainer,
  CategoryItem,
  CategoryBtn,
  TopControlsContainer,
  SearchInput,
  SortSelect,
  ProductsSection,
  ProductCard,
} from "./styledComponents";

const categoriesList = [
  { categoryId: 1, categoryName: "All" },
  { categoryId: 2, categoryName: "Fruits & Vegetables" },
  { categoryId: 3, categoryName: "Prepared Foods" },
  { categoryId: 4, categoryName: "Oil" },
  { categoryId: 5, categoryName: "Frozen Foods" },
  { categoryId: 6, categoryName: "Meat & Seafood" },
  { categoryId: 7, categoryName: "Home Needs" },
  { categoryId: 8, categoryName: "Beverages" },
];

const Home = () => {
  const [productsData, setProductsData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const username = localStorage.getItem("username") || "guest";
  const storageKey = `cartList_${username}`;

  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem(storageKey)) || []
  );

  // 🛒 Add to Cart
  const onAddCart = (product) => {
    const cart = [...cartList];
    const existIndex = cart.findIndex((item) => item.id === product.id);

    if (existIndex >= 0) {
      cart[existIndex].cartQuantity += 1;
      cart[existIndex].addCartMsg = "Updated quantity";
    } else {
      cart.push({ ...product, cartQuantity: 1, addCartMsg: "Added to Cart" });
    }

    setCartList(cart);
    localStorage.setItem(storageKey, JSON.stringify(cart));
  };

  // 📦 Fetch Products (Category + Search + Sorting)
  useEffect(() => {
    const fetchProducts = async () => {
      const orderBy = sortOrder === "" ? "id" : "price";
      const orderParam = sortOrder === "" ? "ASC" : sortOrder;
      let apiURL = `https://nxtmartbackend-5.onrender.com/api/products/?search_q=${searchInput}&order_by=${orderBy}&order=${orderParam}`;

      if (activeCategory !== "All") {
        apiURL += `&category=${encodeURIComponent(activeCategory)}`;
      }

      const response = await fetch(apiURL, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0dXNlciIsImlhdCI6MTc1NzM0MzkyMCwiZXhwIjoxNzU3MzQ3NTIwfQ.pmTGmANtMPet80cnfp9-bcuM0V11xZ6ynMF50Qy0QXo",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setProductsData(data);
      }
    };

    fetchProducts();
  }, [activeCategory, searchInput, sortOrder]);

  return (
    <HomeContainer>
      <Header />
      <HomeSection>
        {/* LEFT CATEGORY SECTION */}
        <CategorySection>
          <CategoryHeader>Categories</CategoryHeader>
          <CategoryContainer>
            {categoriesList.map((cat) => (
              <CategoryItem key={cat.categoryId}>
                <CategoryBtn
                  $active={activeCategory === cat.categoryName}
                  onClick={() => setActiveCategory(cat.categoryName)}
                >
                  {cat.categoryName}
                </CategoryBtn>
              </CategoryItem>
            ))}
          </CategoryContainer>
        </CategorySection>

        {/* MAIN CONTENT */}
        <div style={{ flex: 1 }}>
          {/* 🔍 SEARCH + SORT BAR */}
          <TopControlsContainer>
            {/* SEARCH INPUT */}
            <SearchInput
              type="text"
              placeholder="Search products..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setSearchInput(e.target.value); // apply search on Enter
                }
              }}
            />

            {/* SORT SELECT */}
            <SortSelect
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="">Sort Price</option>
              <option value="ASC">Low → High</option>
              <option value="DESC">High → Low</option>
            </SortSelect>
          </TopControlsContainer>

          {/* PRODUCT GRID */}
          <ProductsSection $empty={productsData.length === 0}>
            {productsData.length === 0 && (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: "300px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "green",
                  fontSize: "28px",
                  fontWeight: "700",
                  backgroundColor: "white",
                  marginTop: "40px",
                }}
              >
                No Results Found
              </div>
            )}
            {productsData.map((product) => {
              const cartItem = cartList.find((x) => x.id === product.id);

              return (
                <ProductCard key={product.id}>
                  <ProductItem
                    productDetails={product}
                    onAddCart={onAddCart}
                    addCartMsg={cartItem?.addCartMsg || ""}
                  />
                </ProductCard>
              );
            })}
          </ProductsSection>
        </div>
      </HomeSection>
    </HomeContainer>
  );
};

export default Home;
