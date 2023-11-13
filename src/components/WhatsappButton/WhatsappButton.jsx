import React from "react";
import "./WhatsappButton.css";
import { Link } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";

const WhatsappButton = () => {
  return (
    <Link to={"tel:+541123864313"} id="whatsapp">
      <BsWhatsapp />
    </Link>
  );
};

export default WhatsappButton;
