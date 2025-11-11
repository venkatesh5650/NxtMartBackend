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
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem("cartList")) || []
  );

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
    localStorage.setItem("cartList", JSON.stringify(cart));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://nxtmartfb-2.onrender.com/api/products/?category=${activeCategory}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0dXNlciIsImlhdCI6MTc1NzM0MzkyMCwiZXhwIjoxNzU3MzQ3NTIwfQ.pmTGmANtMPet80cnfp9-bcuM0V11xZ6ynMF50Qy0QXo",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setProductsData(data);
      }
    };

    fetchProducts();
  }, [activeCategory]);

  return (
    <HomeContainer>
      <Header />
      <HomeSection>
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
        <ProductsSection>
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
      </HomeSection>
    </HomeContainer>
  );
};

export default Home;
