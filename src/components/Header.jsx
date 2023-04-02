import './Header.css';
import BarChartIcon from '@mui/icons-material/BarChart';

function Header({setGameOver}) {
  return (
    <div className='header'>
      <div></div>
      <h1>Wordle</h1>
      <BarChartIcon className='stats' onClick={()=>setGameOver(true)}/>
    </div>
  )
}

export default Header
