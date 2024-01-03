import React, { useState } from "react";
import Card from "./Card";
import "./colaboradores.css";
import { cardsContent } from "../utils/utils";
import ContactUsButton from "./ContactUsButton";

const Colaboradores = () => {
  return (
    <div className="colaboradores-container">
      <h2 className="musica-titulo ">Algunos de nuestros Colaboradores</h2>
      <div className="cards-container">
        {cardsContent.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>

      <div className="colaboremos-container">
        <h3>Conocenos más y colaborá con nosotros</h3>
        <ContactUsButton text="Colabora con nosotros!" />
      </div>
    </div>
  );
};

export default Colaboradores;
