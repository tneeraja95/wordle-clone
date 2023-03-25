import "./App.css";
import Header from "./components/Header";
import HowToPlay from "./components/HowToPlay";
import WordGame from "./components/WordGame";

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
