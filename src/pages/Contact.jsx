import React from "react";
import ContactContainer from "../components/Contact/ContactContainer";
import Button from "../components/Buttons/Button";
import { Link } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <main>
      <h2>Contacto</h2>
      <ContactContainer />
      <section id="explicacion">
        <h3>Lorem ipsum dolor sit amet</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, est. Id
          nesciunt fugit architecto non dolores.
        </p>
        <div id="contact-data">
          <Link to={"tel:+541123864313"}>
            <BsWhatsapp />
          </Link>
          <Button>Enviar Whatsapp</Button>
        </div>
      </section>
    </main>
  );
};

export default Contact;
