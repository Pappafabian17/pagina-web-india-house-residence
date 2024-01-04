// Contacto.js

import React, { useState } from "react";
import "./Contacto.css";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    motivo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
  };

  return (
    <iframe
      id="contactPageIframe"
      title="Inline Frame for Contact us."
      width="100%"
      height="1200px"
      scrolling="no"
      src="https://us21.list-manage.com/contact-form?u=759053ab0594a2424f12ec2f1&form_id=cf8693072710dc72806759347bec5f55">
    </iframe>
  );
};

export default Contacto;
