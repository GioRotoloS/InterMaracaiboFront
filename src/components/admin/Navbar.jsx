import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import logo from "../../img/Logo.png";

function Menu({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div>
      <Navbar className='navbar'>
        <NavbarBrand>
        <img src={logo} alt=""/>
        </NavbarBrand>
        <Navbar>
          <NavbarText className='user'>Usuario</NavbarText>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown isOpen={dropdownOpen} toggle={toggle} direction={direction} nav>
              <DropdownToggle nav caret style={{
                color: 'white'
              }}>
                Opciones
              </DropdownToggle>
              <DropdownMenu {...args}>
              <DropdownItem href='/admin'>Administrador</DropdownItem>
                <DropdownItem href='/views'>Modulos</DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/">Salir</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
      </Navbar>
    </div>
  );
}

export default Menu;