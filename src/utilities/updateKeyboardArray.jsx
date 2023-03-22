function updateKeyboardArray(setKeyboardArray, userInputArray) {
  setKeyboardArray((prev) => {
    userInputArray.forEach((input) => {
      if (
        prev[input.letter] === "rgb(58, 58, 60)" ||
        prev[input.letter] === "grey"
      ) {
        prev[input.letter] = input.color;
      } else if (
        prev[input.letter] === "#B59F3B" &&
        input.color != "rgb(58, 58, 60)"
      ) {
        prev[input.letter] = input.color;
      }
    });
    return prev;
  });
}

export default updateKeyboardArray;
