import React, { useEffect } from "react";
import Logo from "../assets/logo-header.png";
import { AiOutlineMenu } from "react-icons/ai";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  //volver al inicio de cada scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const isLinkActive = (pathname) => {
    // Compare the current pathname with the link's pathname
    return location.pathname === pathname;
  };

  return (
    <header>
      <Link to={"/"}>
        <img src={Logo} alt="Los santos grifos" />
      </Link>
      <nav id="mobile-menu">
        <Menu>
          <MenuButton fontSize={"30px"}>
            <AiOutlineMenu />
          </MenuButton>
          <MenuList zIndex={10}>
            <MenuItem>
              <Link to={"/"} className={isLinkActive("/") ? "active" : ""}>
                Inicio
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to={"/nosotros"}
                className={isLinkActive("/nosotros") ? "active" : ""}
              >
                Quiénes Somos
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to={"/productos"}
                className={isLinkActive("/productos") ? "active" : ""}
              >
                Productos
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to={"/contacto"}
                className={isLinkActive("/contacto") ? "active" : ""}
              >
                Contacto
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to={"/faq"}
                className={isLinkActive("/faq") ? "active" : ""}
              >
                Preguntas frecuentes
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </nav>
      <nav id="desktop-menu">
        <Link to={"/"} className={isLinkActive("/") ? "active" : ""}>
          Inicio
        </Link>
        <Link
          to={"/productos"}
          className={isLinkActive("/productos") ? "active" : ""}
        >
          Nuestros productos
        </Link>
        <Link
          to={"/nosotros"}
          className={isLinkActive("/nosotros") ? "active" : ""}
        >
          Quiénes Somos
        </Link>
        <Link to={"/faq"} className={isLinkActive("/faq") ? "active" : ""}>
          Preguntas frecuentes
        </Link>
        <Link
          to={"/contacto"}
          className={isLinkActive("/contacto") ? "active" : ""}
        >
          Contacto
        </Link>
      </nav>
    </header>
  );
};

export default Header;
