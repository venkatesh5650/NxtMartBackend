import { useState, useEffect } from "react";

import Header from "../Header";
import ProductItem from "../ProductItem";

import {
  HomeSection,
  CategorySection,
  CategoryHeader,
  CategoryContainer,
  CategoryItem,
  CategoryBtn,
  ProductsSection,
  ProductContainer,
  HomeContainer,
} from "./styledComponents";

const categoriesList = [
  {
    categoryId: 1,
    categoryName: "All",
  },
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
  // 🔹 Keep cart in React state
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem("cartList")) || []
  );

  const onAddCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cartList")) || [];
    const updatedCart = [...existingCart];
    const existingCartIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingCartIndex >= 0) {
      updatedCart[existingCartIndex].cartQuantity += 1;
      updatedCart[existingCartIndex].addCartMsg = "Updated quantity";
    } else {
      updatedCart.push({
        ...product,
        cartQuantity: 1,
        addCartMsg: "Added to Cart",
      });
    }
    setCartList(updatedCart);
    localStorage.setItem("cartList", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const getProducts = async () => {
      const url = `http://localhost:5000/api/products/?category=${activeCategory}`;
      // const jwtToken = localStorage.getItem("jwt_token");
      const options = {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0dXNlciIsImlhdCI6MTc1NzM0MzkyMCwiZXhwIjoxNzU3MzQ3NTIwfQ.pmTGmANtMPet80cnfp9-bcuM0V11xZ6ynMF50Qy0QXo",
        },
      };

      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        setProductsData(data);
        console.log(data);
      } else {
        console.log("Failed to fetch products");
      }
    };

    getProducts();
  }, [activeCategory]); // ✅ run only once

  return (
    <HomeContainer>
      <Header />
      <HomeSection>
        <CategorySection>
          <CategoryHeader>Categories</CategoryHeader>
          <CategoryContainer>
            {categoriesList.map((eachCategory) => (
              <CategoryItem key={eachCategory.categoryId}>
                <CategoryBtn
                  $isActive={activeCategory === eachCategory.categoryName}
                  onClick={() => setActiveCategory(eachCategory.categoryName)}
                >
                  {eachCategory.categoryName}
                </CategoryBtn>
              </CategoryItem>
            ))}
          </CategoryContainer>
        </CategorySection>
        <ProductsSection>
          {productsData.map((eachProduct) => {
            // find current cart item to pass msg
            const productCartItem = cartList.find(
              (item) => item.id === eachProduct.id
            );
            return (
              <ProductContainer key={eachProduct.id}>
                <ProductItem
                  productDetails={eachProduct}
                  onAddCart={onAddCart}
                  addCartMsg={productCartItem?.addCartMsg || ""}
                />
              </ProductContainer>
            );
          })}
        </ProductsSection>
      </HomeSection>
    </HomeContainer>
  );
};

export default Home;
