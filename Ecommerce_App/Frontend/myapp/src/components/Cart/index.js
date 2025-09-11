import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../Header";
import CartItem from "../CartItem";

import {
  CartContainer,
  CartsView,
  EmptyCart,
  CartHeader,
  EmptyCartMsg,
  CartItemsContainer,
  QueryContainer,
  ContactMedia,
  MediaContainer,
  Media,
  QueryText,
  CopyRight,
  BillContainer,
  BillMsg,
  CheckoutButton,
  EmptyCartContainer,
} from "./styledComponents";

const Cart = () => {
  const [Cartlist, setCartlist] = useState(() => {
    return JSON.parse(localStorage.getItem("cartList")) || [];
  });
  const [TotalAmount, SetTotalAmount] = useState(0);

  const updateLocalStorage = (updatedCart) => {
    setCartlist(updatedCart);
    localStorage.setItem("cartList", JSON.stringify(updatedCart));
  };

  const increaseQuantity = (index) => {
    const updatedCartList = [...Cartlist];
    updatedCartList[index].cartQuantity += 1;
    updateLocalStorage(updatedCartList);
  };

  const decreaseQuantity = (index) => {
    const updatedCartList = [...Cartlist];
    if (updatedCartList[index].cartQuantity > 1) {
      updatedCartList[index].cartQuantity -= 1;
      updateLocalStorage(updatedCartList);
    } else {
      // optional: remove item if qty = 0
      updatedCartList.splice(index, 1);
      updateLocalStorage(updatedCartList);
    }
  };

  const cartLength = Cartlist.length;

  useEffect(() => {
    const total = Cartlist.reduce(
      (acc, eachCart) => acc + eachCart.price * eachCart.cartQuantity,
      0
    );
    SetTotalAmount(total);
  }, [Cartlist]);

  const navigate = useNavigate();
  const directToCheckout = () => navigate("/Checkout");

  return (
    <CartContainer>
      <Header />
      {cartLength > 0 && <CartHeader>Cart Items</CartHeader>}
      <CartsView>
        {Cartlist.length > 0 ? (
          <CartItemsContainer>
            {Cartlist.map((cartItem, index) => (
              <CartItem
                key={cartItem.id}
                itemDetails={cartItem}
                Increase={() => increaseQuantity(index)}
                Decrease={() => decreaseQuantity(index)}
              />
            ))}
          </CartItemsContainer>
        ) : (
          <EmptyCartContainer>
            <EmptyCart />
            <EmptyCartMsg>Your Cart is Empty</EmptyCartMsg>
          </EmptyCartContainer>
        )}
      </CartsView>
      {cartLength > 0 && (
        <BillContainer>
          <BillMsg>
            Total ({cartLength} items): ₹ {TotalAmount}/-
          </BillMsg>
          <CheckoutButton onClick={directToCheckout}>
            Checkout
          </CheckoutButton>
        </BillContainer>
      )}
      <QueryContainer>
        <ContactMedia>
          <QueryText>
            For any queries, contact +91-9666677770 or mail us
            help@nxtmart.co.in
          </QueryText>
          <MediaContainer>
            <Media>FB</Media>
            <Media>Pinterest</Media>
            <Media>Twitter</Media>
            <Media>Instagram</Media>
          </MediaContainer>
        </ContactMedia>
        <CopyRight>
          Copyright @ 2023 NxtMart Groceries Supply Pvt Ltd
        </CopyRight>
      </QueryContainer>
    </CartContainer>
  );
};

export default Cart;
