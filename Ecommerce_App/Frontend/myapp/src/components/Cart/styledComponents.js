import styled from "styled-components";
import { BsCart2 } from "react-icons/bs";

export const CartContainer = styled.div`
  min-height: 100vh;
  background-color: white;
  margin-top: 120px;
`;

export const CartHeader = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: green;
  margin-left: 70px;
  margin-bottom: 30px;
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #d9dedb;
  width: 80vw;
  border-radius: 15px;
  padding: 50px;
`;
export const CartsView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
`;

export const EmptyCart = styled(BsCart2)`
  height: 100px;
  width: 100px;
  color: green;
`;

export const EmptyCartMsg = styled.p`
  color: green;
  font-size: 20px;
  font-weight: bold;
`;
export const QueryContainer = styled.div`
  background-color: green;
  width: 100%;
  padding: 20px 0;
  margin-top: 80px;
`;

export const ContactMedia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MediaContainer = styled.div`
  display: flex;
  gap: 22px;
  margin-top: 18px;
`;

export const Media = styled.div`
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;

  svg {
    height: 22px;
    width: 22px;
    color: white;
  }

  &:hover {
    background-color: white;
    transform: scale(1.15);

    svg {
      color: #054a29;
    }
  }
`;

export const QueryText = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  max-width: 600px;
`;

export const CopyRight = styled.p`
  color: white;
  font-size: 16px;
  text-align: center;
  margin-top: 30px;
  opacity: 0.8;
`;

export const EmptyCartContainer = styled.div`
  text-align: center;
`;

export const BillContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 80px;
  margin-top: 60px;
`;
export const BillMsg = styled.div`
  font-size: 30px;
  color: black;
  font-weight: bold;
`;

export const CheckoutButton = styled.button`
  font-size: 18px;
  background-color: green;
  border: none;
  outline: none;
  border-radius: 12px;
  color: white;
  padding: 10px;
  margin-left: 40px;
  width: 140px;
  cursor: pointer;
`;
