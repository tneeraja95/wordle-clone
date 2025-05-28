import "./WordGame.css";
import { selectWordfromWordList } from "../utilities/wordList";
import { useEffect, useState, useCallback } from "react";
import Keyboard from "./Keyboard";
import WordArray from "./WordArray";
import { initialiseKeyboardArray } from "../utilities/keyboard";
import { processUserGuessSubmission } from "../utilities/userGuess";
import { getInitialMatrix, updateMatrix } from "../utilities/matrix";
import { BACKSPACE, ENTER, WORD_LENGTH } from "../constants";

function WordGame({ setGameOver, resetGame, setStats }) {
  const [popup, setPopup] = useState({ show: false, text: "" });
  const [currentFocus, setCurrentFocus] = useState([0, 0]);
  const [userInputArrayMatrix, setUserInputArrayMatrix] =
    useState(getInitialMatrix);
  const [keyboardArray, setKeyboardArray] = useState(initialiseKeyboardArray);
  const [word, setWord] = useState(selectWordfromWordList);

  // Reset on new game
  useEffect(() => {
    setCurrentFocus([0, 0]);
    setPopup({ show: false, text: "" });
    setUserInputArrayMatrix(getInitialMatrix);
    setKeyboardArray(initialiseKeyboardArray);
    setWord(selectWordfromWordList);
  }, [resetGame]);

  // Handle keyboard events
  useEffect(() => {
    const handleKey = (e) => handleKeyPress(e.key.toUpperCase());
    document.body.addEventListener("keyup", handleKey);
    return () => document.body.removeEventListener("keyup", handleKey);
  }, [currentFocus, userInputArrayMatrix]);

  const handleKeyPress = useCallback(
    (key) => {
      const [row, index] = currentFocus;
      if (key === BACKSPACE) {
        const targetIndex = index > 0 ? index - 1 : 0;
        setUserInputArrayMatrix((prev) =>
          updateMatrix(prev, "", [row, targetIndex])
        );
        setCurrentFocus([row, targetIndex]);
      } else if (key === ENTER) {
        processUserGuessSubmission(
          userInputArrayMatrix[row],
          word.toUpperCase().split(""),
          index,
          setPopup,
          setCurrentFocus,
          row,
          setKeyboardArray,
          setUserInputArrayMatrix,
          setGameOver,
          setStats
        );
      } else if (/^[A-Z]$/.test(key) && index < WORD_LENGTH) {
        setUserInputArrayMatrix((prev) =>
          updateMatrix(prev, key, [row, index])
        );
        setCurrentFocus([row, index + 1]);
      }
    },
    [currentFocus, userInputArrayMatrix, word, setGameOver]
  );

  return (
    <div className="wordGame">
      <div className="mainGame">
        <div className={`popup ${popup.show ? "" : "invisible"}`}>
          {popup.text}
        </div>
        <WordArray userInputArrayMatrix={userInputArrayMatrix} />
        <Keyboard
          keyboardArray={keyboardArray}
          onLetterClick={handleKeyPress}
        />
      </div>
    </div>
  );
}

export default WordGame;
