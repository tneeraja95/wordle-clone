import { colors } from "../constants";

export function initialiseKeyboardArray() {
  const keys = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

  return keys.reduce((keyboard, key) => {
    keyboard[key] = colors.defaultGrey;
    return keyboard;
  }, {});
}

export function updateKeyboardArray(setKeyboardArray, userInputArray) {
  setKeyboardArray((prev) => {
    userInputArray.forEach((input) => {
      if (prev[input.letter] === colors.defaultGrey) {
        prev[input.letter] = input.backgroundColor;
      } else if (
        prev[input.letter] === colors.yellow &&
        input.backgroundColor === colors.green
      ) {
        prev[input.letter] = input.backgroundColor;
      }
    });
    return prev;
  });
}
