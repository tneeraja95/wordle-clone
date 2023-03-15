function checkMatch(userInputArray, letterArray, setMatchResult) {
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
    if (userInputArray[i] === letterArray[i]) {
      letterBgArray[i] = "green";
      alphabetCount[userInputArray[i]]--;
    } else {
      letterBgArray[i] = "grey";
    }
  }
  userInputArray.forEach((inputLetter, index) => {
    if (
      letterBgArray[index] !== "green" &&
      alphabetCount[inputLetter] &&
      alphabetCount[inputLetter] > 0
    ) {
      alphabetCount[inputLetter]--;
      letterBgArray[index] = "#B59F3B";
    }
  });
  setMatchResult(letterBgArray);
  return letterBgArray.reduce((prev, curr) => prev && curr === "green", true);
}

export default checkMatch;
