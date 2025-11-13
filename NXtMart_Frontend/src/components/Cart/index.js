import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaPinterest,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import Header from "../Header";
import CartItem from "../CartItem";
import {
  CartContainer,
  CartHeader,
  CartsView,
  CartItemsContainer,
  EmptyCartContainer,
  EmptyCartIcon,
  EmptyCartMsg,
  BillContainer,
  BillMsg,
  CheckoutButton,
  QueryContainer,
  ContactMedia,
  QueryText,
  MediaContainer,
  Media,
  CopyRight,
} from "./styledComponents";

const Cart = () => {
  const username = localStorage.getItem("username") || "guest";

  const storageKey = `cartList_${username}`;

  const [Cartlist, setCartlist] = useState(
    JSON.parse(localStorage.getItem(storageKey)) || []
  );

  const [TotalAmount, SetTotalAmount] = useState(0);

  const updateLocalStorage = (updated) => {
    setCartlist(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
  };

  const increaseQuantity = (index) => {
    const updated = [...Cartlist];
    updated[index].cartQuantity += 1;
    updateLocalStorage(updated);
  };

  const decreaseQuantity = (index) => {
    const updated = [...Cartlist];
    if (updated[index].cartQuantity > 1) {
      updated[index].cartQuantity -= 1;
    } else {
      updated.splice(index, 1);
    }
    updateLocalStorage(updated);
  };

  useEffect(() => {
    const total = Cartlist.reduce(
      (acc, cart) => acc + cart.price * cart.cartQuantity,
      0
    );
    SetTotalAmount(total);
  }, [Cartlist]);

  const navigate = useNavigate();

  const directToCheckout = () => {
    navigate("/Checkout");
    localStorage.removeItem(storageKey);
  };

  return (
    <CartContainer>
      <Header />
      {Cartlist.length > 0 && <CartHeader>My Cart</CartHeader>}

      <CartsView>
        {Cartlist.length > 0 ? (
          <CartItemsContainer>
            {Cartlist.map((item, index) => (
              <CartItem
                key={item.id}
                itemDetails={item}
                Increase={() => increaseQuantity(index)}
                Decrease={() => decreaseQuantity(index)}
              />
            ))}
          </CartItemsContainer>
        ) : (
          <EmptyCartContainer>
            <EmptyCartIcon />
            <EmptyCartMsg>Your Cart is Empty</EmptyCartMsg>
          </EmptyCartContainer>
        )}
      </CartsView>

      {Cartlist.length > 0 && (
        <BillContainer>
          <BillMsg>
            Total ({Cartlist.length} items): ₹ {TotalAmount}/-
          </BillMsg>
          <CheckoutButton onClick={directToCheckout}>Checkout</CheckoutButton>
        </BillContainer>
      )}

      <QueryContainer>
        <ContactMedia>
          <QueryText>
            For any queries, contact +91-9666677770 or mail us at
            help@nxtmart.co.in
          </QueryText>

          <MediaContainer>
            <Media>
              <FaFacebook />
            </Media>
            <Media>
              <FaPinterest />
            </Media>
            <Media>
              <FaTwitter />
            </Media>
            <Media>
              <FaInstagram />
            </Media>
          </MediaContainer>
        </ContactMedia>

        <CopyRight>© 2023 NxtMart Groceries Supply Pvt Ltd</CopyRight>
      </QueryContainer>
    </CartContainer>
  );
};

export default Cart;
