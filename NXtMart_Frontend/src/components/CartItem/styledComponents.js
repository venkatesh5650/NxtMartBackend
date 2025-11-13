import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding-bottom: 10px;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 14px;
    text-align: center;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ItemImg = styled.img`
  width: 95px;
  height: 95px;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.35s;

  &:hover {
    transform: scale(1.07);
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

export const ItemTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ItemName = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #222;
`;

export const ItemPrice = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: green;
`;

export const Controller = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid green;
  border-radius: 10px;
  width: 110px;
  height: 45px;
  justify-content: space-between;
  padding: 0 10px;
  transition: box-shadow 0.3s ease;

  @media (max-width: 480px) {
    width: 135px;
  }
`;

export const ControlButton = styled.button`
  font-size: 26px;
  font-weight: bold;
  color: green;
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    transform: scale(1.25);
    color: #004d25;
  }

  &:active {
    transform: scale(1.1);
  }
`;

export const Quantity = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: #004d25;
  min-width: 20px;
  text-align: center;
`;
