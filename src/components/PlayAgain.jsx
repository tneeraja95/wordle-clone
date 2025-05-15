import { Dialog } from "@mui/material";
import "./PlayAgain.css";
import CloseIcon from "@mui/icons-material/Close";
import Statistics from "./Statistics";

function PlayAgain({ gameOver, setGameOver, setResetGame }) {
  return (
    <Dialog open={gameOver} onClose={() => setGameOver(false)}>
      <div className="playAgain">
        <Statistics />
        <CloseIcon onClick={() => setGameOver(false)} className="close" />
        <button
          onClick={() => {
            setGameOver(false);
            setResetGame((prev) => prev + 1);
          }}
        >
          Play Again
        </button>
      </div>
    </Dialog>
  );
}

export default PlayAgain;
