import PropTypes from "prop-types"
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';
import styled from 'styled-components';
import logo from '../images/logo.png';

const Stylet = styled.div`
  .navbar {
    background-color : transparent;
    z-index: 15;

    .logo{
      width: 55px;
      height: 55px;
    }
  }
  .navbar-brand, .navbar-nav .nav-link{
    color: yellow;
    font-size: 16px;
    text-transform: uppercase;
  }
  .nav-link:hover{border-bottom: 1px solid white;}
`

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Stylet>
      <div className="header">
        <Navbar expand="sm">
          <div className="container">
            <NavbarBrand href="/"><img src={logo} alt="logo" className="logo" /> {siteTitle}</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem id="demo">
                  <NavLink href="/news">News</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/apropos">A propos</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact">Contact</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/publicite">Publicite</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    </Stylet>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
