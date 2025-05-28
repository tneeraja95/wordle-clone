import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HowToPlay from "./components/HowToPlay";
import WordGame from "./components/WordGame";
import PlayAgain from "./components/PlayAgain";
import { useLocalStorage } from "./utilities/useLocalStorage";

function App() {
  const [gameOver, setGameOver] = useState(false);
  const [resetGame, setResetGame] = useState(0);
  const [stats, setStats] = useLocalStorage("gameStats", {
    noOfGames: 0,
    AvgGuesses: 0,
    gamesWon: 0,
    gamesLost: 0,
  });

  return (
    <div onMouseDown={(e) => e.preventDefault()} className="app">
      <HowToPlay />
      <PlayAgain
        gameOver={gameOver}
        setGameOver={setGameOver}
        setResetGame={setResetGame}
        stats={stats}
      />
      <Header setGameOver={setGameOver} />
      <WordGame
        setGameOver={setGameOver}
        resetGame={resetGame}
        setStats={setStats}
      />
    </div>
  );
}

export default App;
