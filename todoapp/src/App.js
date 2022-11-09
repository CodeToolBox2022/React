import React, { useState } from "react";
import "./App.css"
const App=()=>{
  const[userInput,setUserInput] = useState("")
  const [todos,setTodos] = useState([ ])
  const addData = ()=>{
    setTodos([...todos,userInput])
  }
return <div>
    <h1>TODO List</h1>
    <span>
    <input onChange={(event)=> setUserInput(event.target.value)}type="Text"></input>
    <button onClick={()=>addData()}>Add</button>
   
    <ul>
      {
        todos.map((todo,index)=> <li key={index}>{todo}</li>)
      }
    </ul>
    </span>
  </div>
  }

export default App;


