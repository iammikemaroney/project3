import React, { Component } from "react";
import Scrape from "../Scrape/Scrape";
import recipes from "../Scrape/recipes.json";
import "../../css/style.css";

class Food extends Component {
    state = {
      
    };

    render () {
      return(
        <div> 
          <div class="container">
            <br />
            <div class="row">
              <div class="col s12 m6">
                <div class="recipe">
                  <p>Recipes & Cooking Tips</p>
                  {recipes.map((recipe, i) => (
                    <Scrape
                      key={i}
                      title= {recipe.title}
                      image= {recipe.image}
                      link= {recipe.link}
                      children= "View Recipe"
                    />
                  ))}
                  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </div>  
              </div>

       
            </div>
          </div>
        </div>

      );}
}

export default Food;