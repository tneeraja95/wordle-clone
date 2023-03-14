import { useEffect, useRef, useState } from "react";
import "./WordGame.css";

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

  function checkMatch(userInputArray, wordArray) {
    let matchResult = new Array(5).fill("none");
    for (let i = 0; i < wLength; i++) {
      matchResult[i] =
        userInputArray[i] === wordArray[i]
          ? "green"
          : wordArray.includes(userInputArray[i])
          ? "#B59F3B"
          : "grey";
    }
    setMatchResult(matchResult);
    return matchResult.reduce((prev, curr) => prev && curr === "green", true);
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

  function handleSubmit(index = 4) {
    console.log(userInputArray[index]);
    if (index + 1 != wLength || userInputArray[index] === "") {
      setPopupText("not enough letters");
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 1000);
      return;
    }

    let result = checkMatch(userInputArray, wordArray);
    if (result === true) {
      // alert("correct");
      setPopupText("Amazing");
      setShowPopup(true);
    }
    // else {
    //   alert("incorrect");
    // }
    if (fid === 5) {
      refArray.current[4].blur();
    } else {
      setCurrentFocus((prev) => prev + 1);
    }
  }

  function handleKeyDown(e, index) {
    console.log(index, e.key);
    if (e.key === "Backspace") {
      if (index === 4 && e.target.value != "") return;
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
