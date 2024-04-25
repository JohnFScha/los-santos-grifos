import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button = ({ children }) => {
  return (
    <div className="boton">
      <Link
        to={
          "https://www.dropbox.com/scl/fi/sj2awjwjrnw88wuvrnh3b/Novedades.pdf?rlkey=wx7j89jipc5wfedl9mtur0djv&st=3onnmq9j&dl=0"
        }
        target="_blank"
        rel="noopener noreferrer"
        className="botonDescargar"
      >
        {children}
      </Link>
    </div>
  );
};

export default Button;
