import { useState } from "react";

import Header from "../Header";

import {
  HomeSection,
  CategorySection,
  CategoryHeader,
  CategoryContainer,
  CategoryItem,
  CategoryBtn,
  ProductsSection
} from "./styledComponents";

const categoriesList = [
  {
    categoryId: 1,
    categoryName: "All",
  },
  { categoryId: 2, categoryName: "Fruites & Vegetables" },
  { categoryId: 3, categoryName: "Prepared Foods" },
  { categoryId: 4, categoryName: "Oil" },
  { categoryId: 5, categoryName: "Frozen Foods" },
  { categoryId: 6, categoryName: "Meat & Seafood" },
  { categoryId: 7, categoryName: "Home Needs" },
  { categoryId: 8, categoryName: "Beverages" },
];

const Home = () => {

  const [productsData,setProductsData]=useState([]);
  const jwtToken=localStorage.getItem("jwt_token");

  const getProducts = async() => {
    const url="http://localhost:5000/products/"
    const options={
      method:"GET",
      headers:{
        Authorization:"Bearer "+jwtToken,
      }}

      const response=await fetch(url,options);
      if(response.ok){
        const data=await response.json();
        setProductsData(data);
        console.log(data);
    }
    else{
      console.log("Failed to fetch products");
    }
  }

  return (
    <div>
      <Header />
      <HomeSection>
        <CategorySection>
          <CategoryHeader>Categories</CategoryHeader>
          <CategoryContainer>
            {categoriesList.map((eachCategory) => (
              <CategoryItem key={eachCategory.categoryId}>
                <CategoryBtn>{eachCategory.categoryName}</CategoryBtn>
              </CategoryItem>
            ))}
          </CategoryContainer>
        </CategorySection>
        <ProductsSection> 
            <h1>Products</h1>
        </ProductsSection>
      </HomeSection>
    </div>
  );
};

export default Home;
