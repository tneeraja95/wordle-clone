import checkWordinWordList from "../utilities/checkWordinWordList";
import checkMatch from "./checkMatch";
import { NO_OF_TRIES, WORD_LENGTH } from "../constants";

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
  function updatePopupText(text, timeout = true) {
    setPopupText(text);
    setShowPopup(true);
    if (timeout) setTimeout(() => setShowPopup(false), 1000);
  }

  function updateLocalStorage(rowId, won, lost) {
    let noOfGames = parseInt(localStorage.getItem("noOfGames"));
    let AvgGuesses = parseInt(localStorage.getItem("AvgGuesses"));
    let gamesWon = parseInt(localStorage.getItem("gamesWon"));
    let gamesLost = parseInt(localStorage.getItem("gamesLost"));

    if (
      isNaN(noOfGames) ||
      isNaN(AvgGuesses) ||
      isNaN(gamesLost) ||
      isNaN(gamesWon)
    ) {
      localStorage.setItem("noOfGames", 1);
      localStorage.setItem("AvgGuesses", rowId);
      localStorage.setItem("gamesWon", won);
      localStorage.setItem("gamesLost", lost);
    } else {
      localStorage.setItem("noOfGames", noOfGames + 1);
      localStorage.setItem(
        "AvgGuesses",
        (AvgGuesses * noOfGames + rowId) / (noOfGames + 1)
      );
      localStorage.setItem("gamesWon", gamesWon + won);
      localStorage.setItem("gamesLost", gamesLost + lost);
    }
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
    updatePopupText("Amazing", false);
    setTimeout(() => setGameOver(true), 1000);
    updateLocalStorage(rowId + 1, 1, 0);
  } else if (rowId === NO_OF_TRIES - 1) {
    updatePopupText(letterArray.join(""), false);
    setTimeout(() => setGameOver(true), 1000);
    updateLocalStorage(rowId + 1, 0, 1);
  } else {
    setCurrentFocus(() => [rowId + 1, 0]);
  }
}

export default handleEnter;
