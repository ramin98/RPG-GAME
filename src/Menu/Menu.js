import { useEffect, useState } from 'react';
import '../App/App.css';
import './Menu.css'
import { useNavigate } from 'react-router-dom';

function Menu() {

let history = useNavigate()    

let [talk] = useState([
    "It's honor", 
    "For saving our world you must win all evil powers",
    "How i can do it?",
    "We will help an direct you at this way"
])

let [newTalk] = useState([])
let [part, setPart] = useState(-1)

let [flag,setFlag] = useState(false)

const showTalk = (ev) =>{

    if(ev.key === ' '){ 
        setPart(++part)       
        if(part < talk.length){        
          newTalk.push(talk[part])
        }
        else if(part === talk.length){
            newTalk.push('Click ENTER for go to next level')
            setFlag(true)
        }       
    }
    if(ev.key === 'Enter' && flag === true){
        history('/learning')
    } 
}

useEffect(function(){       
    document.addEventListener('keyup', showTalk)
    return function(){
        document.removeEventListener('keyup', showTalk)
    }
})

  return (
    <div className='menu'>
        <div className='talk-div'>
          <p className='greeting'>We are gereeting you the brave warrior!</p>
          {newTalk.map((item) => <p className='greeting'>{item}</p>)}
        </div>  
        <p className='help'>Click on SPACE for continiue talk</p>
    </div>
  );
}

export default Menu;
