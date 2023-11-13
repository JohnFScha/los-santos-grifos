import React from "react";
import ImageWithText from "../components/Products/ImageWithText";
import Boton from "../components/Buttons/Button";
import ImageWithContainer from "../components/Products/ImageWithContainer";

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
          <ImageWithContainer
            imageUrlTarjeta="/img/mujer-trabajando.png"
            title="Lorem ipsum dolor sit."
            text="Lorem ipsum dolor sit amet consectetur. Feugiat"
            showButton={true}
          />
        </div>
      </section>
    </div>
  );
};

export default Products;
