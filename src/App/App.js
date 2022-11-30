
import './App.css';
import Game from '../Game/Game';
import Learning from '../Learning/Learning';
import Menu from '../Menu/Menu';
import PowerGame from '../PowerGame/PowerGame';
import {Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div>
    <Routes>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/" element={<Game/>}/>
      <Route path="/learning" element={<Learning/>}/>
      <Route path="/powergame" element={<PowerGame/>}/>
    </Routes>
    </div>
    
  );
}

export default App;
