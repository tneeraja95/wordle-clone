import data from '../data/5-letter-words.json'

function checkWordinWordList(userInput) {
    console.log(userInput)
  return (data.includes(userInput.toLowerCase()));
}

export default checkWordinWordList
