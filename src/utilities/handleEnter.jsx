import checkWordinWordList from "../utilities/checkWordinWordList";
import checkMatch from "./checkMatch";

const NO_OF_TRIES = 6;

function handleEnter(
  userInputArray,
  letterArray,
  index,
  setPopupText,
  setShowPopup,
  setCurrentFocus,
  refArray,
  rowId,
  setKeyboardArray,
  setUserInputArrayMatrix
) {
  if (index + 1 != userInputArray.length || userInputArray[index] === "") {
    setPopupText("not enough letters");
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    return;
  }

  if (!checkWordinWordList(userInputArray.reduce((prev, curr)=> prev+curr.letter, ""))) {
    setPopupText("Not in wordlist");
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    return;
  }

  let result = checkMatch(userInputArray, letterArray, setKeyboardArray, setUserInputArrayMatrix, rowId);
  if (result === true) {
    setPopupText("Amazing");
    setShowPopup(true);
    refArray.current[index].blur();
  } else if (rowId === NO_OF_TRIES - 1) {
    setPopupText(letterArray.join(""));
    setShowPopup(true);
  } else {
    setCurrentFocus((prev) => prev + 1);
  }
}

export default handleEnter;
