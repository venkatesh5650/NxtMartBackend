import styled from "styled-components";

export const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  background-color: #ffffff;
`;

export const DetailsWrapper = styled.div`
  width: 90%;
  max-width: 1100px;
  display: flex;
  gap: 40px;
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ImageBox = styled.div`
  width: 45%;

  img {
    width: 100%;
    height: 350px;
    object-fit: contain;
    border-radius: 10px;
    border: 1px solid #d1d5db;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const InfoBox = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: black;
  margin-bottom: 10px;
`;

export const Price = styled.h2`
  font-size: 26px;
  color: green;
  margin-bottom: 12px;
`;

export const CategoryText = styled.p`
  font-size: 18px;
  color: black;
  margin-bottom: 20px;

  span {
    font-weight: 700;
    color: green;
  }
`;

export const Description = styled.p`
  font-size: 17px;
  line-height: 1.5;
  margin-bottom: 30px;
  color: #2d2d2d;
`;

export const AddCartBtn = styled.button`
  padding: 14px 22px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const BackBtn = styled.button`
  margin-top: 20px;
  padding: 10px 18px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
