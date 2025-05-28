function WordArray({ userInputArrayMatrix }) {
  return (
    <div className="gameArray">
      {" "}
      {userInputArrayMatrix.map((row, rowIndex) => (
        <div key={rowIndex} className="word">
          {row.map((tile, tileIndex) => (
            <div
              key={tileIndex}
              className="tile"
              style={{
                background: tile.backgroundColor,
                borderColor: tile.borderColor,
              }}
            >
              {tile.letter}
            </div>
          ))}
        </div>
      ))}{" "}
    </div>
  );
}

export default WordArray;
