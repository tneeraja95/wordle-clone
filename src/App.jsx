import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HowToPlay from "./components/HowToPlay";
import WordGame from "./components/WordGame";
import PlayAgain from "./components/PlayAgain";

function App() {

  const [gameOver, setGameOver] = useState(false);
  const [resetGame, setResetGame] = useState(0);

  return (
    <div onMouseDown={(e) => e.preventDefault()} className="app">
      <HowToPlay />
      <PlayAgain gameOver={gameOver} setGameOver={setGameOver} setResetGame={setResetGame}/>
      <Header setGameOver={setGameOver}/>
      <WordGame setGameOver={setGameOver} resetGame={resetGame} setResetGame={setResetGame}/>
    </div>
  );
}

export default App;
