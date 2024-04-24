import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button = ({ children, isContact }) => {
  return (
    <div className="boton">
      {!isContact ? (
        <Link
          className="botonDescargar"
          to={
            "https://www.dropbox.com/scl/fo/j3bwmqiwc4k7kc4egdy8u/AKXNCtX-VkBKTpG5ofRX51o?rlkey=g1fzjkb91uu6z1wt2yco3lkp2&e=1&st=6yrjydnt&dl=0"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </Link>
      ) : (
        <Link
          to={"https://api.whatsapp.com/send/?phone=1138889199&text&type=phone_number&app_absent=0"}
          target="_blank"
          rel="noopener noreferrer"
          className="contactBtn"
        >
          {children}
        </Link>
      )}
    </div>
  );
};

export default Button;
