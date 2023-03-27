import { Dialog } from "@mui/material";
import "./PlayAgain.css";
import CloseIcon from '@mui/icons-material/Close'; 

function PlayAgain({ gameOver, setGameOver, setResetGame }) {
  return (
    <Dialog open={gameOver} onClose={() => setGameOver(false)}>
      <div className="playAgain">
        <CloseIcon onClick={()=> setGameOver(false)} className="close"/>
        <button onClick={()=> {setGameOver(false); setResetGame((prev)=>prev+1)}}><h2>Play Again</h2></button>
      </div>
    </Dialog>
  );
}

export default PlayAgain;
