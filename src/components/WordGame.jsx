import "./WordGame.css";
import selectWordfromWordList from "../utilities/selectWordfromWordList";
import { useEffect, useMemo, useState, useCallback } from "react";
import Keyboard from "./Keyboard";
import initialiseKeyboardArray from "../utilities/initialiseKeyboardArray";
import handleEnter from "../utilities/handleEnter";
import colors from "../constants";

const NO_OF_TRIES = 6;
const WORD_LENGTH = 5;

function WordGame({ setGameOver, resetGame }) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [currentFocus, setCurrentFocus] = useState([0, 0]);

  const getInitialMatrix = () =>
    Array.from({ length: NO_OF_TRIES }, () =>
      Array.from({ length: WORD_LENGTH }, () => ({
        letter: "",
        color: colors.none,
      }))
    );

  const [userInputArrayMatrix, setUserInputArrayMatrix] =
    useState(getInitialMatrix);
  const [keyboardArray, setKeyboardArray] = useState(initialiseKeyboardArray());

  const word = useMemo(() => selectWordfromWordList(), [resetGame]);

  // Reset on new game
  useEffect(() => {
    setCurrentFocus([0, 0]);
    setShowPopup(false);
    setUserInputArrayMatrix(getInitialMatrix());
    setKeyboardArray(initialiseKeyboardArray());
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

      if (key === "BACKSPACE") {
        const targetIndex = index > 0 ? index - 1 : 0;
        updateMatrix("", [row, targetIndex]);
        setCurrentFocus([row, targetIndex]);
      } else if (key === "ENTER") {
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
            style={{ background: tile.color, borderColor: tile.color }}
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
