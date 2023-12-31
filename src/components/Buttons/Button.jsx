// import React from "react";
// import "./Button.css";
// const Button = ({ children }) => {
//   return (
//     <div className="boton">
//       <button className="botonDescargar">{children}</button>
//     </div>
//   );
// };

// export default Button;
import React from "react";
import "./Button.css";
const Button = ({children}) => {
  return (
    <div className="boton">
      <button className="botonDescargar">{children}</button>
    </div>
  );
};

export default Button;
