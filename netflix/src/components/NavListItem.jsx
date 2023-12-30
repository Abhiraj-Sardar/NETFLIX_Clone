import React from 'react'
import "./navListItem.css";
export default function NavListItem({nav}) {
  return (
    <div>
      <li><a href={nav.link}>{nav.name}</a></li>
    </div>
  )
}
