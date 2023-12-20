import React, { useState } from "react";
import Card from "./Card";
import "./colaboradores.css";
import { cardsContent } from "../utils/utils";

const Colaboradores = () => {
  console.log(cardsContent);
  return (
    <div className="colaboradores-container">
      <h2 className="musica-titulo ">somos los colaboradores!!!</h2>
      <div className="cards-container">
        {cardsContent.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Colaboradores;
