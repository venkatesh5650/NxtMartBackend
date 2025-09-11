import {
  ProductImg,
  DetailsSection,
  AddCartBtn,
  CartMsg,
} from "./styledComponents";

const ProductItem = (props) => {
  const { productDetails, onAddCart, addCartMsg } = props;
  const { name, price, quantity, image_url } = productDetails;

  return (
    <div>
      <ProductImg src={image_url} alt={name} />
      <DetailsSection>
        <div>
          <h4>{name}</h4>
          <p>Quantity: {quantity}</p>
          <h4>Price: ₹{price}</h4>
        </div>
        <div>
          <AddCartBtn type="button" onClick={() => onAddCart(productDetails)}>
            Add to Cart
          </AddCartBtn>
          {addCartMsg && <CartMsg>{addCartMsg}</CartMsg>}
        </div>
      </DetailsSection>
    </div>
  );
};

export default ProductItem;
