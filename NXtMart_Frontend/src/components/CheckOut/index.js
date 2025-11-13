import { useNavigate } from "react-router-dom";
import Header from "../Header";

import {
  CheckoutContainer,
  CheckOuts,
  SuccessContainer,
  SuccessIcon,
  PaymentSuccess,
  GreetMsg,
  ReturnBtn
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
        <SuccessContainer>
          <SuccessIcon />
        </SuccessContainer>

        <PaymentSuccess>Payment Successful</PaymentSuccess>
        <GreetMsg>Thank you for ordering!</GreetMsg>
        <GreetMsg>Your payment was completed successfully.</GreetMsg>

        <ReturnBtn onClick={RedirectToHome}>Return to Homepage</ReturnBtn>
      </CheckOuts>

    </CheckoutContainer>
  );
};

export default Checkout;
