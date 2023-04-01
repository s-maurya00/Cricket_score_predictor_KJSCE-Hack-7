import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Logo</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">Analyze Statistics</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Predict Win</NavLinks>
            </NavItem>
            
          </NavMenu>
         
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;