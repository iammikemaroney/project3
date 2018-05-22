import React, { Component } from "react";
import Scrape from "../Scrape/Scrape";
import recipes from "../Scrape/recipes.json";

class Food extends Component {
    state = {
      
    };

    render () {
      return(
        <div> 

          {recipes.map((recipe, i) => (
            <Scrape
              key={i}
              title= {recipe.title}
              image= {recipe.image}
              link= {recipe.link}
              children= "View Recipe"
            />
          ))}
       
        </div>
      );}
}

export default Food;