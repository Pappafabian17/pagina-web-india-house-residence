import React from "react";
import { useNavigate } from "react-router-dom";

const RedirectButton = ({ to, text }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default RedirectButton;
