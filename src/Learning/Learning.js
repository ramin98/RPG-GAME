import '../App/App.css';
import '../Menu/Menu.css';
import './Learning.css'
import SpeedGame from '../SpeedGame/SpeedGame';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
function Learning() {
  let history = useNavigate() 
    let [next, setNext] = useState(false)

    let [flag, setFlag] = useState(false)

    const showTalk = (ev) =>{ 
        if(ev.key === ' '){
            setFlag(true)
        } 

        if(ev.key === 'Enter' && next === true){
              history('/powergame')
              console.log('power')
        }
      }
    
    
    useEffect(function(){       
        document.addEventListener('keyup', showTalk)
        return function(){
            document.removeEventListener('keyup', showTalk)
        }
    }) 

  return (
    <div className='learning'>
        <div>
          <p className="greeting">At first youu have to improve your skills on every level</p>
          <p className="greeting">Your Power! Your Speed! Your Intuition!</p>
        </div>     
        <p className='help'>Click on SPACE for continiue</p>
        {flag && <SpeedGame next={setNext}/>}
    </div>
  )
}

export default Learning;
