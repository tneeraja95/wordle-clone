import data from '../data/5-letter-words.json'

function selectWordfromWordList() {
    let index = Math.floor(Math.random()* data.length);
     return data[index];
}

export default selectWordfromWordList;
