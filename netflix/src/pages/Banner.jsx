import React,{useState,useEffect} from 'react'
import "./banner.css";
import bgImg from "../images/bg-transformer.jpg";
import titleImg from  "../images/transformer-title.png";
export default function Banner() {
    const [movies,setMovies]=useState([]);
    const featchData=()=>{
        fetch('http://localhost:3000/data/movieData.json')
        .then(res=>res.json())
        .then(data=>setMovies(data))
        .catch(e=>console.log(e.message));
    }
    useEffect(()=>{ //used when the webpage lands so we select using useEffect Hook
        featchData();
    },[]);

  return (
    <div className="banner">
       <div className="movie">
          <img src={bgImg} alt="" className="bgImg active" />
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="content active">
                  <img src={titleImg} alt="movie title" className="movie-title" />
                  <h4>
                    <span>Year</span>
                    <span><i>age</i></span>
                    <span>length</span>
                    <span>category</span>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Mollitia obcaecati dolorem accusamus quibusdam 
                    dolor sequi beatae totam quas! Assumenda eius aliquid
                     beatae voluptatum? Deserunt magnam quo eaque velit 
                     omnis ullam culpa explicabo porro inventore, 
                     similique dolorum. Error modi mollitia, libero
                      assumenda, illo laudantium pariatur iste, architecto 
                      et dolor cupiditate molestiae?
                  </p>
                  <div className="button">Button</div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="date active">
                  <h2>On 15th August</h2>
                </div>
                <div className="trailer">
                  <a href="#" className="playBtn">
                  "../images/bg-transformer.jpg";
                  </a>
                  <p>Watch Trailer</p>
                </div>
              </div>
            </div>
          </div>
       </div>
    </div>
  )
}
