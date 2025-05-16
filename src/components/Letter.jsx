import React from "react";
import "./Letter.css";

function Letter({ letter, backgroundColor, onLetterClick }) {
  let key = letter;
  let className = "letter";
  if (typeof letter === "object")
    //backspace is a symbol object
    key = "Backspace";

  if (letter === "Enter" || typeof letter === "object")
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
