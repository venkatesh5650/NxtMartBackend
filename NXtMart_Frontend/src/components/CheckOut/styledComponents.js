import styled from "styled-components";
import { MdOutlineDone } from "react-icons/md";

export const CheckoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 90px; /* ✅ Proper spacing under fixed header */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding-top: 70px;
  }
`;

export const CheckOuts = styled.div`
  text-align: center;
  width: 100%;
  max-width: 450px;
  padding: 30px 20px;
  border-radius: 14px;
  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.12);
  animation: fadeIn 0.7s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const SuccessContainer = styled.div`
  height: 72px;
  width: 72px;
  border-radius: 50%;
  border: 3px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 18px auto;
  animation: pop 0.5s ease;

  @keyframes pop {
    0% {
      transform: scale(0.4);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const SuccessIcon = styled(MdOutlineDone)`
  height: 48px;
  width: 48px;
  color: green;
`;

export const PaymentSuccess = styled.h1`
  font-size: 26px;
  font-weight: 700;
  color: green;
  margin-top: 6px;

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const GreetMsg = styled.p`
  font-size: 17px;
  color: #444;
  margin: 4px 0;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const ReturnBtn = styled.button`
  margin-top: 22px;
  padding: 12px 20px;
  background: green;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 600;
  width: 220px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #0b5d3b;
    transform: scale(1.06);
  }

  &:active {
    transform: scale(0.96);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
