import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import { useFlip } from './hooks'

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  // const [isFacingUp, setIsFacingUp] = useState(true);
  const [value, toggle] = useFlip(true);

  return (
    <img
      src={value ? front : back}
      alt="playing card"
      onClick={toggle}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
