import React from "react";
import Letter from "./Letter";
import "./Keyboard.css";
import BackspaceIcon from '@mui/icons-material/Backspace';

function Keyboard({ keyboardArray, onLetterClick }) {
  return (
    <div className="keyboard">
      <div className="qwerty">
        <Letter letter={"Q"} bgColor={keyboardArray["Q"]} onLetterClick={onLetterClick} />
        <Letter letter={"W"} bgColor={keyboardArray["W"]} onLetterClick={onLetterClick} />
        <Letter letter={"E"} bgColor={keyboardArray["E"]} onLetterClick={onLetterClick} />
        <Letter letter={"R"} bgColor={keyboardArray["R"]} onLetterClick={onLetterClick} />
        <Letter letter={"T"} bgColor={keyboardArray["T"]} onLetterClick={onLetterClick} />
        <Letter letter={"Y"} bgColor={keyboardArray["Y"]} onLetterClick={onLetterClick} />
        <Letter letter={"U"} bgColor={keyboardArray["U"]} onLetterClick={onLetterClick} />
        <Letter letter={"I"} bgColor={keyboardArray["I"]} onLetterClick={onLetterClick} />
        <Letter letter={"O"} bgColor={keyboardArray["O"]} onLetterClick={onLetterClick} />
        <Letter letter={"P"} bgColor={keyboardArray["P"]} onLetterClick={onLetterClick} />
      </div>
      <div className="qwerty">
        <Letter letter={"A"} bgColor={keyboardArray["A"]} onLetterClick={onLetterClick} />
        <Letter letter={"S"} bgColor={keyboardArray["S"]} onLetterClick={onLetterClick} />
        <Letter letter={"D"} bgColor={keyboardArray["D"]} onLetterClick={onLetterClick} />
        <Letter letter={"F"} bgColor={keyboardArray["F"]} onLetterClick={onLetterClick} />
        <Letter letter={"G"} bgColor={keyboardArray["G"]} onLetterClick={onLetterClick} />
        <Letter letter={"H"} bgColor={keyboardArray["H"]} onLetterClick={onLetterClick} />
        <Letter letter={"J"} bgColor={keyboardArray["J"]} onLetterClick={onLetterClick} />
        <Letter letter={"K"} bgColor={keyboardArray["K"]} onLetterClick={onLetterClick} />
        <Letter letter={"L"} bgColor={keyboardArray["L"]} onLetterClick={onLetterClick} />
      </div>
      <div className="qwerty">
        <Letter letter={"Enter"} bgColor="grey" width="70" onLetterClick={onLetterClick} />
        <Letter letter={"Z"} bgColor={keyboardArray["Z"]} onLetterClick={onLetterClick} />
        <Letter letter={"X"} bgColor={keyboardArray["X"]} onLetterClick={onLetterClick} />
        <Letter letter={"C"} bgColor={keyboardArray["C"]} onLetterClick={onLetterClick} />
        <Letter letter={"V"} bgColor={keyboardArray["V"]} onLetterClick={onLetterClick} />
        <Letter letter={"B"} bgColor={keyboardArray["B"]} onLetterClick={onLetterClick} />
        <Letter letter={"N"} bgColor={keyboardArray["N"]} onLetterClick={onLetterClick} />
        <Letter letter={"M"} bgColor={keyboardArray["M"]} onLetterClick={onLetterClick} />
        <Letter letter={<BackspaceIcon/>} bgColor="grey" width="70" onLetterClick={onLetterClick} />
      </div>
    </div>
  );
}

export default Keyboard;
