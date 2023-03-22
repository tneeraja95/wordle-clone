import React from "react";
import WordRow from "./WordRow";
import selectWordfromWordList from ".././utilities/selectWordfromWordList";
import { useMemo, useState } from "react";
import Keyboard from "./Keyboard";
import initialiseKeyboardArray from ".././utilities/initialiseKeyboardArray";

const NO_OF_TRIES = 6;

function WordGame({  }) {
  let [currentFocus, setCurrentFocus] = useState(0);
  let [showPopup, setShowPopup] = useState(false);
  let [popupText, setPopupText] = useState("Not enough Letters");
  let [userInputArrayMatrix, setUserInputArrayMatrix] = useState(
    Array.from({ length: 6 }, () => Array.from({ length: 5 }, () => ({letter: "", color: "none"})))
  );
  let [keyboardArray, setKeyboardArray] = useState(initialiseKeyboardArray());

  let word = useMemo(() => {
    return selectWordfromWordList();
  }, []);

  console.log(word);

  let wordList = [];
  for (let i = 0; i < NO_OF_TRIES; i++) {
    wordList.push(
      <WordRow
        classname="word"
        word={word}
        currentFocus={currentFocus}
        setCurrentFocus={setCurrentFocus}
        rowId={i}
        setShowPopup={setShowPopup}
        setPopupText={setPopupText}
        userInputArrayMatrix={userInputArrayMatrix}
        setUserInputArrayMatrix={setUserInputArrayMatrix}
        key={i}
        setKeyboardArray={setKeyboardArray}
      />
    );
  }

  return (
    <div className="wordGame">
      <div className={showPopup ? "popup" : "popup invisible"}>{popupText}</div>
      <div>{wordList}</div>
      <Keyboard keyboardArray={keyboardArray}/>
    </div>
  );
}

export default WordGame;
