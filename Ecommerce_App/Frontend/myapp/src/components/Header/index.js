import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import {
  Logo,
  HeaderContainer,
  NavContianer,
  NavItem,
  NavButton,
  Tagline,
} from "./styledComponents";

const Header = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login");
  };

  const directToCart = () => {
    navigate("/cart");
  };

  const directToHome = () => {
    navigate("/");
  };

  return (
    <HeaderContainer>
      <Logo
        src="https://res.cloudinary.com/dpiu7mohv/image/upload/v1757246439/6fad20838855997d164dd88d885fad87bdfa3be6_3_sebipw.png"
        alt="Logo"
      />
      <Tagline>Freshness Delivered. Every Day.</Tagline> {/* 🟢 Add This */}
      <NavContianer>
        <NavItem>
          <NavButton onClick={directToHome}>Home</NavButton>
        </NavItem>
        <NavItem>
          <NavButton onClick={directToCart}>Cart</NavButton>
        </NavItem>
        <NavItem>
          <NavButton onClick={onClickLogout}>Logout</NavButton>
        </NavItem>
      </NavContianer>
    </HeaderContainer>
  );
};

export default Header;
