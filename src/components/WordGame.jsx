import "./WordGame.css";
import selectWordfromWordList from ".././utilities/selectWordfromWordList";
import { useEffect, useMemo, useState } from "react";
import Keyboard from "./Keyboard";
import initialiseKeyboardArray from ".././utilities/initialiseKeyboardArray";
import handleEnter from "../utilities/handleEnter";

const NO_OF_TRIES = 6;
const WORD_LENGTH = 5;

function WordGame() {
  let [currentFocus, setCurrentFocus] = useState([0, 0]);
  let [showPopup, setShowPopup] = useState(false);
  let [popupText, setPopupText] = useState("Not enough Letters");
  let [userInputArrayMatrix, setUserInputArrayMatrix] = useState(
    Array.from({ length: NO_OF_TRIES }, () =>
      Array.from({ length: WORD_LENGTH }, () => ({ letter: "", color: "none" }))
    )
  );
  let [keyboardArray, setKeyboardArray] = useState(initialiseKeyboardArray());
  let word = useMemo(() => {
    return selectWordfromWordList();
  }, []);

  console.log(word);
  useEffect(() => {
    let keyPressEventFunction = (e) => {
      handleKeyPress(e.key);
    };

    document.body.addEventListener("keyup", keyPressEventFunction);
    return () =>
      document.body.removeEventListener("keyup", keyPressEventFunction);
  }, [currentFocus]);

  let gameArray = userInputArrayMatrix.map((wordRow, rowId) => {
    let row = wordRow.map((alpha, index) => {
      return (
        <div key={index} style={{ background: alpha.color }}>
          {alpha.letter}
        </div>
      );
    });
    return (
      <div key={rowId} className="word">
        {row}
      </div>
    );
  });

  function updateUserInputArrayMatrix(key, currentFocus) {
    const [rowId, index] = currentFocus;

    setUserInputArrayMatrix((prev) => {
      let newArray = [...prev];
      newArray[rowId][index].letter = key;
      return newArray;
    });
  }

  function handleKeyPress(key) {
    let [rowId, index] = [...currentFocus];
    key = key.toUpperCase();
    if (key === "BACKSPACE") {
      if (index > 0) {
        updateUserInputArrayMatrix("", [rowId, index - 1]);
        setCurrentFocus(() => {
          return [rowId, index - 1];
        });
      } else if (index === 0) {
        updateUserInputArrayMatrix("", [rowId, index]);
      }
    } else if (key === "ENTER") {
      handleEnter(
        userInputArrayMatrix[rowId],
        word.toUpperCase().split(""),
        index,
        setPopupText,
        setShowPopup,
        setCurrentFocus,
        rowId,
        setKeyboardArray,
        setUserInputArrayMatrix
      );
    } else if (
      key.length === 1 &&
      key >= "A" &&
      key <= "Z" &&
      index < WORD_LENGTH
    ) {
      updateUserInputArrayMatrix(key, [rowId, index]);
      setCurrentFocus(() => {
        return [rowId, index + 1];
      });
    }
  }

  return (
    <div className="wordGame">
      <div className={showPopup ? "popup" : "popup invisible"}>{popupText}</div>
      <div>{gameArray}</div>
      <Keyboard keyboardArray={keyboardArray} onLetterClick={handleKeyPress} />
    </div>
  );
}

export default WordGame;
