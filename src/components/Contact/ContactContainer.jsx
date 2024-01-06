import React from "react";
import "./ContactContainer.css";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const ContactContainer = () => {
  return (
    <section>
      <div className="contenedor-principal">
        <div className="contenedor-tarjeta">
          <div className="tarjeta-sobresalida-2" style={{ height: "50vh" }}>
            <div className="tarjeta-contenido-texto-contacto">
              <div className="columna">
                <div className="contenido-2">
                  <BsFillTelephoneFill /> 11 5573-6664
                </div>
                <div className="contenido-2">
                  <IoMdMail /> losantosgrifos@hotmail.com
                </div>
                <div className="contenido-2">
                  <IoLocationSharp /> San Rafael, Mendoza
                </div>
              </div>
              <hr id="divider" />
              <div className="columna">
                <div className="contenido-2" id="subtitle">¡Seguinos en nuestras redes!</div>
                <div className="contenido-2">
                  <FaFacebookSquare />
                  <Link to={"https://instagram.com/losantosgrifos"}>
                    @losantosgrifos
                  </Link>
                </div>
                <div className="contenido-2">
                  <AiFillInstagram />
                  <Link to={"https://facebok.com/losantosgrifos"}>
                    Los Santos Grifos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContainer;
