import React from "react";
import "./CardObjetivo.css";

const CardObjetivo = ({ urlIconCard, titleCard, textCard, listItems }) => {
  return (
    <div className="centerCard">
      <div className="Card">
        <div className="iconCard">
          <img className="img-tarjeta-circle" src={urlIconCard} alt="" />
        </div>
        <div className="textCard">
          <h4>{titleCard}</h4>
          <p>{textCard}</p>
          {listItems && listItems.length > 0 && (
            <ul>
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardObjetivo;
