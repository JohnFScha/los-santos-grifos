import React from "react";
import Logo from "../assets/Group-4693.png";
import { Link } from "react-router-dom";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="Los santos grifos" />
      <Link to={'/'}>Inicio</Link>
      <Link to={'/productos'}>Productos</Link>
      <Link to={'/nosotros'}>Quienes somos</Link>
      <Link to={'/contacto'}>Contacto</Link>
      <Link to={'mailto:lossantosgrifos@gmail.com'}>Email</Link>
      <Link to={'tel:+541123864313'}>Telefono</Link>
      <div>
        <Link to={'https://facebook.com/lossantosgrifos'} target="_blank">
          <BiLogoFacebookSquare />
        </Link>
        <Link to={'https://instagram.com/lossantosgrifos'} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
