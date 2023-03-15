import {useMemo, useState } from "react";
import "./App.css";
import WordRow from "./components/WordRow";
import Header from "./components/Header";
import selectWordfromWordList from "./utilities/selectWordfromWordList";

const NO_OF_TRIES = 6;

function App() {
  let [currentFocus, setCurrentFocus] = useState(0);  
  let [showPopup, setShowPopup] = useState(false);
  let [popupText, setPopupText] = useState("Not enough Letters");

  let word = useMemo(()=> {
    return selectWordfromWordList();
  }, []);

    console.log(word);

  let wordList = []
  for(let i=0; i<NO_OF_TRIES; i++){
    wordList.push( <WordRow
      classname="word"
      word={word}
      currentFocus={currentFocus}
      setCurrentFocus={setCurrentFocus}
      fid={i}
      setShowPopup={setShowPopup}
      setPopupText={setPopupText}
      key={i}
    />)
  }
  return (
    <div onMouseDown={(e) => e.preventDefault()} className="app">
      <Header />
      <div className="wordGame">
      <div className={showPopup?"popup": "popup invisible"}>{popupText}</div>
       <div>{wordList}</div>
      </div>
    </div>
  );
}

export default App;
