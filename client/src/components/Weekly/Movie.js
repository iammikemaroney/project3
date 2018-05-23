import React, { Component } from "react";
import "../../css/style.css";
// import movieSeed from "./seedMovieDB";

class Movie extends Component {
    state = {
      movie: {}
    }

    // componentDidMount() {
    //     movieSeed[Math.floor(Math.random() * movieSeed.length)]
    //     .then(res => this.setState({ movie: res.data }))
    //     .catch(err => console.log(err));
    // }

    render() {
      return(
        <div class="col s12 m12 l4">
          <div class="icon-block">
            <h1 class="center white-text"><i class="material-icons">ondemand_video</i></h1>
            <h6 class="center">Movie of the Week</h6>
            <p class="light">{ this.state.movie.title }</p>
            <iframe title= "movie" src="https://www.youtube.com/embed/oR_e9y-bka0?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <p class="light"><i>Official Trailer</i></p>
            <p class="light" align="left">{ this.state.movie.description } </p>
            <p class="light"><a href="https://itunes.apple.com/us/movie/2001-a-space-odyssey/id285993250">Rent on iTunes</a>
              <br /><a href="https://www.amazon.com/2001-Space-Odyssey-Keir-Dullea/dp/B000HEBCZQ/ref=sr_1_2?s=instant-video&ie=UTF8&qid=1526668766&sr=1-2&keywords=2001+a+space+odyssey">Rent on Amazon</a></p>
          </div>
        </div>

      );
    }
}

export default Movie;