import {
  Logo,
  HeaderContainer,
  NavContianer,
  NavItem,
  NavButton,
} from "./styledComponents";

const Header = () => {
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
          <NavButton>Logout</NavButton>
        </NavItem>
      </NavContianer>
    </HeaderContainer>
  );
};

export default Header;
