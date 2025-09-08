import { useNavigate } from "react-router-dom";

import {
  Logo,
  HeaderContainer,
  NavContianer,
  NavItem,
  NavButton,
} from "./styledComponents";

const Header = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    localStorage.removeItem("jwt_token");
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <Logo
        src="https://res.cloudinary.com/dpiu7mohv/image/upload/v1757246439/6fad20838855997d164dd88d885fad87bdfa3be6_3_sebipw.png"
        alt="Logo"
      />
      <NavContianer>
        <NavItem>
          <NavButton>Home</NavButton>
        </NavItem>
        <NavItem>
          <NavButton>Cart</NavButton>
        </NavItem>
        <NavItem>
          <NavButton onClick={onClickLogout}>Logout</NavButton>
        </NavItem>
      </NavContianer>
    </HeaderContainer>
  );
};

export default Header;
