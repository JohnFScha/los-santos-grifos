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
                <Link
                  className="contenido-2"
                  to={
                    "https://api.whatsapp.com/send/?phone=1138889199&text&type=phone_number&app_absent=0"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFillTelephoneFill /> 11 5573-6664
                </Link>
                <Link
                  className="contenido-2"
                  to={"mailto:losantosgrifos@hotmail.com "}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoMdMail /> losantosgrifos2004@hotmail.com
                </Link>
                <Link
                  className="contenido-2"
                  to={"https://maps.app.goo.gl/MQcuMAvqimSUoELL9"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLocationSharp /> San Rafael, Mendoza
                </Link>
              </div>
              <hr id="divider" />
              <div className="columna">
                <div className="contenido-2" id="subtitle">
                  ¡Seguinos en nuestras redes!
                </div>
                <div className="contenido-2">
                  <AiFillInstagram />
                  <Link
                    to={"https://instagram.com/losantosgrifos"}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    @losantosgrifos
                  </Link>
                </div>
                <div className="contenido-2">
                  <FaFacebookSquare />
                  <Link
                    to={
                      "https://web.facebook.com/profile.php?id=61550800472914&_rdc=1&_rdr"
                    }
                    rel="noopener noreferrer"
                    target="_blank"
                  >
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
