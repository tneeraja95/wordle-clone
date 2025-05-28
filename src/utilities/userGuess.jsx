import { updateKeyboardArray } from "./keyboard";
import { colors } from "../constants";
import { checkWordinWordList } from "./wordList";
import { NO_OF_TRIES, WORD_LENGTH } from "../constants";

function evaluateUserGuessAndUpdate(
  userInputArray,
  letterArray,
  setKeyboardArray,
  setUserInputArrayMatrix,
  rowId
) {
  let letterBgArray = new Array(5).fill(colors.none);
  let alphabetCount = {};
  for (let letter of letterArray) {
    if (alphabetCount[letter]) {
      alphabetCount[letter]++;
    } else {
      alphabetCount[letter] = 1;
    }
  }

  for (let i = 0; i < userInputArray.length; i++) {
    if (userInputArray[i].letter === letterArray[i]) {
      letterBgArray[i] = colors.green;
      alphabetCount[userInputArray[i].letter]--;
    } else {
      letterBgArray[i] = colors.gray;
    }
  }

  userInputArray.forEach((inputLetter, index) => {
    if (
      letterBgArray[index] !== colors.green &&
      alphabetCount[inputLetter.letter] &&
      alphabetCount[inputLetter.letter] > 0
    ) {
      alphabetCount[inputLetter.letter]--;
      letterBgArray[index] = colors.yellow;
    }
  });

  setUserInputArrayMatrix((prev) => {
    let newArray = [...prev];
    letterBgArray.forEach((element, index) => {
      newArray[rowId][index].backgroundColor = element;
      newArray[rowId][index].borderColor = element;
    });
    return newArray;
  });

  updateKeyboardArray(setKeyboardArray, userInputArray);

  return letterBgArray.reduce(
    (prev, curr) => prev && curr === colors.green,
    true
  );
}

export function processUserGuessSubmission(
  userInputArray,
  letterArray,
  index,
  setPopup,
  setCurrentFocus,
  noOfGuesses,
  setKeyboardArray,
  setUserInputArrayMatrix,
  setGameOver,
  setStats
) {
  function updateStats(noOfGuesses, result) {
    setStats((prevStats) => {
      const newStats = { ...prevStats };
      newStats.noOfGames += 1;
      newStats.AvgGuesses =
        (newStats.AvgGuesses * prevStats.noOfGames + noOfGuesses) /
        (prevStats.noOfGames + 1);
      newStats.gamesWon += result ? 1 : 0;
      newStats.gamesLost += result ? 0 : 1;
      return newStats;
    });
  }

  if (index < WORD_LENGTH) {
    updatePopupText(setPopup, "not enough letters");
    return;
  } else if (
    !checkWordinWordList(
      userInputArray.reduce((prev, curr) => prev + curr.letter, "")
    )
  ) {
    updatePopupText(setPopup, "Not in wordlist");
    return;
  }

  let result = evaluateUserGuessAndUpdate(
    userInputArray,
    letterArray,
    setKeyboardArray,
    setUserInputArrayMatrix,
    noOfGuesses
  );
  if (result === true) {
    updatePopupText(setPopup, "Amazing", false);
    setTimeout(() => setGameOver(true), 1500);
    updateStats(noOfGuesses + 1, true);
  } else if (noOfGuesses === NO_OF_TRIES - 1) {
    updatePopupText(setPopup, letterArray.join(""), false);
    setTimeout(() => setGameOver(true), 1500);
    updateStats(noOfGuesses + 1, false);
  } else {
    setCurrentFocus(() => [noOfGuesses + 1, 0]);
  }
}

function updatePopupText(setPopup, text, timeout = true) {
  setPopup({ text: text, show: true });
  if (timeout) setTimeout(() => setPopup({ show: false, text: "" }), 1000);
}
