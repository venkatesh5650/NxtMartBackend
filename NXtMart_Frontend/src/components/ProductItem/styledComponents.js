import styled from "styled-components";

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 180px;
  object-fit: contain;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.07); /* ✅ Attractive zoom effect */
  }

  @media (max-width: 480px) {
    height: 140px;
  }
`;

export const DetailsSection = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
`;

export const ProductInfo = styled.div`
  text-align: left;

  h4 {
    margin: 0;
    font-size: 17px;
    font-weight: 600;
  }

  p {
    margin: 4px 0;
    font-size: 14px;
    opacity: 0.7;
  }

  @media (max-width: 480px) {
    text-align: center;
  }
`;

export const AddCartBtn = styled.button`
  padding: 10px 14px;
  border: 2px solid green;
  font-size: 14px;
  color: green;
  background: white;
  border-radius: 7px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.35s ease;

  &:hover {
    background-color: green;
    color: white;
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const CartMsg = styled.p`
  font-weight: 600;
  color: green;
  font-size: 14px;
  margin-top: 6px;
  text-align: center;
`;

