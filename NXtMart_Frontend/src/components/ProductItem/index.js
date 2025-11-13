import { Link } from "react-router-dom";

import {
  ProductWrapper,
  ProductImg,
  DetailsSection,
  ProductInfo,
  AddCartBtn,
  CartMsg,
} from "./styledComponents";

const ProductItem = ({ productDetails, onAddCart, addCartMsg }) => {
  const { name, price, quantity, image_url } = productDetails;

  return (
    <Link
      to={`/product/${productDetails.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {/* existing product card */}

      <ProductWrapper>
        <ProductImg src={image_url} alt={name} />

        <DetailsSection>
          <ProductInfo>
            <h4>{name}</h4>
            <p>Quantity: {quantity}</p>
            <h4>₹ {price}</h4>
          </ProductInfo>

          <div>
            <AddCartBtn onClick={() => onAddCart(productDetails)}>
              Add to Cart
            </AddCartBtn>
            {addCartMsg && <CartMsg>{addCartMsg}</CartMsg>}
          </div>
        </DetailsSection>
      </ProductWrapper>
    </Link>
  );
};

export default ProductItem;
