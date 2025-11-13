import styled from "styled-components";
import { BsCart2 } from "react-icons/bs";

export const CartContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: white;
  margin: 0;

  /* ✅ Correct spacing below fixed Header */
  padding-top: 85px;

  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding-top: 70px;
  }
`;

export const CartHeader = styled.h1`
  font-size: 27px;
  font-weight: 700;
  color: green;
  text-align: center;
  margin-bottom: 28px;
`;

export const CartsView = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const CartItemsContainer = styled.div`
  width: 100%;
  max-width: 900px;
  background: #fafafa;
  border-radius: 12px;
  border: 1px solid #d9dedb;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding: 14px;
  }
`;

export const EmptyCartContainer = styled.div`
  text-align: center;
  margin-top: 60px;
  margin-bottom: 80px;
  @media(max-width: 600px) {
   margin-bottom: 185px;
}
`;

export const EmptyCartIcon = styled(BsCart2)`
  height: 80px;
  width: 80px;
  color: green;
  opacity: 0.85;
  margin-bottom: 15px;

  @media (max-width: 600px) {
    height: 60px;
    width: 60px;
}
`;

export const EmptyCartMsg = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: green;
`;

export const BillContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 35px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 14px;
    text-align: center;
  }
`;

export const BillMsg = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: #333;
`;

export const CheckoutButton = styled.button`
  background: green;
  color: white;
  padding: 12px 24px;
  border-radius: 10px;
  font-size: 17px;
  border: none;
  cursor: pointer;
  transition: 0.25s ease-in-out;

  &:hover {
    transform: scale(1.08);
    background-color: #0b5d3b;
  }

  @media (max-width: 600px) {
    width: 50%;
  }
`;

export const QueryContainer = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%; /* ✅ Full width without overflow */
  background-color: green;
  padding: 18px 12px;
  text-align: center;
  box-sizing: border-box;
  z-index: 1000; /* ✅ Always visible on top */

  @media (max-width: 768px) {
    padding: 15px 10px;
  }
`;

export const ContactMedia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QueryText = styled.p`
  color: white;
  font-size: 18px;
  max-width: 600px;
  font-weight: 400;
  line-height: 1.4;
`;

export const MediaContainer = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 14px;
`;

export const Media = styled.div`
  height: 46px;
  width: 46px;
  border: 2px solid white;
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: 0.3s ease;

  svg {
    height: 20px;
    width: 20px;
    color: white;
  }

  &:hover {
    background: white;
    transform: scale(1.18);

    svg {
      color: green;
    }
  }
`;

export const CopyRight = styled.p`
  margin-top: 20px;
  color: white;
  font-size: 14px;
  opacity: 0.8;
`;
