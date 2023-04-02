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
import logo from "./logo.png"

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <div>
              <img src={logo} alt="Logo image" height={60} width={70} />
            </div>
          </NavLogo>
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