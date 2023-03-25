import { useEffect } from "react";
import "./WordRow.css";

function WordRow({
  currentFocus,
  rowId,
  userInputArrayMatrix,
  handleKeyPress,
  refArrayMatrix,
   setIndex
}) {
  let userInputArray = userInputArrayMatrix[rowId];
  useEffect(() => {
    if (currentFocus === rowId) {
      refArrayMatrix.current[rowId][0].focus();
    }
  }, [currentFocus]);

  let wordRowInput = userInputArray.map((letter, index) => {
    return (
      <div
        key={index}
        type="text"
        maxLength={1}
        size={1}
        ref={(input) => {
          refArrayMatrix.current[rowId][index] = input;
        }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
        onChange={(e) => {
       //   setIndex(index)
          handleKeyPress(e.target.value.toUpperCase(), index);
        }}
        onKeyDown={(e) => {
          setIndex(index)
          if(e.key === 'Enter' || e.key === 'Backspace')
          handleKeyPress(e.key, index);
        }}
        onMouseDown={(e) => e.preventDefault()}
        style={{ background: userInputArray[index].color }}
      />
    );
  });

  wordRowInput.push(
    <div
      className="noShow"
      type="text"
      maxLength={0}
      size={0}
      key={6}
      ref={(input) => {
        refArrayMatrix.current[rowId][5] = input;
      }}
      onKeyDown={(e) => {
        e.stopPropagation();
          setIndex(5);
        handleKeyPress(e.key, 5);
      }}
    />
  );

  return <div className="word">{wordRowInput}</div>;
}

export default WordRow;
