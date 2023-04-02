function Statistics() {
  let noOfGames = parseInt(localStorage.getItem("noOfGames"));
  let AvgGuesses = parseInt(localStorage.getItem("AvgGuesses"));
  let gamesWon = parseInt(localStorage.getItem("gamesWon"));
  let gamesLost = parseInt(localStorage.getItem("gamesLost"));

  let showStats = false;
  if (
    isNaN(noOfGames) ||
    isNaN(AvgGuesses) ||
    isNaN(gamesLost) ||
    isNaN(gamesWon)
  ) {
    showStats = false;
  } else {
    showStats = true;
  }
  return (
    <div>
      {showStats && (
        <div className="stats">
          <h2>Statistics</h2>
          <ul>
            <li>
              <div>Total Games</div>
              <div> {noOfGames}</div>
            </li>
            <li>
              <div>Avg. Guesses</div>
              <div> {AvgGuesses}</div>
            </li>
            <li>
              <div>Games Won </div>
              <div> {gamesWon}</div>
            </li>
            <li>
              <div>Games Lost </div>
              <div> {gamesLost}</div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Statistics;
