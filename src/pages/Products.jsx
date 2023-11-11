import React from "react";
import ImageWithText from "../components/Products/ImageWithText";
import "../components/Products/ImageWithText.css";

const Products = () => {
  return (
    <div>
      <section id="accesorios">
        <div>
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
        </div>
      </section>
    </div>
  );
};

export default Products;
