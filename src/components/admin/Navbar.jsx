import React, { useState, useContext } from 'react';
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
import Logo from '../../img/YuShuLogo.png';
import { AuthContext } from '../../utils/authContext';

function Menu({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const { currentUser, logout } = useContext(AuthContext); 

  return (
    <div>
      <Navbar className='navbar'>
        <NavbarBrand>
        <img src={Logo} alt=""/>
        </NavbarBrand>
        <Navbar>
          <NavbarText className='user'>{currentUser.user}</NavbarText>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown isOpen={dropdownOpen} toggle={toggle} direction={direction} nav>
              <DropdownToggle nav caret style={{
                color: 'white'
              }}>
                Opciones
              </DropdownToggle>
              <DropdownMenu {...args}>
              <DropdownItem href='/admin'>Administrador</DropdownItem>
                <DropdownItem href='/admin/views'>Modulos</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={logout} href="/">Salir</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
      </Navbar>
    </div>
  );
}

export default Menu;