import React from "react";
import "./Scrape.css";


const Scrape = props => (
    
    <div className="carousel">
        <h3> {props.title} </h3>
       
        <a className="carousel-item" href= {props.link}><img src= {props.image} alt=""/>{props.children}</a>

    </div>
    // </div>
)

export default Scrape 