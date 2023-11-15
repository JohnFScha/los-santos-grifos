import React from "react";
import "./CardObjetivo.css";

const CardObjetivo = ({ urlIconCard, titleCard, textCard }) => {
  return (
    <div>
      <div className="Card">
        <div className="iconCard">
          <img className="img-tarjeta-circle" src={urlIconCard} alt="" />
        </div>
        <div className="textCard">
          <h4>{titleCard}</h4>
          <p>{textCard}</p>
        </div>
      </div>
    </div>
  );
};

export default CardObjetivo;
