import React from "react";
// Importo componente boton
import Boton from "../Buttons/Button.jsx";

//Import css component
import "./ImageAbout.css";
const ImageAbout = ({
  title,
  text,
  imageUrlTarjeta,
  showButton,
  customClass,
}) => {
  return (
    <div>
      <div>
        <div className="contenedor-tarjeta-principal2">
          <div className="container-tarjeta2">
            <div className="tarjeta-sobresalida2">
              <div className={`contenedor-image2 ${customClass}`}>
                <img className="img-tarjeta2" src={imageUrlTarjeta} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageAbout;
