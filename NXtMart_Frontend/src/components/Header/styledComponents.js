import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #f2f4f7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  height: 65px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;   /* ✅ Keep inside viewport */
  box-sizing: border-box; /* ✅ Prevent overflow */
  z-index: 1000;
  overflow: hidden; /* ✅ Avoid horizontal expansion */
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12);


  @media (max-width: 480px) {
    padding: 8px 12px;
  }
`;

export const Logo = styled.img`
  width: 110px;
  height: 60px;
  cursor: pointer;
  /* ✅ Remove problematic margin-left */
  
  @media (max-width: 480px) {
    width: 90px;
  }
`;

export const Tagline = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: green;
  margin: 0 auto; /* center text */
  white-space: nowrap;

  @media (max-width: 768px) {
    display: none; /* Hide on mobile */
  }
`;

export const NavContainer = styled.ul`
  display: flex;
  align-items: center;
  margin: 0; 
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  list-style: none;
  margin-left: 12px;
`;

export const NavButton = styled.button`
  background: transparent;
  border: none;
  color: green;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
  white-space: nowrap;

  &:hover {
    color: black;
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;
  color: green;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block; /* ✅ Always visible on mobile */
  }
`;

export const MobileNavMenu = styled.div`
  position: fixed;
  top: 65px;
  right: 0;
  width: 100%;
  background: white;
  padding: 14px 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  border-bottom: 1px solid #d1d5db;
  animation: slideDown 0.3s ease-in-out;

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-6px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
