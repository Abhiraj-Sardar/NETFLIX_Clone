import React from 'react'
import "./button.css";
export default function Button({icon,name,color="#fff",bgcolor="#ff3700"}) {
  return (
    <a href="" className="mainBtn" style={{color:color,background:bgcolor}}>{icon}{name}</a>
  )
}
