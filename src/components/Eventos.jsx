import React, { useState } from "react";
import Card from "./Card";
import "./Colaboradores.css";
import { eventsCardContent } from "../utils/utils";
import ContactUsButton from "./ContactUsButton";
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
        <ContactUsButton text="Conoce los próximos eventos!" />
      </div>
    </div>
  );
}
