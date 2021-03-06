import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavBtnLink, NavBtn } from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">getBasis</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavBtn>
              <NavBtnLink to="/start">Get Started</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
