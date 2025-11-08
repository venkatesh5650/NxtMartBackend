import styled from "styled-components";

export const HomeSection = styled.div`
  display: flex;
  padding: 20px;
`;

export const CategorySection = styled.div`
  width: 20%;
  height: 90vh;
  position: sticky;
  top: 0;
  flex-grow: 0;
  margin-right: 0;
  background-color: #fff;
  overflow-y: auto;
`;
export const CategoryHeader = styled.h1`
  font-size: 24px;
  color: green;
  font-weight: bold;
  margin-left: 40px;
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

export const CategoryBtn = styled.button`
  background-color: transparent;
  color: ${(props) => (props.$isActive ? "green" : "black")};
  border-radius: 5px;
  padding: 10px;
  font-size: 18px;
  border: none;
  outline: none;
  font-weight: 700;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    color: green;
  }
`;

export const ProductsSection = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const ProductContainer = styled.div`
  padding: 15px;
  margin: 15px;
`;

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  margin-top:100px;
`;
