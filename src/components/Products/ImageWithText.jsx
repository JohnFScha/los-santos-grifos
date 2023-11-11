import React from "react";
import "./ImageWithText.css";

const ImageWithText = ({
  imageUrl,
  title,
  description,
  contenedorImageClassName,
  imageClassName,
  imgProductClassName,
  textImgClassName,
}) => {
  return (
    <div className={`contenedor ${contenedorImageClassName}`}>
      <div className={`image ${imageClassName}`}>
        <img
          className={`${imgProductClassName}`}
          src={imageUrl}
          alt="Descripción de la imagen"
        />
      </div>
      <div className={`${textImgClassName}`}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImageWithText;
