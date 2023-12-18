import React from "react";
import "./Colaboradores.css"; // Asegúrate de tener un archivo CSS para estilizar tus cards

const Colaboradores = () => {
  const cards = [
    {
      id: 1,
      imageUrl: "../../assets/img/concept-mooving.png",
      text: "Texto 1",
    },
    /* {
      id: 2,
      imageUrl: "../public/assets/img/concept-mooving.png",
      text: "Texto 2",
    },
    {
      id: 3,
      imageUrl: "../public/assets/img/concept-mooving.png",
      text: "Texto 3",
    },
    {
      id: 4,
      imageUrl: "../public/assets/img/concept-mooving.png",
      text: "Texto 4",
    },
    {
      id: 5,
      imageUrl: "../public/assets/img/concept-mooving.png",
      text: "Texto 5",
    },
    {
      id: 6,
      imageUrl: "../public/assets/img/concept-mooving.png",
      text: "Texto 6",
    },
    {
      id: 7,
      imageUrl: "../public/assets/img/concept-mooving.png",
      text: "Texto 7",
    },
    {
      id: 8,
      imageUrl: "../public/assets/img/concept-mooving.png",
      text: "Texto 8",
    }, */
  ];

  return (
    <div className="grid-container">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <div className="card-inner">
            <div className="card-front">
              <img
                src={card.imageUrl}
                alt={`Card ${card.id}`}
                className="card-image"
              />
            </div>
            <div className="card-back">
              <div className="card-text">{card.text}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Colaboradores;
