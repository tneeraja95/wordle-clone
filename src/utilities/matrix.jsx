import { colors, NO_OF_TRIES, WORD_LENGTH } from "../constants";

function getInitialMatrix() {
  return Array.from({ length: NO_OF_TRIES }, () =>
    Array.from({ length: WORD_LENGTH }, () => ({
      letter: "",
      backgroundColor: colors.none,
      borderColor: colors.gray,
    }))
  );
}

export default getInitialMatrix;
