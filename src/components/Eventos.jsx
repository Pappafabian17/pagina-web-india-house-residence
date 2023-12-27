import React, { useState } from "react";
import Card from "./Card";
import "./colaboradores.css";
import { eventsCardContent } from "../utils/utils";
import RedirectButton from "./RedirectButton";
export default function Eventos() {
  return (
    <div className="colaboradores-container">
      <h2 className="musica-titulo ">Eventos</h2>
      <div className="cards-container">
        {eventsCardContent.map((card) => (
          <Card key={card.id} {...card} isEvent={true} />
        ))}
      </div>

      <div className="colaboremos-container">
        <h3>Conocé los próximos eventos</h3>
        <RedirectButton to="/about" text="Conoce los próximos eventos!" />
      </div>
    </div>
  );
}
