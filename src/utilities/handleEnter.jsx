import checkWordinWordList from "../utilities/checkWordinWordList";
import checkMatch from "./checkMatch";

const NO_OF_TRIES = 6;
const WORD_LENGTH = 5;

function handleEnter(
  userInputArray,
  letterArray,
  index,
  setPopupText,
  setShowPopup,
  setCurrentFocus,
  rowId,
  setKeyboardArray,
  setUserInputArrayMatrix,
  setGameOver
) {
  function updatePopupText(text) {
    setPopupText(text);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1000);
  }

  if (index < WORD_LENGTH) {
    updatePopupText("not enough letters");

    return;
  } else if (
    !checkWordinWordList(
      userInputArray.reduce((prev, curr) => prev + curr.letter, "")
    )
  ) {
    updatePopupText("Not in wordlist");
    return;
  }

  let result = checkMatch(
    userInputArray,
    letterArray,
    setKeyboardArray,
    setUserInputArrayMatrix,
    rowId
  );
  if (result === true) {
    updatePopupText("Amazing");
    setTimeout(() => setGameOver(true), 1000);
  } else if (rowId === NO_OF_TRIES - 1) {
    updatePopupText(letterArray.join(""));
    setShowPopup(true);
    setTimeout(() => setGameOver(true), 1000);
  } else {
    setCurrentFocus(() => [rowId + 1, 0]);
  }
}

export default handleEnter;
