import React from "react";

// Importo componente boton
import Button from "../Buttons/Button.jsx";

//Import css component
import "./ImageWitchContainer.css";

const ImageWithContainer = ({
  title,
  text,
  imageUrlTarjeta,
  showButton,
  customClass,
}) => {
  return (
    <div>
      <div className="contenedor-tarjeta-principal">
        <div className="container-tarjeta">
          <div className="tarjeta-sobresalida">
            <div className={`contenedor-image ${customClass}`}>
              <img className="img-tarjeta" src={imageUrlTarjeta} alt="" />
            </div>
            <div className="tarjeta-contenido-texto">
              <h3>{title}</h3>
              <p>{text}</p>
              {showButton && <Button>Ver novedades</Button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageWithContainer;
