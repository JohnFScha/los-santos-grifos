import React from "react";
import ContactContainer from "../components/Contact/ContactContainer";
import Button from "../components/Buttons/Button";
import { Link } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";
import Griferia from "../assets/foto-pie-contacto.jpg";

const Contact = () => {
  return (
    <main>
      <h2>Contacto</h2>
      <ContactContainer />
      <section id="explicacion">
        <h3>Comunicate con nosotros</h3>
        <p>
          ¡Te brindamos atención personalizada! Realizá tu{" "}
          <strong>consulta</strong>, <strong>pedido</strong> o{" "}
          <strong>solicitud de presupuesto.</strong>
        </p>
        <div id="contact-data">
          <Button>
            <Link to={"tel:+541123864313"}>
              <BsWhatsapp />
            </Link>
            Enviar Whatsapp
          </Button>
        </div>
        <section id="image-container">
          <img
            src={Griferia}
            alt="foto de muestra de nuestros productos"
            id="griferia-pie"
          />
        </section>
      </section>
    </main>
  );
};

export default Contact;
