import colors from "../constants";

function updateKeyboardArray(setKeyboardArray, userInputArray) {
  setKeyboardArray((prev) => {
    userInputArray.forEach((input) => {
      if (prev[input.letter] === colors.defaultGrey) {
        prev[input.letter] = input.color;
      } else if (
        prev[input.letter] === colors.yellow &&
        input.color === colors.green
      ) {
        prev[input.letter] = input.color;
      }
    });
    return prev;
  });
}

export default updateKeyboardArray;
