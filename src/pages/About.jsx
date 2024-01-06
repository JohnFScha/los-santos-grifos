import React from "react";
import "../css/about.css";
import about from "../assets/about.jpg";
//imports components
import ImageWithContainer from "../components/Products/ImageWithContainer";
import CardObjetivo from "../components/CardsObjetivos/CardObjetivo.jsx";
import ImageAbout from "../components/Products/ImageAbout.jsx";

const About = () => {
  return (
    <main>
      <h2>Quiénes somos</h2>
      <div className="flex-about">
        <div className="quienes-somos">
          <p>
            Somos un emprendimiento de San Rafael, Mendoza, dedicado a la venta
            mayorista de griferías y accesorios para baños y cocinas. El apoyo y
            la confianza de nuestros clientes nos incentiva a seguir trabajando
            para sumar nuevos productos a nuestro catálogo. Esto nos permitió
            incorporar una línea de bachas exclusivas de cerámica confeccionadas
            de forma artesanal.
          </p>
          <p>
            En Los Santos Grifos nos distingue la atención personalizada hacia
            nuestros clientes y la comunicación fluida que mantenemos con cada
            uno de ellos.
          </p>
        </div>

        <div>
          <ImageAbout imageUrlTarjeta={about} customClass={"foto-about"} />
        </div>
      </div>
      <div className="objetivos">
        <CardObjetivo
          urlIconCard="/img/iconCard1.svg"
          titleCard="Mision"
          textCard="Queremos brindar soluciones innovadoras, fusionando la artesanía con la funcionalidad, para mejorar la experiencia diaria de cada espacio, manteniendo un compromiso inquebrantable con la excelencia y la satisfacción del cliente."
          className="card-objetivo"
        />
        <CardObjetivo
          urlIconCard="/img/iconCard2.svg"
          titleCard="Vision"
          textCard="Apuntamos a ser reconocidos como referentes en el mercado de griferías y accesorios para el hogar en el interior del país por nuestra amplia gama de productos de alta calidad y diseño exclusivo, junto con nuestra atención personalizada."
          className="card-objetivo"
        />
        <CardObjetivo
          urlIconCard="/img/iconCard3.png"
          titleCard="Valores"
          listItems={[
            "Calidad.",
            "Innovación.",
            "Atención personalizada.",
            "Compromiso con nuestros clientes.",
          ]}
          className="card-objetivo"
        />
      </div>
    </main>
  );
};

export default About;
