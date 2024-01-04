import React from "react";
import { useNavigate } from "react-router-dom";
import "./ContactUsButton.css";
import useWindowSize from "../Hooks/useWindowSize";

const ContactUsButton = ({text }) => {
  const navigate = useNavigate();
  const windowWidth = useWindowSize();

  return (
    <a className="navigate-button" href="/contacto">
      {windowWidth > 699 ? text : "Conoce más"}
    </a>
  );
};

export default ContactUsButton;
