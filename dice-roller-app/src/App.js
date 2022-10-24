import React, { useState } from 'react';
import './App.css';


const App=()=> {
  const [number,setNumber]=useState(1);
  const rollDice=()=>{
    setNumber(Math.floor(Math.random()*6)+1)
  }
  return (
    <div>
      <center>
     <img width={300} height={300} src={require(`./assets/${number}.png`)}></img><br/> 
     <button onClick={rollDice}className='btn'>Roll</button>
     </center>
    </div>
  );
}

export default App;
