import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 90vw;
  
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemDetails = styled.div`
  display: flex;
  align-items: center;
`;
export const ItemImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 15px;
  margin-right: 20px;
`;

export const ItemName = styled.p`
  font-size: 15px;
  font-weight: bold;
`;

export const ItemPrice = styled.p`
  font-size: 17px;
  font-weight: bold;
`;

export const Controller = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid green;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  justify-content: space-around;
`;

export const ControllIcon = styled.button`
  font-size: 30px;
  font-weight: 600;
  color: green;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
`;

export const Quantity = styled.p`
  font-size: 30px;
  font-weight: 500;
  color: green;
`;
