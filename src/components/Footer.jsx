import React from "react";
import Logo from "../assets/Group-4693.png";
import { Link } from "react-router-dom";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={Logo} alt="Los santos grifos" />
      </div>

      <div>
        <Link to={"/"}>Inicio</Link>
        <Link to={"/productos"}>Productos</Link>
        <Link to={"/nosotros"}>Quiénes somos</Link>
        <Link to={"/faq"}>Preguntas frecuentes</Link>
        <Link to={"/contacto"}>Contacto</Link>
      </div>

      <div>
        <Link to={"mailto:lossantosgrifos@gmail.com"} id="contact-footer">
          <BsFillTelephoneFill />
          losantosgrifos2004@hotmail.com
        </Link>
        <Link to={"tel:+541123864313"} id="contact-footer">
          <IoMdMail />
          11 5573-6664
        </Link>
        <div id="social-footer">
          <Link to={"https://facebook.com/lossantosgrifos"} target="_blank">
            <BiLogoFacebookSquare />
          </Link>
          <Link to={"https://instagram.com/lossantosgrifos"} target="_blank">
            <RiInstagramFill />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
