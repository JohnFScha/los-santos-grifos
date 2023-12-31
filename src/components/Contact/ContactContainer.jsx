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
                  <BsFillTelephoneFill /> 12345
                </div>
                <div className="contenido-2">
                  <IoMdMail /> lossantosgrifos@gmail.com
                </div>
                <div className="contenido-2">
                  <IoLocationSharp /> San Rafael, Mendoza
                </div>
              </div>
              <hr id="divider" />
              <div className="columna">
                <div className="contenido-2">¡Seguinos en nuestras redes!</div>
                <div className="contenido-2">
                  <FaFacebookSquare />
                  <Link to={"https://instagram.com/lossantosgrifos"}>
                    @lossantosgrifos
                  </Link>
                </div>
                <div className="contenido-2">
                  <AiFillInstagram />
                  <Link to={"https://facebok.com/lossantosgrifos"}>
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
