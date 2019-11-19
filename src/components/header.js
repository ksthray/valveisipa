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
    background-color : #fff;
    box-shadow: 1px 5px 15px 1px rgba(0,0,0,0.243);
    line-height: 3;

    .logo{
      width: 55px;
      height: 55px;
    }
  }
  .navbar-brand, .navbar-nav .nav-link{
    color: #9F9F9F;
    font-size: 14px;
    text-transform: uppercase;
    font-family: calibri;
    font-weight: 500;
  }
  .nav-link{
    justify-content: space-around;
  }
  .nav-link:hover{
    color: #000;
  }
`

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
  /*let scrollY = function () {
    let supportPageOffset = window.pageXOffset !== undefined;
    let isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
  }

  const onScroll = () => {
    const element = document.querySelector('.header')
    const top = element.getBoundingClientRect().top + scrollY();
    if(scrollY() > top) {
      element.classList.add('fixed')
    }
    else{
      element.classList.remove('fixed')
    }
  } 
  window.addEventListener('scroll', onScroll)*/

  return (
    <Stylet>
      <div className="header">
        <Navbar fixed="top" light expand="sm">
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
