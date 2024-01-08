import React from "react";
import ImageWithText from "../components/Products/ImageWithText";
import Button from "../components/Buttons/Button";
import ImageWithContainer from "../components/Products/ImageWithContainer";

const Products = () => {
  return (
    <main>
      <h2>Nuestros productos</h2>
      <section id="accesorios">
        <div className="products">
          <ImageWithText
            // imageUrl="/img/cocina1.png"
            title="Griferias para cocinas"
            description="Variedad de modelos importados que aportan durabilidad, comodidad y estética."
            imageClassName="contenedor-img2"
            imgProductClassName="imagen-contenedor2"
            contenedorImageClassName="contenedor2"
            textImgClassName="text-contenedor-producto2"
          />
          <ImageWithText
            // imageUrl="/img/cocina2.png"
            title="Griferías y accesorios"
            description="Fabricada con materiales de calidad que fusionan practicidad y elegancia."
            imageClassName="contenedor-img1"
            imgProductClassName="imagen-contenedor1"
            contenedorImageClassName="contenedor1"
            textImgClassName="text-contenedor-producto1"
          />
          <ImageWithText
            imageUrl="/img/cocina-minimalista1.png"
            title="Bachas artesanales"
            description="Piezas únicas y exclusivas realizadas
            en cerámica de alta calidad."
            imageClassName="contenedor-img2"
            imgProductClassName="imagen-contenedor2"
            contenedorImageClassName="contenedor2"
            textImgClassName="text-contenedor-producto2"
          />
          <div style={{ marginTop: "20px", marginBottom: "60px" }}>
            <Button>Descargar Catalogo</Button>
          </div>

          <ImageWithContainer
            imageUrlTarjeta="/img/mujer-trabajando.png"
            customClass="imagenMujer"
            title="Conocé nuestras novedades"
            text="Mantenete al tanto de las nuevas propuestas"
            showButton={true}
          />
        </div>
      </section>
    </main>
  );
};

export default Products;
