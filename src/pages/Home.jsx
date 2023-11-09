import React from "react";
import Entrega from "../assets/Atencion-personalizada-1.png";
import Atencion from '../assets/entrega-inmediata-1.png'
import Stock from '../assets/Stock-permanente-1.png'
import Grifo1 from '../assets/Rectangle-8.png'
import Grifo2 from '../assets/Rectangle-11.png'
import Grifo3 from '../assets/Rectangle-10.png'


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
          <button>Descargar catálogo</button>
        </div>
      </section>

      {/* =============== Seccion de Presentación =============== */}

      <section id="presentacion">
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel minus dicta cum reiciendis ea aliquam quam sit, saepe adipisci voluptatum recusandae tempora iusto exercitationem. Exercitationem laudantium pariatur unde suscipit eaque!</p>´
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
        <img src={Grifo1} alt="producto de muestra" id="grifo-1"/>
        <img src={Grifo2} alt="producto de muestra" id="grifo-2"/>
        <img src={Grifo3} alt="producto de muestra" id="grifo-3"/>
      </section>

    </main>
  );
};

export default Home;
