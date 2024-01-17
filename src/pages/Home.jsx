import React from "react";
import ImageWithContainer from "../components/Products/ImageWithContainer";
import Button from "../components/Buttons/Button";
import Carousel from "../components/Carousel/Carousel.jsx";
import Entrega from "../assets/Atencion-personalizada-1.png";
import Atencion from "../assets/star-badge.png";
import Stock from "../assets/Stockpermanente.png";
import Grifo1 from "../assets/grifo-1.jpg";
import Grifo2 from "../assets/grifo-2.jpg";
import Grifo3 from "../assets/grifo-3.png";

import italomix from "../assets/marcas/italomix.png";
import Fango from "../assets/marcas/fango.png";
import rory from "../assets/marcas/rory.png";
import treemme from "../assets/marcas/treemme.jpg";
import WhatsappButton from "../components/WhatsappButton/WhatsappButton";
import Slider from "react-infinite-logo-slider";

const Home = () => {
  return (
    <main id="Home" className="animate__animated animate__fadeIn  animate__fast">
      {/* =============== Seccion de productos =============== */}

      <section role="list" id="productos">
        <div id="heading">
          <hr id="div-1" />
          <h2 id="h2-home">Venta mayorista de griferías y bachas</h2>
          <hr id="div-2" />
        </div>
        <div role="menu" id="actions">
          <h3 id="h3-home">Conocé nuestros productos</h3>
          <Button id="button-home">Descargar catálogo</Button>
        </div>
      </section>

      {/* =============== Seccion de Presentación =============== */}

      <section id="presentacion">
        <h2>Calidad y excelencia para tus clientes</h2>
        <p>
          Contamos con una amplia variedad de griferías y accesorios para baños
          y cocinas adaptadas a todas las necesidades. Realizamos envíos a todo
          el país.
        </p>
        ´
        <div role="group" id="info">
          <figure>
            <div>
              <img src={Stock} alt="stock permanente" />
            </div>
            <figcaption>Stock permanente</figcaption>
          </figure>
          <figure>
            <div>
              <img src={Atencion} alt="entrega inmediata" />
            </div>
            <figcaption>Calidad Garantizada</figcaption>
          </figure>
          <figure>
            <div>
              <img src={Entrega} alt="atencion personalizada" />
            </div>
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

      <section role="info" id="card">
        <ImageWithContainer
          imageUrlTarjeta="./src/assets/mujer-trabajando.png"
          customClass="imagenMujer"
          title="Conocé nuestras novedades"
          text="Mantenete al tanto de las nuevas propuestas"
          showButton={true}
        />
      </section>

      {/* =============== Seccion Marcas =============== */}

      <section id="marcas">
        <h2>Marcas que comercializamos</h2>

        <Slider
          width="250px"
          duration={30}
          pauseOnHover={true}
          blurBorders={true}
          blurBoderColor={"#FAFAFA"}
        >
          <Slider.Slide>
            <img src={Fango} alt="fango" />
          </Slider.Slide>
          <Slider.Slide>
            <img src={rory} alt="rory" />
          </Slider.Slide>
          <Slider.Slide>
            <img src={italomix} alt="italomix" />
          </Slider.Slide>
          <Slider.Slide>
            <img src={treemme} alt="treemme" />
          </Slider.Slide>
        </Slider>
      </section>

      {/* =============== Seccion Testimonios =============== */}

      <section id="testimonios">
        <article>
          <div>
            <h2>Nuestros clientes</h2>
            <Carousel />
          </div>
        </article>
      </section>

      <WhatsappButton />
    </main>
  );
};

export default Home;
