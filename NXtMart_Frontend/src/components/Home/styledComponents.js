import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 70px;
  overflow-x: hidden;
`;

export const HomeSection = styled.div`
  display: flex;
  width: 100%;
  padding: 12px;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const CategorySection = styled.div`
  width: 20%;
  min-width: 180px;
  height: calc(100vh - 70px);
  background: #ffffff;
  border-right: 1px solid #e5e7eb;
  position: sticky;

  @media (max-width: 992px) {
    width: 100%;
    height: auto;
    position: static;
    display: flex;
    overflow-x: auto;
  }
`;

export const CategoryHeader = styled.h1`
  font-size: 22px;
  font-weight: 700;
  padding: 12px;
  color: green;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const CategoryContainer = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 992px) {
    flex-direction: row;
    padding: 10px;
    gap: 10px;
  }
`;

export const CategoryItem = styled.li`
  list-style: none;
`;

export const CategoryBtn = styled.button`
  width: 100%;
  background: ${(p) => (p.$active ? "#d9f7d9" : "transparent")};
  color: ${(p) => (p.$active ? "green" : "#374151")};
  border: none;
  font-size: 21px;
  padding: 10px 18px;
  text-align: left;
  cursor: pointer;
  border-radius: 6px;
  transition: 0.25s;

  &:hover {
    background-color: #e8ffe8;
    transform: scale(1.03);
  }

  @media (max-width: 992px) {
    font-size: 18px;
    padding: 8px 12px;
    flex: none;
  }
`;

/* 🔍 SEARCH + SORT BAR */
export const TopControlsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const SearchInput = styled.input`
  width: 45%;
  padding: 10px 14px;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  font-size: 16px;

  &:focus {
    border-color: green;
    box-shadow: 0px 0px 3px rgba(0, 128, 0, 0.4);
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const SortSelect = styled.select`
  padding: 10px 14px;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  background: white;
  color: #374151;
  cursor: pointer;
  font-size: 16px;

  &:focus {
    border-color: green;
    box-shadow: 0px 0px 3px rgba(0, 128, 0, 0.4);
  }
`;

export const ProductsSection = styled.div`
  padding-left: 16px;

  /* When there ARE products → use grid */
  display: ${(p) => (p.$empty ? "flex" : "grid")};
  flex-direction: ${(p) => (p.$empty ? "column" : "initial")};
  justify-content: ${(p) => (p.$empty ? "center" : "initial")};
  align-items: ${(p) => (p.$empty ? "center" : "initial")};
  height: ${(p) => (p.$empty ? "400px" : "auto")};

  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));

  @media (max-width: 480px) {
    padding-left: 0;
    grid-template-columns: repeat(auto-fill, minmax(135px, 1fr));
  }
`;


export const ProductCard = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 12px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  img {
    width: 100%;
    height: 150px;
    object-fit: contain;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 5px 14px rgba(0, 0, 0, 0.18);
  }
`;
