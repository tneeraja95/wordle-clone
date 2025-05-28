import data from "../data/5-letter-words.json";

export function selectWordfromWordList() {
  let index = Math.floor(Math.random() * data.length);
  console.log(data[index]);
  return data[index];
}

export function checkWordinWordList(userInput) {
  return data.includes(userInput.toLowerCase());
}
