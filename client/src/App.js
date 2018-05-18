import React, { Component } from 'react';
import './App.css';
import Scrape from "../src/components/Scrape";
import recipes from "../src/components/Scrape/recipes.json";

class App extends Component {
  // state = {
  //   recipes
  // };

  render() {
    return (
      <div className="App">

      {recipes.map((recipe, i) => (
        <Scrape
          key={i}
          title= {recipe.title}
          image= {recipe.image}
          link= {recipe.link}
          children= "View Recipe"
          
        />
        )
  )};
        </div>
  )
  }
}

export default App;
