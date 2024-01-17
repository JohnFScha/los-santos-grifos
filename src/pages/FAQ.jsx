import React from "react";
import Questions from "../components/faq/Questions";
import WhatsappButton from "../components/WhatsappButton/WhatsappButton";
import bottompic from "../assets/bottom1.jpg";
const FAQ = () => {
  return (
    <main className="animate__animated animate__fadeIn animate__fast">
      <h2>Preguntas frecuentes</h2>
      <section role="list" id="questions">
        <Questions />
      </section>
      <article id="CTA" className="CTA">
        Ante cualquier consulta comunicate con nosotros por WhatsApp
      </article>
      <WhatsappButton />
      <section className="img-container">
        <img src={bottompic} alt="imagen de referencia" />
      </section>
    </main>
  );
};

export default FAQ;
