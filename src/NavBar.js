import React from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import "./NavBar.css";

function NavBar() {
 
 return (
    <div className="container-fluid">
      <Navbar color="dark" expand="sm" className="d-flex flex-row">
        <NavbarBrand id="navbar-text" href="/">Adam King</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink id="navbar-text" className="nav-link" to="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="navbar-text" className="nav-link" to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="navbar-text" className="nav-link" to="/projects">Projects</NavLink>
            </NavItem>
          </Nav>
          
      </Navbar>
      </div>
    
  );
}

export default NavBar;
