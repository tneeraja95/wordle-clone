import { colors, NO_OF_TRIES, WORD_LENGTH } from "../constants";

export function getInitialMatrix() {
  return Array.from({ length: NO_OF_TRIES }, () =>
    Array.from({ length: WORD_LENGTH }, () => ({
      letter: "",
      backgroundColor: colors.none,
      borderColor: colors.gray,
    }))
  );
}

export function updateMatrix(prevMatrix, key, [row, col]) {
  const updated = [...prevMatrix];
  updated[row] = [...updated[row]];
  updated[row][col] = { ...updated[row][col], letter: key };
  return updated;
}
