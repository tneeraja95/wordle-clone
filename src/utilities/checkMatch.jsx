import updateKeyboardArray from "./updateKeyboardArray";
import colors from "../constants";

function checkMatch(
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
      newArray[rowId][index].color = element;
    });
    return newArray;
  });

  updateKeyboardArray(setKeyboardArray, userInputArray);

  return letterBgArray.reduce(
    (prev, curr) => prev && curr === colors.green,
    true
  );
}

export default checkMatch;
