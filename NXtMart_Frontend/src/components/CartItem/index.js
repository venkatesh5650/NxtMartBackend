import {
  CartItemContainer,
  ItemContainer,
  ItemDetails,
  ItemImg,
  ItemTextBlock,
  ItemName,
  ItemPrice,
  Controller,
  ControlButton,
  Quantity,
} from "./styledComponents";

const CartItem = ({ itemDetails, Increase, Decrease }) => {
  const { name, image_url, price, cartQuantity, quantity } = itemDetails;

  return (
    <CartItemContainer>
      <ItemContainer>
        <ItemDetails>
          <ItemImg src={image_url} alt={name} />
          <ItemTextBlock>
            <ItemName>{name}</ItemName>
            <p>{quantity}</p>
            <ItemPrice>₹ {price}</ItemPrice>
          </ItemTextBlock>
        </ItemDetails>

        <Controller>
          <ControlButton onClick={Increase}>+</ControlButton>
          <Quantity>{cartQuantity}</Quantity>
          <ControlButton onClick={Decrease}>-</ControlButton>
        </Controller>
      </ItemContainer>
      <hr />
    </CartItemContainer>
  );
};

export default CartItem;
