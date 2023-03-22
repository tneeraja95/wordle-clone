import { useEffect, useRef, useState } from "react";
import "./WordRow.css";
import handleEnter from "../utilities/handleEnter";

function WordRow({
  word = "arrow",
  setCurrentFocus,
  currentFocus,
  rowId,
  setShowPopup,
  setPopupText,
  userInputArrayMatrix,
  setUserInputArrayMatrix,
  setKeyboardArray
}) {
  let letterArray = word.toUpperCase().split("");
  
  let refArray = useRef([]);
  let userInputArray = userInputArrayMatrix[rowId];
  
  useEffect(() => {
    if (currentFocus === rowId) {
      refArray.current[0].focus();
    }
  }, [currentFocus]);

  function handleChange(e, index) {
    let char = e.target.value.toUpperCase();
    setUserInputArrayMatrix((prev) => {
      prev[rowId][index].letter = char;
      return prev;
    });
    if (index + 1 < userInputArray.length && char != "") {
      refArray.current[index + 1].focus();
    }
  }

  function handleKeyDown(e, index) {
    if (e.key === "Backspace") {
      if (index === userInputArray.length - 1 && e.target.value != "") return;
      if (index > 0) {
        refArray.current[index - 1].focus();
      }
    }
    if (e.key === "Enter") {
      handleEnter(
        userInputArray,
        letterArray,
        index,
        setPopupText,
        setShowPopup,
        setCurrentFocus,
        refArray,
        rowId,
        setKeyboardArray,
        setUserInputArrayMatrix
      );
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
            style={{ background: userInputArray[index].color }}
          />
        );
      })}
    </div>
  );
}

export default WordRow;
