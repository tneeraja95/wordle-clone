import { useEffect, useRef, useState } from "react";
import "./WordGame.css";
import checkWord from "../utilities/checkWord";

const NO_OF_TRIES = 6;

function WordGame({
  word = "arrow",
  setCurrentFocus,
  currentFocus,
  fid,
  setShowPopup,
  setPopupText,
}) {
  let wordArray = word.toUpperCase().split("");
  let wLength = wordArray.length;
  let [userInputArray, setUserInputArray] = useState(
    new Array(wLength).fill("")
  );
  let [matchResult, setMatchResult] = useState(new Array(5).fill("none"));
  let refArray = useRef([]);

  useEffect(() => {
    if (currentFocus === fid) {
      refArray.current[0].focus();
    }
  }, [currentFocus]);

  function checkMatch(userInputArray, letterArray) {
    let letterBgArray = new Array(5).fill("none");
    let alphabetCount = {};
    for (let letter of letterArray) {
      if (alphabetCount[letter]) {
        alphabetCount[letter]++;
      } else {
        alphabetCount[letter] = 1;
      }
    }
    for (let i = 0; i < wLength; i++) {
      if (userInputArray[i] === letterArray[i]) {
        letterBgArray[i] = "green";
        alphabetCount[userInputArray[i]]--;
      } else {
        letterBgArray[i] = "grey";
      }
    }
    userInputArray.forEach((inputLetter, index) => {
      if (
        letterBgArray[index] !== "green" &&
        alphabetCount[inputLetter] &&
        alphabetCount[inputLetter] > 0
      ) {

        alphabetCount[inputLetter]--;
        letterBgArray[index] = "#B59F3B";
      }
    });
    setMatchResult(letterBgArray);
    return letterBgArray.reduce((prev, curr) => prev && curr === "green", true);
  }

  function handleChange(e, index) {
    let char = e.target.value.toUpperCase();
    setUserInputArray((prev) => {
      prev[index] = char;
      return prev;
    });
    if (index + 1 < wLength && char != "") {
      refArray.current[index + 1].focus();
    }
  }

  function handleSubmit(index) {
    if (index + 1 != wLength || userInputArray[index] === "") {
      setPopupText("not enough letters");
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 1000);
      return;
    }

    if(!checkWord(userInputArray.join(""))){
      setPopupText("Not in wordlist");
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 1000);
      return;
    }

    let result = checkMatch(userInputArray, wordArray);
    if (result === true) {
      setPopupText("Amazing");
      setShowPopup(true);
      refArray.current[index].blur();
    } else if(fid === NO_OF_TRIES-1){

      setPopupText(wordArray.join(""));
      setShowPopup(true);
    } else {
      setCurrentFocus((prev) => prev + 1);
    }
  }

  function handleKeyDown(e, index) {
    if (e.key === "Backspace") {
      if (index === wLength - 1 && e.target.value != "") return;
      if (index > 0) {
        refArray.current[index - 1].focus();
      }
    }
    if (e.key === "Enter") {
      handleSubmit(index);
    }
  }

  return (
    <div className="word">
      {userInputArray.map((letter, index) => {
        return (
          <input
            key={index}
            type="text"
            maxLength={1}
            size={1}
            onChange={(e) => handleChange(e, index)}
            ref={(input) => {
              refArray.current[index] = input;
            }}
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(index);
            }}
            onClick={(e) => {
              handleClick(e);
            }}
            onKeyDown={(e) => {
              handleKeyDown(e, index);
            }}
            onMouseDown={(e) => e.preventDefault()}
            style={{ background: matchResult[index] }}
          />
        );
      })}
    </div>
  );
}

export default WordGame;
