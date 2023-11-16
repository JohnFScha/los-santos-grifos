import React from "react";
import "../css/about.css";
//imports components
import ImageWithContainer from "../components/Products/ImageWithContainer";
import CardObjetivo from "../components/CardsObjetivos/CardObjetivo.jsx";

const About = () => {
  return (
    <div>
      <div className="quienes-somos">
        <h2>Quiénes somos</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Feugiat dignissim eu iaculis
          mauris maecenas felis. Id eget est tellus bibendum sit dolor vitae
          mauris. Velit elementum accumsan est etiam semper suspendisse.Lorem
          ipsum dolor sit amet consectetur. Feugiat dignissim eu iaculis mauris
          maecenas felis. Id eget est tellus bibendum sit dolor vitae mauris.
          Velit elementum accumsan est etiam semper suspendisse.
        </p>
      </div>
      <div>
        <ImageWithContainer imageUrlTarjeta="/img/Vector.svg" />
      </div>
      <div>
        <CardObjetivo
          urlIconCard="/img/iconCard1.svg"
          titleCard="Mision"
          textCard="Lorem ipsum dolor sit amet consectetur. Feugiat dignissim eu iaculis mauris maecenas felis. Lorem ipsum dolor iaculis mauris maecenas felis."
        />
        <CardObjetivo
          urlIconCard="/img/iconCard2.svg"
          titleCard="Vision"
          textCard="Lorem ipsum dolor sit amet consectetur. Feugiat dignissim eu iaculis mauris maecenas felis. Lorem ipsum dolor iaculis mauris maecenas felis."
        />
        <CardObjetivo
          urlIconCard="/img/iconCard3.svg"
          titleCard="Vision"
          listItems={[
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
          ]}
        />
      </div>
    </div>
  );
};

export default About;
