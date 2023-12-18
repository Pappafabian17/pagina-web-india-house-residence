import React from "react";
import { useNavigate } from "react-router-dom";
import "./RedirectButton.css";
import useWindowSize from "../Hooks/useWindowSize";

const RedirectButton = ({ to, text }) => {
  const navigate = useNavigate();
  const windowWidth = useWindowSize();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button className="navigate-button" onClick={handleClick}>
      {windowWidth > 699 ? text : "Conoce más"}
    </button>
  );
};

export default RedirectButton;
