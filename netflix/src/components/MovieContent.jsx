import React from 'react'
import "./moviecontent.css";
import titleImg from  "../images/transformer-title.png";
import Button from './Button';

export default function MovieContent() {
    return (
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
            <div className="button">
                <Button icon={<ion-icon name="bookmark-outline"></ion-icon>} name="Book" color="#ff3700" bgcolor="#fff"/>
                <Button icon={<ion-icon name="add-outline"></ion-icon>} name="My List" />
            </div>
        </div>
    )
}
