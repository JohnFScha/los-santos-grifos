import React from "react";
import ContactContainer from "../components/Contact/ContactContainer";
import Button from "../components/Buttons/Button";
import Griferia from "../assets/foto-pie-contacto.jpg";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <main className="animate__animated animate__fadeIn animate__fast">
      <h2>Contacto</h2>
      <ContactContainer />
      <section id="explicacion">
        <h3>Comunicate con nosotros</h3>
        <p>
          ¡Te brindamos atención personalizada! <br /> Realizá tu
          <strong> consulta</strong>, <strong>pedido</strong> o{" "}
          <strong>solicitud de presupuesto.</strong>
        </p>
        <div id="contact-data">
          <Button isContact={true}>
            <BsWhatsapp />
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
