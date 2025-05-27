import "./WordGame.css";
import selectWordfromWordList from "../utilities/selectWordfromWordList";
import { useEffect, useState, useCallback } from "react";
import Keyboard from "./Keyboard";
import { initialiseKeyboardArray } from "../utilities/keyboard";
import { handleEnter } from "../utilities/handleEnter";
import getInitialMatrix from "../utilities/matrix";
import { BACKSPACE, ENTER, WORD_LENGTH } from "../constants";

function WordGame({ setGameOver, resetGame }) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [currentFocus, setCurrentFocus] = useState([0, 0]);
  const [userInputArrayMatrix, setUserInputArrayMatrix] =
    useState(getInitialMatrix);
  const [keyboardArray, setKeyboardArray] = useState(initialiseKeyboardArray);
  const [word, setWord] = useState(selectWordfromWordList);

  // Reset on new game
  useEffect(() => {
    setCurrentFocus([0, 0]);
    setShowPopup(false);
    setUserInputArrayMatrix(getInitialMatrix());
    setKeyboardArray(initialiseKeyboardArray());
    setWord(selectWordfromWordList());
  }, [resetGame]);

  // Handle keyboard events
  useEffect(() => {
    const handleKey = (e) => handleKeyPress(e.key.toUpperCase());
    document.body.addEventListener("keyup", handleKey);
    return () => document.body.removeEventListener("keyup", handleKey);
  }, [currentFocus, userInputArrayMatrix]);

  const updateMatrix = useCallback((key, [row, col]) => {
    setUserInputArrayMatrix((prev) => {
      const updated = [...prev];
      updated[row] = [...updated[row]];
      updated[row][col] = { ...updated[row][col], letter: key };
      return updated;
    });
  }, []);

  const handleKeyPress = useCallback(
    (key) => {
      const [row, index] = currentFocus;
      if (key === BACKSPACE) {
        const targetIndex = index > 0 ? index - 1 : 0;
        updateMatrix("", [row, targetIndex]);
        setCurrentFocus([row, targetIndex]);
      } else if (key === ENTER) {
        handleEnter(
          userInputArrayMatrix[row],
          word.toUpperCase().split(""),
          index,
          setPopupText,
          setShowPopup,
          setCurrentFocus,
          row,
          setKeyboardArray,
          setUserInputArrayMatrix,
          setGameOver
        );
      } else if (/^[A-Z]$/.test(key) && index < WORD_LENGTH) {
        updateMatrix(key, [row, index]);
        setCurrentFocus([row, index + 1]);
      }
    },
    [currentFocus, userInputArrayMatrix, word, updateMatrix, setGameOver]
  );

  const renderGameGrid = () =>
    userInputArrayMatrix.map((row, rowIndex) => (
      <div key={rowIndex} className="word">
        {row.map((tile, tileIndex) => (
          <div
            key={tileIndex}
            className="tile"
            style={{
              background: tile.backgroundColor,
              borderColor: tile.borderColor,
            }}
          >
            {tile.letter}
          </div>
        ))}
      </div>
    ));

  return (
    <div className="wordGame">
      <div className="mainGame">
        <div className={`popup ${showPopup ? "" : "invisible"}`}>
          {popupText}
        </div>
        <div className="gameArray">{renderGameGrid()}</div>
        <Keyboard
          keyboardArray={keyboardArray}
          onLetterClick={handleKeyPress}
        />
      </div>
    </div>
  );
}

export default WordGame;
