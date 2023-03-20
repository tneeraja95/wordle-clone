import "./HowToPlay.css";
import { useState } from "react";
import { Dialog, DialogTitle } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export function HowToPlay() {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <div className="howToPlay">
        <CloseIcon onClick={()=> setOpen(false)} className="close"/>
        <h2>How To Play</h2>
        <h3>Guess the Wordle in 6 tries.</h3>
        <ul>
          <li>Each guess must be a valid 5 letter word.</li>
          <li>
            The color of the tiles will change to show how close your guess was
            to the word.
          </li>
        </ul>
        <h3>Examples</h3>
        <div className="exampleBorder">
          <div className="example">
            <div className="letter" style={{ backgroundColor: "green" }}>
              W
            </div>
            <div className="letter">E</div>
            <div className="letter">A</div>
            <div className="letter">R</div>
            <div className="letter">Y</div>
          </div>
          <b>W</b> is in the word and in the correct spot.
        </div>
        <div className="exampleBorder">
          <div className="example">
            <div className="letter" >
              P
            </div>
            <div className="letter" style={{ backgroundColor: "rgb(181, 159, 59)" }}>I</div>
            <div className="letter">L</div>
            <div className="letter">L</div>
            <div className="letter">S</div>
          </div>
          <b>P</b> is in the word but in the wrong spot.
        </div>

        <div className="exampleBorder">
          <div className="example">
            <div className="letter" >
              V
            </div>
            <div className="letter">A</div>
            <div className="letter">G</div>
            <div className="letter" style={{ backgroundColor: "grey" }}>U</div>
            <div className="letter">E</div>
          </div>
          <b>U</b> is not in the word in any spot.
        </div>
        
      </div>
      
    </Dialog>
  );
}

export default HowToPlay;
