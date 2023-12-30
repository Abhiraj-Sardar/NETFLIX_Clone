import React from 'react'
import "./header.css";
import NavListItem from '../components/NavListItem'
import navListData from '../data/navListData'
import Search from '../components/Search';
import "../components/search.css";

function Header() {
  return (
   <header>
    <a href="" className="logo">Cinema</a>
    <ul className="nav">
        {
            navListData.map(nav=>(
                <NavListItem key={nav._id} nav={nav}/>  //key attribute is used to uniquely identify a component
            ))
        }
    </ul>
    <Search/>
   </header>
  )
}

export default Header
