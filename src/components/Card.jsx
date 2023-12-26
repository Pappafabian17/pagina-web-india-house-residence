import React, { useState } from "react";
import "./Card.css";

const Card = ({ id, imageUrl, text }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
      <div className="card-inner">
        <div className="card-front">
          <img src={imageUrl} alt={`Card ${id}`} />
        </div>
        <div className="card-back">
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
