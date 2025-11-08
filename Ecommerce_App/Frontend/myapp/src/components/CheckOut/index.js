import { useNavigate } from "react-router-dom";

import Header from "../Header";

import {
  CheckoutContainer,
  ReturnBtn,
  PaymentSuccess,
  GreetMsg,
  CheckOuts,
  SuccessContainer,
  SuccessIcon,
} from "./styledComponents";

const Checkout = () => {
  const navigate = useNavigate();

  const RedirectToHome = () => {
    navigate("/");
    

  };
  return (
    <CheckoutContainer>
      <Header />
      <CheckOuts>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SuccessContainer>
            <SuccessIcon />
          </SuccessContainer>

          <PaymentSuccess>Payment Successful</PaymentSuccess>
          <GreetMsg>Thankyou for Ordering</GreetMsg>
          <GreetMsg>Your Payment is Succesfully Completed.</GreetMsg>
          <ReturnBtn onClick={RedirectToHome}>Return to Homepage</ReturnBtn>
        </div>
      </CheckOuts>
    </CheckoutContainer>
  );
};

export default Checkout;
