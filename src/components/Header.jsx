import "./Header.css";
import BarChartIcon from "@mui/icons-material/BarChart";

function Header({ setGameOver }) {
  return (
    <div className="header">
      <div></div>
      <div className="heading">Wordle</div>
      <BarChartIcon className="stats" onClick={() => setGameOver(true)} />
    </div>
  );
}

export default Header;
