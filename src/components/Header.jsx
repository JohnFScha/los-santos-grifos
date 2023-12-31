import React from "react";
import Logo from "../assets/Recurso-3-1.png";
import { AiOutlineMenu } from "react-icons/ai";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation()

  const isLinkActive = (pathname) => {
    // Compare the current pathname with the link's pathname
    return location.pathname === pathname;
  };

  return (
    <header>
      <img src={Logo} alt="Los santos grifos" />
      <nav id="mobile-menu">
        <Menu>
          <MenuButton>
            <AiOutlineMenu />
          </MenuButton>
          <MenuList zIndex={10}>
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
            <MenuItem>
              <Link to={"/faq"}>Preguntas frecuentes</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </nav>
      <nav id="desktop-menu">
        <Link to={"/"} className={isLinkActive("/") ? "active" : ""}>Inicio</Link>
        <Link to={"/productos"} className={isLinkActive("/productos") ? "active" : ""}>Nuestros productos</Link>
        <Link to={"/nosotros"} className={isLinkActive("/nosotros") ? "active" : ""}>Quienes Somos</Link>
        <Link to={"/faq"} className={isLinkActive("/faq") ? "active" : ""}>Preguntas frecuentes</Link>
        <Link to={"/contacto"} className={isLinkActive("/contacto") ? "active" : ""}>Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;
