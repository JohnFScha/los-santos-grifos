import React from "react";
import Questions from "../components/faq/Questions";
import WhatsappButton from "../components/WhatsappButton/WhatsappButton";

const FAQ = () => {
  return (
    <main>
      <section id='heading'>
        <h2>Preguntas frecuentes</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          itaque molestias repellendus accusamus quasi libero, iste esse enim.
        </p>
      </section>
      <section role="list" id="questions">
        <Questions />
      </section>
      <article id="CTA">
        Ante cualquier consulta comunicate con nostros por whatsapp
      </article>
      <WhatsappButton />
    </main>
  );
};

export default FAQ;
