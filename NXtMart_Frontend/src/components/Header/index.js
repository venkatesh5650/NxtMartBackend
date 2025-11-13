import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import {
  HeaderContainer,
  Logo,
  Tagline,
  NavContainer,
  NavItem,
  NavButton,
  MobileMenuIcon,
  MobileNavMenu,
} from "./styledComponents";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {
    Cookies.remove("jwt_token");
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <Logo
        src="https://res.cloudinary.com/dpiu7mohv/image/upload/v1757246439/6fad20838855997d164dd88d885fad87bdfa3be6_3_sebipw.png"
        alt="Logo"
        onClick={() => navigate("/")}
      />

      <Tagline>Freshness Delivered. Every Day.</Tagline>

      {/* Desktop Nav */}
      <NavContainer>
        <NavItem><NavButton onClick={() => navigate("/")}>Home</NavButton></NavItem>
        <NavItem><NavButton onClick={() => navigate("/cart")}>Cart</NavButton></NavItem>
        <NavItem><NavButton onClick={logout}>Logout</NavButton></NavItem>
      </NavContainer>

      {/* Hamburger Icon */}
      <MobileMenuIcon onClick={() => setMenuOpen((prev) => !prev)}>
        {menuOpen ? <IoClose size={28} /> : <GiHamburgerMenu size={28} />}
      </MobileMenuIcon>

      {/* Mobile Menu */}
      {menuOpen && (
        <MobileNavMenu>
          <NavButton onClick={() => navigate("/")}>Home</NavButton>
          <NavButton onClick={() => navigate("/cart")}>Cart</NavButton>
          <NavButton onClick={logout}>Logout</NavButton>
        </MobileNavMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;
