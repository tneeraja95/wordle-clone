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
  setUserInputArrayMatrix
) {
  if (index < WORD_LENGTH ){
    setPopupText("not enough letters");
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    return;
  }

  else if (
    !checkWordinWordList(
      userInputArray.reduce((prev, curr) => prev + curr.letter, "")
    )
  ) {
    setPopupText("Not in wordlist");
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
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
    setPopupText("Amazing");
    setShowPopup(true);
  } else if (rowId === NO_OF_TRIES - 1) {
    setPopupText(letterArray.join(""));
    setShowPopup(true);
  } else {
    setCurrentFocus(() => [rowId+1, 0]);
  }
}

export default handleEnter;
