import React from "react";
const Button = (props)=>{
    return <a href={props.link} target="blank"><button className="btn">{props.name}</button></a>
  }
export default Button;