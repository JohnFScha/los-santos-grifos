import React from "react";
import Button from "../components/Buttons/Button";
import ImageWithContainer from "../components/Products/ImageWithContainer";

const Products = () => {
  return (
    <main className="animate__animated animate__fadeInDown  animate__fast">
      <h2>Nuestros productos</h2>
      <section id="accesorios">
        <article className="products">
          <div>
            <div className="text">
              <h2>Griferías para baño</h2>
              <p>
                Fabricada con materiales de calidad <br /> que fusionan practicidad y
                elegancia.
              </p>
            </div>
          </div>
          <div>
            <div className="text">
              <h2>Griferías para cocina</h2>
              <p>
                Variedad de modelos importados que <br /> aportan durabilidad,
                comodidad y estética.
              </p>
            </div>
          </div>
          <div>
            <div className="text">
              <h2>Bachas artesanales</h2>
              <p>
                Piezas únicas y exclusivas realizadas <br /> en cerámica de alta
                calidad.
              </p>
            </div>
          </div>
        </article>

        <div style={{ marginTop: "20px", marginBottom: "60px" }}>
          <Button>Descargar Catalogo</Button>
        </div>

        <ImageWithContainer
          imageUrlTarjeta="./src/assets/mujer-trabajando.png"
          customClass="imagenMujer"
          title="Conocé nuestras novedades"
          text="Mantenete al tanto de las nuevas propuestas"
          showButton={true}
        />
      </section>
    </main>
  );
};

export default Products;
