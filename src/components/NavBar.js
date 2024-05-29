import React from 'react';
import {
  Nav,
  NavItem
} from "../styles/NavBarStyles"

const NavBar = () => {
  return (
    <Nav>
      <NavItem to="/dashboard/home">
        Home
      </NavItem>
      <NavItem to="/dashboard/music">
        Music
      </NavItem>
      <NavItem to="/dashboard/shows">
        Shows
      </NavItem>
      <NavItem to="/dashboard/messages">
        Messages
      </NavItem>
    </Nav>
  );
};

export default NavBar;