import '../App/App.css';
import {Link} from 'react-router-dom'
function Game() {
  return (
    <div className='main-page'>
      <Link to='menu' className="start-game">START THE GAME!</Link>
    </div>
  );
}

export default Game;
