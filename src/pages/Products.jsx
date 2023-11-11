import React from "react";
import ImageWithText from "../components/Products/ImageWithText";
import Boton from "../components/Buttons/Button";
import "../components/Products/ImageWithText.css";
import "../components/Buttons/Button.css";
import "../css/products.css";

const Products = () => {
  return (
    <div>
      <section id="accesorios">
        <div className="products">
          <h2>Nuestros productos</h2>
          <ImageWithText
            imageUrl="/img/imgProducts.png"
            title="Griferías y accesorios"
            description="Lorem ipsum dolor sit amet consectetur."
            imageClassName="contenedor-img1"
            imgProductClassName="imagen-contenedor1"
            contenedorImageClassName="contenedor1"
            textImgClassName="text-contenedor-producto1"
          />
          <ImageWithText
            imageUrl="/img/cocina-minimalista1.png"
            title="Bachas artesanales"
            description="Lorem ipsum dolor sit amet consectetur."
            imageClassName="contenedor-img2"
            imgProductClassName="imagen-contenedor2"
            contenedorImageClassName="contenedor2"
            textImgClassName="text-contenedor-producto2"
          />
          <Boton />
          <div className="contenedor-tarjeta-principal">
            <div className="container-tarjeta">
              <div className="tarjeta-sobresalida">
                <div className="contenedor-image">
                  <img
                    className="img-tarjeta"
                    src="/img/mujer-trabajando.png"
                    alt=""
                  />
                </div>
                <div className="tarjeta-contenido-texto">
                  <h3>Lorem ipsum dolor sit.</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Feugiat</p>
                  <Boton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
