import styled from "styled-components";
import { MdOutlineDone } from "react-icons/md";

export const CheckoutContainer = styled.div`
  max-height: 100vh;
  margin-top:120px;
`;

export const CheckOuts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
`;

export const PaymentSuccess = styled.h1`
  font-size: 25px;
`;

export const GreetMsg = styled.p`
  font-size: 17px;
  margin:10px;
`;

export const ReturnBtn = styled.button`
  font-size: 18px;
  background-color: green;
  border: none;
  outline: none;
  border-radius: 12px;
  color: white;
  padding: 10px;
  margin-left: 40px;
  width: 190px;
  cursor: pointer;
  margin-top:20px;
`;

export const SuccessContainer = styled.div`
  background: transparent;
  height: 50px;
  width: 50px;
  border-radius: 40px;
  border: 1px solid green;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SuccessIcon = styled(MdOutlineDone)`
  height: 40px;
  width: 40px;
  color: green;
`;
