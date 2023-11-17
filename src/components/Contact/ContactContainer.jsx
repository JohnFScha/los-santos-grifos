import React from "react";
import "./ContactContainer.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const ContactContainer = () => {
  return (
    <section>
      <div className="contenedor-tarjeta-principal">
        <div className="container-tarjeta">
          <div className="tarjeta-sobresalida">
            <div className="tarjeta-contenido-texto-contacto">
              <div className="contenido"><BsFillTelephoneFill/> 12345</div>
              <div className="contenido"><IoMdMail/> lossantosgrifos@gmail.com</div>
              <div className="contenido"><IoLocationSharp/> San Rafael, Mendoza</div>
              <div className="contenido">¡Seguinos en nuestras redes!</div>
              <div className="contenido"><FaFacebookSquare/>   <AiFillInstagram/></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContainer;
