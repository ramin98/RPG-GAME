import '../App/App.css';
import '../Menu/Menu.css';
import '../Learning/Learning.css'
import '../SpeedGame/SpeedGame.css'
import './PowerGame.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function PowerGame() {

let [result, setResult] = useState('RESULT')

let [playerScore, setPlayerScore] = useState(3)
let [enemyScore, setEnemyScore] = useState(3)
let [flag, setFlag] = useState(false)
let [timer, setTimer] = useState(6)
let [startActive, setStartActive] = useState(false)

let [protectHead, setprotectHead] = useState(0)
let [protectTors, setprotectTors] = useState(0)
let [protectLegs, setprotectLegs] = useState(0)
let [atackHead, setatackHead] = useState(0)
let [atackTors, setatackTors] = useState(0)
let [atackLegs, setatackLegs] = useState(0)
let [enemyprotectHead, enemysetprotectHead] = useState(0)
let [enemyprotectTors, enemysetprotectTors] = useState(0)
let [enemyprotectLegs, enemysetprotectLegs] = useState(0)
let [enemyatackHead, enemysetatackHead] = useState(0)
let [enemyatackTors, enemysetatackTors] = useState(0)
let [enemyatackLegs, enemysetatackLegs] = useState(0)
let [protectActive, setprotectActive] = useState(true)
let [atacktActive, setatacktActive] = useState(true)
let [protectCounter, setProtectCounter] = useState(0)
let [atackCounter, setAtackCounter] = useState(0)

const start = () =>{
    setFlag(true)
    setatacktActive(false)
    setprotectActive(false)
    enemysetatackHead(Math.floor(Math.random() * 2))
    enemysetatackTors(Math.floor(Math.random() * 2))
    enemysetatackLegs(Math.floor(Math.random() * 2))
    enemysetprotectHead(Math.floor(Math.random() * 2))
    enemysetprotectTors(Math.floor(Math.random() * 2))
    enemysetprotectLegs(Math.floor(Math.random() * 2))
    let stop = setInterval(function(){
        setTimer(timer -= 1)
        if(timer === 0){

            setFlag(false)
            setatacktActive(true)
            setprotectActive(true)
            setTimer(6)

          if(protectHead === enemyatackHead || protectTors === enemyatackTors || protectLegs === enemyatackLegs){
            setPlayerScore(playerScore -= 1)
            console.log('player')
          }
          if(atackHead === enemyprotectHead || atackTors === enemyprotectTors || atackLegs === enemyprotectLegs){
            setEnemyScore(enemyScore -= 1)
            console.log('enemy')
          }
          setprotectHead(0)
          setprotectTors(0)
          setprotectLegs(0)
          setatackHead(0)
          setatackTors(0)
          setatackLegs(0)

          setProtectCounter(0)
          setAtackCounter(0)

          clearInterval(stop)
        }
      },1000)
}

const compareProtect = () => {
     if(protectCounter > 1){
        setprotectActive(true)
     }
}

const compareAtack = () => {
    if(atackCounter > 1){
       setatacktActive(true)
    }
}

const setprotectHeadFunc = () =>{
    setProtectCounter(protectCounter += 1)
    compareProtect()
    setprotectHead(1)
}

const setprotectTorsFunc = () =>{
    setProtectCounter(protectCounter += 1)
    compareProtect()
    setprotectTors(1)
}

const setprotectLegsFunc = () =>{
    setProtectCounter(protectCounter += 1)
    compareProtect()
    setprotectLegs(1)
}

const setatackHeadFunc = () =>{
    setAtackCounter(atackCounter += 1)
    compareAtack()
    setatackHead(1)
}

const setatackTorsFunc = () =>{
    setAtackCounter(atackCounter += 1)
    compareAtack()
    setatackTors(1)
}

const setatackLegsFunc = (ev) =>{
    setAtackCounter(atackCounter += 1)
    compareAtack()
    setatackLegs(1)
}




useEffect(function(){
    if (playerScore === 0 && enemyScore === 0){
        setResult('EQUAL')
        setStartActive(true)
    }
    else if(playerScore === 0){
        setResult('YOU LOOSED')
        setStartActive(true)
    }
    else if(enemyScore === 0){
        setResult('YOU WON')
        setStartActive(true)
    }
     
},[enemyScore,playerScore])


  return (
    <div>
        <p className='greeting'>AT THIS LESSON YOU MUST SHOW YOUR POWER, SPEED AND FIGTH'S SKILLS</p>      
        <p className='greeting'>YOU CAN PROTECT ONLY YOUT TWO BODY'S PART</p> 
        <p className='greeting'>YOUR ENEMY CAN ATACK YOUE ONE OR TWO PART OF BODY</p>
        <p className='greeting'>ENEMY ATACK IN RANDOM ORDER</p>
        <div className='timer'>
        <button onClick={start} className={flag ? 'greeting' : 'start'} disabled={startActive}>START FIGTH</button>
        <span className='start' >{timer}</span>
        </div>
        
        <div className='warriors'>
            <div className='player'>
            <p className='greeting'>Player {playerScore}</p>
                <div className='head'>
                    <div>HEAD</div>
                    <button className={protectHead && 'greeting'} onClick={setprotectHeadFunc} disabled={protectActive}>PROTECT HEAD</button>
                </div>
                <div className='tors'>
                    <div>TORS</div>
                    <button className={protectTors && 'greeting'} onClick={setprotectTorsFunc} disabled={protectActive}>PROTECT TORS</button>
                </div>
                <div className='legs'>
                    <div>LEGS</div>
                    <button className={protectLegs && 'greeting'} onClick={setprotectLegsFunc} disabled={protectActive}>PROTECT LEGS</button>
                </div>
            </div>
            <div className='warriorSecond'>
            <p className='greeting'>Enemy {enemyScore}</p>
            <div className='head'>
                    <button className={atackHead && 'greeting'} onClick={setatackHeadFunc} disabled={atacktActive}>ATACK HEAD</button>
                    <div>HEAD</div>                   
                </div>
                <div className='tors'>
                    <button className={atackTors && 'greeting'} onClick={setatackTorsFunc} disabled={atacktActive}>ATACK TORS</button>
                    <div>TORS</div>                   
                </div>
                <div className='legs'>
                    <button className={atackLegs && 'greeting'} onClick={setatackLegsFunc}  disabled={atacktActive}>ATACK LEGS</button>
                    <div>LEGS</div>                   
                </div>
            </div>
        </div>
        <div className='win'>{result}</div>
    </div>
  );
}

export default PowerGame;