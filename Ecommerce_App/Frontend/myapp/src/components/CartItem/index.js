import {
  CartItemContainer,
  ItemContainer,
  ItemDetails,
  ItemImg,
  ItemName,
  ItemPrice,
  Controller,
  ControllIcon,
  Quantity,
} from "./styledComponents";

const CartItem = ({ itemDetails, Increase, Decrease }) => {
  const { name, image_url, price, cartQuantity, quantity } = itemDetails;

  return (
    <CartItemContainer>
      <ItemContainer>
        <ItemDetails>
          <ItemImg src={image_url} alt={name} />
          <div>
            <ItemName>{name}</ItemName>
            <p>{quantity}</p>
            <ItemPrice>₹{price}</ItemPrice>
          </div>
        </ItemDetails>
        <Controller>
          <ControllIcon onClick={Increase}>+</ControllIcon>
          <Quantity>{cartQuantity}</Quantity>
          <ControllIcon onClick={Decrease}>-</ControllIcon>
        </Controller>
      </ItemContainer>
      <hr />
    </CartItemContainer>
  );
};

export default CartItem;
