import React, { useState } from "react";
import "./Card.css";

const Card = ({ id, imageUrl, text, isEvent }) => {

  return (
    <div className={`card`}>
      <div className="card-inner">
        <div className="card-front">
          <img src={imageUrl} alt={`Card ${id}`} />
        </div>
        <div className={` ${isEvent ? "card-back-event" : "card-back"} `}>
          {isEvent ? "" : <p className="card-text">{text}</p>}
        </div>
      </div>
    </div>
  );
};

export default Card;
