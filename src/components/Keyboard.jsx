import React from "react";
import Letter from "./Letter";
import "./Keyboard.css";
import BackspaceIcon from "@mui/icons-material/Backspace";
import colors from "../constants";
import { BACKSPACE, ENTER } from "../constants";

const rows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  [ENTER, "Z", "X", "C", "V", "B", "N", "M", BACKSPACE],
];

function Keyboard({ keyboardArray, onLetterClick }) {
  return (
    <div className="keyboard">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="qwerty">
          {row.map((letter) => (
            <Letter
              key={letter}
              letter={letter === BACKSPACE ? <BackspaceIcon /> : letter}
              backgroundColor={
                letter === ENTER || letter === BACKSPACE
                  ? colors.defaultGrey
                  : keyboardArray[letter]
              }
              onLetterClick={onLetterClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
