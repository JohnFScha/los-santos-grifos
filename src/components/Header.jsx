import React from "react";
import Logo from "../assets/Recurso-3-1.png";
import { AiOutlineMenu } from "react-icons/ai";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Los santos grifos" />
      <Menu>
        <MenuButton>
          <AiOutlineMenu />
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link to={"/"}>Pagina Principal</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/nosotros"}>Quienes Somos</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/productos"}>Productos</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/contacto"}>Contacto</Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </header>
  );
};

export default Header;
