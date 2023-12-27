import React from "react";
import { useNavigate } from "react-router-dom";
import "./ContactUsButton.css";
import useWindowSize from "../Hooks/useWindowSize";

const ContactUsButton = ({text }) => {
  const navigate = useNavigate();
  const windowWidth = useWindowSize();

  return (
    <a className="navigate-button" href="https://us21.list-manage.com/contact-form?u=8f6c801822838c236cbb87dfa&form_id=1e07e3ab04bd06831bc5764a1a4db716">
      {windowWidth > 699 ? text : "Conoce más"}
    </a>
  );
};

export default ContactUsButton;
