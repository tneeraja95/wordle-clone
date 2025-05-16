import "./HowToPlay.css";
import { useState } from "react";
import { Dialog } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import colors from "../constants";

export function getTileStyle(color = colors.gray) {
  return {
    backgroundColor: color,
    borderColor: color,
  };
}

const ExampleRow = ({ word, highlightIndex, color, explanation }) => (
  <div className="exampleBorder">
    <div className="example">
      {word.split("").map((char, index) => (
        <div
          key={index}
          className="letter"
          style={index === highlightIndex ? getTileStyle(color) : {}}
        >
          {char}
        </div>
      ))}
    </div>
    <b>{word[highlightIndex]}</b> {explanation}
  </div>
);

export function HowToPlay() {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <div className="howToPlay">
        <CloseIcon onClick={() => setOpen(false)} className="close" />
        <h2>How To Play</h2>
        <h3>Guess the Wordle in 6 tries.</h3>
        <ul>
          <li>Each guess must be a valid 5-letter word.</li>
          <li>
            The color of the tiles will change to show how close your guess was
            to the word.
          </li>
        </ul>
        <h3>Examples</h3>
        <ExampleRow
          word="WEARY"
          highlightIndex={0}
          color={colors.green}
          explanation="is in the word and in the correct spot."
        />
        <ExampleRow
          word="PILLS"
          highlightIndex={1}
          color={colors.yellow}
          explanation="is in the word but in the wrong spot."
        />
        <ExampleRow
          word="VAGUE"
          highlightIndex={3}
          color={colors.gray}
          explanation="is not in the word in any spot."
        />
      </div>
    </Dialog>
  );
}

export default HowToPlay;
