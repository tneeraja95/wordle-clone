import data from './../data/5-letter-words.json'

function selectWord() {
    let index = Math.floor(Math.random()* data.length);
     return data[index];
}

export default selectWord;
