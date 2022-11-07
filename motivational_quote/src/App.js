import React, { useState } from 'react'
import ItemQuotes from './ItemQuotes'

const App = () => {
    const [items,setItems] = useState([])
    const fetechData = ()=>{
        return fetch("https://jsonguide.technologychannel.org/quotes.json")
        .then((response) => response.json())
        .then((data)=>{setItems(data)})
    }
  return (
    <div>
        <button onClick={()=>fetechData()}>fetch</button>
        {items.map((item,index)=><ItemQuotes text={item.text} author={item.from} key={index}></ItemQuotes>)}
       
    </div>
  )
}

export default App