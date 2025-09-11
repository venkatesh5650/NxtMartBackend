import styled from "styled-components";

export const ProductImg = styled.img`
  height: 240px;
  width: 240px;
`;

export const DetailsSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddCartBtn = styled.button`
  padding: 15px;
  border: 2px solid green;
  font-size: 15px;
  color: green;
  background-color: white;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: green;
    color: white;
  }
`;

export const CartMsg = styled.p`
  font-weight: 600;
  color: green;
  font-size: 16px;
  font-family:"bree-serif";
  margin-left:7px;
`;
