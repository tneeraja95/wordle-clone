import React from "react";
import "./Letter.css";
import { BACKSPACE, ENTER } from "../constants";

function Letter({ letter, backgroundColor, onLetterClick }) {
  let key = letter;
  let className = "letter";
  if (typeof letter === "object")
    //backspace is a symbol object
    key = BACKSPACE;

  if (letter === ENTER || typeof letter === "object")
    className = "letter special";
  return (
    <div
      className={className}
      style={{ backgroundColor: backgroundColor }}
      onClick={() => {
        onLetterClick(key);
      }}
    >
      {letter}
    </div>
  );
}

export default Letter;
