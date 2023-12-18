import React from "react";
import Logo from "../assets/Recurso-3-1.png";
import { AiOutlineMenu } from "react-icons/ai";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Los santos grifos" />
      <section id="mobile-menu">
        <Menu>
          <MenuButton fontSize={"2rem"}>
            <AiOutlineMenu />
          </MenuButton>
          <MenuList>
            <MenuItem borderBottom={"2px"} borderBottomColor={"#F3A950"}>
              <Link to={"/"}>Pagina Principal</Link>
            </MenuItem>
            <MenuItem borderBottom={"2px"} borderBottomColor={"#F3A950"}>
              <Link to={"/nosotros"}>Quienes Somos</Link>
            </MenuItem>
            <MenuItem borderBottom={"2px"} borderBottomColor={"#F3A950"}>
              <Link to={"/productos"}>Productos</Link>
            </MenuItem>
            <MenuItem borderBottom={"2px"} borderBottomColor={"#F3A950"}>
              <Link to={"/contacto"}>Contacto</Link>
            </MenuItem>
            <MenuItem>
              <Link to={"/faq"}>Preguntas frecuentes</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </section>
      <section id="desktop-menu">
        <Link to={"/"}>Pagina Principal</Link>
        <Link to={"/nosotros"}>Quienes Somos</Link>
        <Link to={"/productos"}>Productos</Link>
        <Link to={"/contacto"}>Contacto</Link>
        <Link to={"/faq"}>Preguntas frecuentes</Link>
      </section>
    </header>
  );
};

export default Header;
