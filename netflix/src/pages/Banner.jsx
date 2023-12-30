import React,{useState,useEffect} from 'react'
import "./banner.css";
export default function Banner() {
    const [movies,setMovies]=useState([]);
    const featchData=()=>{
        fetch('http://localhost:3000/data/movieData.json')
        .then(res=>res.json())
        .then(data=>setMovies(data))
        .catch(e=>console.log(e.message));
    }
    useEffect(()=>{ //used when the webpage lands so we select using useEffect Hook
        featchData()
    },[])
  return (
    <div className="banner">

    </div>
  )
}
