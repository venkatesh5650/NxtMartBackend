import styled from "styled-components";

export const HomeSection = styled.div`
  display: flex;
`;

export const CategorySection = styled.div`
  width: 20%;
`;

export const CategoryHeader = styled.h1`
  font-size: 24px;
  color: green;
  font-weight: bold;
  margin-right: 17px;
  
`;

export const CategoryContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const CategoryItem = styled.li`
    list-style-type: none;
    self-align: flex-start;
    text-align: start;
    `;

    export const CategoryBtn=styled.button`
    background-color: transparent;
    color: black;
    border-radius: 5px;
    padding: 10px;
    font-size: 18px;
    border: none;
    outline: none;
    font-weight: 700;
    margin-top: 10px;
    `;

    export const ProductsSection=styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
    `;