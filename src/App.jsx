import { useState } from "react";
import "./App.css";
import WordGame from "./components/WordGame";
import Header from "./components/Header";

function App() {
  let [currentFocus, setCurrentFocus] = useState(0);  
  let [showPopup, setShowPopup] = useState(false);
  let [popupText, setPopupText] = useState("Not enough Letters");
  let word ="magic";

  let wordList = []
  for(let i=0; i<6; i++){
    wordList.push( <WordGame
      classname="word"
      word={word}
      currentFocus={currentFocus}
      setCurrentFocus={setCurrentFocus}
      fid={i}
      setShowPopup={setShowPopup}
      setPopupText={setPopupText}
    />)
  }

  return (
    <div onMouseDown={(e) => e.preventDefault()} className="app">
      <Header />
      <div className="wordGame">
      <div className={showPopup?"popup": "popup invisible"}>{popupText}</div>
       <div>{wordList}</div>
        {/* <WordGame
          classname="word"
          word={word}
          currentFocus={currentFocus}
          setCurrentFocus={setCurrentFocus}
          fid={2}
          setShowPopup={setShowPopup}
        />
        <WordGame
          classname="word"
          word={word}
          currentFocus={currentFocus}
          setCurrentFocus={setCurrentFocus}
          fid={3}
          setShowPopup={setShowPopup}
        />
        <WordGame
          classname="word"
          word={word}
          currentFocus={currentFocus}
          setCurrentFocus={setCurrentFocus}
          fid={4}
          setShowPopup={setShowPopup}
        />
        <WordGame
          classname="word"
          word={word}
          currentFocus={currentFocus}
          setCurrentFocus={setCurrentFocus}
          fid={5}
          setShowPopup={setShowPopup}
        /> */}
      </div>
    </div>
  );
}

export default App;
