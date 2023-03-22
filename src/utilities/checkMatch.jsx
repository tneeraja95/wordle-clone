import updateKeyboardArray from "./updateKeyboardArray";

function checkMatch(
  userInputArray,
  letterArray,
  setKeyboardArray,
  setUserInputArrayMatrix,
  rowId
) {
  let letterBgArray = new Array(5).fill("none");
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
      letterBgArray[i] = "green";
      alphabetCount[userInputArray[i]]--;
    } else {
      letterBgArray[i] = "rgb(58, 58, 60)";
    }
  }
  userInputArray.forEach((inputLetter, index) => {
    if (
      letterBgArray[index] !== "green" &&
      alphabetCount[inputLetter.letter] &&
      alphabetCount[inputLetter.letter] > 0
    ) {
      alphabetCount[inputLetter.letter]--;
      letterBgArray[index] = "#B59F3B";
    }
  });
  
  setUserInputArrayMatrix((prev) => {
    letterBgArray.forEach((element, index) => {
      prev[rowId][index].color = element;
    });
    return prev;
  });
  
  updateKeyboardArray(setKeyboardArray, userInputArray);

  return letterBgArray.reduce((prev, curr) => prev && curr === "green", true);
}

export default checkMatch;
