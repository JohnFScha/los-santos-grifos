import React from "react";

const CardObjetivo = ({ urlIconCard, titleCard, textCard }) => {
  return (
    <div>
      <div className="Card">
        <div className="iconCard">
          <img className="img-tarjeta" src={urlIconCard} alt="" />
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
