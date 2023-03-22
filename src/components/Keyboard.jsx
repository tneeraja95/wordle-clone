import React from "react";
import Letter from "./Letter";
import "./Keyboard.css";
import BackspaceIcon from '@mui/icons-material/Backspace';

function Keyboard({ keyboardArray }) {
  return (
    <div className="keyboard">
      <div className="qwerty">
        <Letter letter={"Q"} bgColor={keyboardArray["Q"]} />
        <Letter letter={"W"} bgColor={keyboardArray["W"]} />
        <Letter letter={"E"} bgColor={keyboardArray["E"]} />
        <Letter letter={"R"} bgColor={keyboardArray["R"]} />
        <Letter letter={"T"} bgColor={keyboardArray["T"]} />
        <Letter letter={"Y"} bgColor={keyboardArray["Y"]} />
        <Letter letter={"U"} bgColor={keyboardArray["U"]} />
        <Letter letter={"I"} bgColor={keyboardArray["I"]} />
        <Letter letter={"O"} bgColor={keyboardArray["O"]} />
        <Letter letter={"P"} bgColor={keyboardArray["P"]} />
      </div>
      <div className="qwerty">
        <Letter letter={"A"} bgColor={keyboardArray["A"]} />
        <Letter letter={"S"} bgColor={keyboardArray["S"]} />
        <Letter letter={"D"} bgColor={keyboardArray["D"]} />
        <Letter letter={"F"} bgColor={keyboardArray["F"]} />
        <Letter letter={"G"} bgColor={keyboardArray["G"]} />
        <Letter letter={"H"} bgColor={keyboardArray["H"]} />
        <Letter letter={"J"} bgColor={keyboardArray["J"]} />
        <Letter letter={"K"} bgColor={keyboardArray["K"]} />
        <Letter letter={"L"} bgColor={keyboardArray["L"]} />
      </div>
      <div className="qwerty">
        <Letter letter={"Enter"} bgColor="grey" width="70" />
        <Letter letter={"Z"} bgColor={keyboardArray["Z"]} />
        <Letter letter={"X"} bgColor={keyboardArray["X"]} />
        <Letter letter={"C"} bgColor={keyboardArray["C"]} />
        <Letter letter={"V"} bgColor={keyboardArray["V"]} />
        <Letter letter={"B"} bgColor={keyboardArray["B"]} />
        <Letter letter={"N"} bgColor={keyboardArray["N"]} />
        <Letter letter={"M"} bgColor={keyboardArray["M"]} />
        <Letter letter={<BackspaceIcon/>} bgColor="grey" width="70" />
      </div>
    </div>
  );
}

export default Keyboard;
