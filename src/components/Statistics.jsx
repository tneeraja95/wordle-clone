function Statistics({ stats }) {
  let noOfGames = stats.noOfGames;
  let AvgGuesses = stats.AvgGuesses.toFixed(0);
  let gamesWon = stats.gamesWon;
  let gamesLost = stats.gamesLost;

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

import PropTypes from "prop-types";

Statistics.propTypes = {
  stats: PropTypes.shape({
    noOfGames: PropTypes.number.isRequired,
    AvgGuesses: PropTypes.number.isRequired,
    gamesWon: PropTypes.number.isRequired,
    gamesLost: PropTypes.number.isRequired,
  }).isRequired,
};

export default Statistics;
