import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {LogoWrap,Link,Signupbutton} from './style'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><LogoWrap>SHADES</LogoWrap></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/"><Link>Free Landing Pages</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/"><Link>Features</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/"><Link>Services</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/"><Link>Pricing</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/"><Link>Contact</Link></NavLink>
            </NavItem>
            

          </Nav>
          <NavbarText>Sign in</NavbarText>
          <NavbarText><Signupbutton>Get Started</Signupbutton></NavbarText>

        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;