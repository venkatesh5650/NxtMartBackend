import styled from "styled-components";

export const Logo = styled.img`
  margin-left:40px;
  width: 119px;
  height: 50px
  angle: 0 deg;
  opacity: 1;
`;

export const HeaderContainer = styled.div`
  background-color: #f2f4f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  height: 17vh;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
`;

export const NavContianer = styled.ul`
  display: flex;
`;
export const NavItem = styled.li`
  font-size: 18px;
  font-weight: 500;
  color: green;
  list-style-type: none;
  margin-right: 20px;
`;

export const NavButton = styled.button`
  font-size: 18px;
  font-weight: 600;
  color: green;
  list-style-type: none;
  margin-right: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const Tagline = styled.p`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1px;
  color: green; /* rich green for premium feel */
  font-family: "Poppins", sans-serif;
  margin: 0 auto;
  text-align: center;
  white-space: nowrap;
  padding-left: 100px;

`;
