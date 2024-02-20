import React, { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';

function Menu({ direction, ...args}) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <div>
      <Navbar style={{
        background: '#0c5aa9',
        width: "100%"
      }}>
        <NavbarBrand href="/admin">
            <p>Inicio</p>
        </NavbarBrand>
        
        <div style={{
          marginLeft: 750,
          color: 'white'
        }}>Usuario</div>
        <Navbar>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown isOpen={dropdownOpen} toggle={toggle} direction={direction} nav>
              <DropdownToggle nav caret style={{
                color: 'white'
              }}>
                Opciones
              </DropdownToggle>
              <DropdownMenu {...args}>
                <DropdownItem href='/config'>Configuraciones</DropdownItem>
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