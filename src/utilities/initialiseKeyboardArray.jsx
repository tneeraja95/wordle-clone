import colors from "../constants";

function initialiseKeyboardArray() {
  const keys = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

  return keys.reduce((keyboard, key) => {
    keyboard[key] = colors.defaultGrey;
    return keyboard;
  }, {});
}

export default initialiseKeyboardArray;
