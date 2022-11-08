import React, { useState } from "react";

const App=()=>{
  const[userInput,setUserInput] = useState("")
  const [todos,setTodos] = useState([ ])
  const addData = ()=>{
    setTodos([...todos,userInput])
    setUserInput("")
  }
return <div>
  <center>
    <h1>TODO List</h1>
    <input onChange={(event)=> setUserInput(event.target.value)}type="Text"></input>
    <button onClick={()=>addData()}>Add</button>
    <ul>
      {
        todos.map((todo,index)=> <li key={index}>{todo}</li>)
      }
    </ul>
    </center>
  </div>
  }

export default App;


