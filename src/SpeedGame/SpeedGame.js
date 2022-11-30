import '../App/App.css';
import '../Menu/Menu.css';
import '../Learning/Learning.css'
import './SpeedGame.css'
import { useEffect, useState } from 'react';
function SpeedGame({next}) {

let [arr] = useState([1,2,3,4,5,6,7,8,9])

let [score, setScore] = useState(0)
let [win, setWin] = useState(false)



useEffect(function(){ 

    const stop = setInterval(() => {
        document.querySelectorAll('.goals').forEach((item) =>{
            item.innerHTML = ''
        })
        let goal  = document.createElement('div')
        goal.className = 'goal'
        document.querySelectorAll('.goals')[Math.floor(Math.random() * 9)].appendChild(goal)
        document.querySelectorAll('.goal').forEach((item) =>{
            item.addEventListener('click', function(ev){
                ev.target.remove()
                setScore(score += 1)      
            })
        })
        if(score >= 5){
            setWin(true)
            clearInterval(stop)
            next(() => true)
        }
        
        
    },1000)

    
  },[])
  return (
    <div>
        <p className='help'>Bit the goals!</p>      
        <div className='area'>
            {arr.map((item) => <div key={item} className='goals'>{item}</div>)}
        </div>
        <p className='greeting'>{score}</p>
        {win && <div className='win'>WELL! LET'S GO TO NEXT LESSON! TAP ON ENTER</div>} 
    </div>
  );
}

export default SpeedGame;