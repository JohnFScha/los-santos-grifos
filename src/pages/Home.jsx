import React from "react";
import ImageWithContainer from "../components/Products/ImageWithContainer";
import Button from "../components/Buttons/Button";
import Carousel from "../components/Carousel/Carousel.jsx";
import Entrega from "../assets/Atencion-personalizada-1.png";
import Atencion from "../assets/entrega-inmediata-1.png";
import Stock from "../assets/Stock-permanente-1.png";
import Grifo1 from "../assets/Rectangle-8.png";
import Grifo2 from "../assets/Rectangle-11.png";
import Grifo3 from "../assets/Rectangle-10.png";
import italomix from "../assets/marcas/italomix.png";
import Fango from "../assets/marcas/fango.png";
import rory from "../assets/marcas/rory.png";
import treemme from "../assets/marcas/treemme.png";
import WhatsappButton from "../components/WhatsappButton/WhatsappButton";

const Home = () => {
  return (
    <main id="Home">
      {/* =============== Seccion de productos =============== */}

      <section role="list" id="productos">
        <div id="heading">
          <h2>Venta mayorista de giferías y bachas</h2>
        </div>
        <div role="menu" id="actions">
          <h3>Conocé nuestros productos</h3>
          <Button>Descargar catálogo</Button>
        </div>
      </section>

      {/* =============== Seccion de Presentación =============== */}

      <section id="presentacion">
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel minus
          dicta cum reiciendis ea aliquam quam sit, saepe adipisci voluptatum
          recusandae tempora iusto exercitationem. Exercitationem laudantium
          pariatur unde suscipit eaque!
        </p>
        ´
        <div role="group" id="info">
          <figure>
            <img src={Stock} alt="stock permanente" />
            <figcaption>Stock permanente</figcaption>
          </figure>
          <figure>
            <img src={Entrega} alt="entrega inmediata" />
            <figcaption>Entrega inmediata</figcaption>
          </figure>
          <figure>
            <img src={Atencion} alt="atencion personalizada" />
            <figcaption>Atención personalizada</figcaption>
          </figure>
        </div>
      </section>

      {/* =============== Seccion de Fotos =============== */}

      <section role="gallery" id="galeria">
        <img src={Grifo1} alt="producto de muestra" id="grifo-1" />
        <img src={Grifo2} alt="producto de muestra" id="grifo-2" />
        <img src={Grifo3} alt="producto de muestra" id="grifo-3" />
      </section>

      {/* =============== Seccion Novedades =============== */}

      <section role="info">
        <ImageWithContainer
          imageUrlTarjeta="/img/mujer-trabajando.png"
          title="Lorem ipsum dolor sit."
          text="Lorem ipsum dolor sit amet consectetur. Feugiat"
          showButton={true}
        />
      </section>

      {/* =============== Seccion Marcas =============== */}

      <section id="marcas">
        <h2>Marcas que comercializamos</h2>
        <article>
          <div>
            <img src={Fango} alt="fango" />
            <img src={rory} alt="rory" />
            <img src={italomix} alt="italomix" />
            <img src={treemme} alt="treemme" />
          </div>
        </article>
      </section>
      <section id="testimonios">
        <article>
          <div>
            <Carousel />
          </div>
        </article>
      </section>

      <WhatsappButton />
    </main>
  );
};

export default Home;
