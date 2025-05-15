function Statistics() {
  let noOfGames = parseInt(localStorage.getItem("noOfGames") || 0);
  let AvgGuesses = parseInt(localStorage.getItem("AvgGuesses") || 0);
  let gamesWon = parseInt(localStorage.getItem("gamesWon") || 0);
  let gamesLost = parseInt(localStorage.getItem("gamesLost") || 0);

  return (
    <div>
      {
        <div className="stats">
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
      }
    </div>
  );
}

export default Statistics;
