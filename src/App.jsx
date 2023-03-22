import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HowToPlay from "./components/HowToPlay";
import Keyboard from "./components/Keyboard";
import WordGame from "./components/WordGame";
import initialiseKeyboardArray from "./utilities/initialiseKeyboardArray";

function App() {


  return (
    <div onMouseDown={(e) => e.preventDefault()} className="app">
      <HowToPlay />
      <Header />
      <WordGame/>
    </div>
  );
}

export default App;
