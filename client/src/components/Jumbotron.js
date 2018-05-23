import React from "react";
import "../css/style.css";
import Login from "./Login";
import SignUp from "./Signup";
import Header from "../img/c9-header-cloud.png";
import bokeh from "../img/bokeh-background.png";
import Parallax from "materialize";



const Jumbotron = () => (

  <div>
     <Parallax src= {bokeh}/>
    <div className="section no-pad-bot">
      <div className="container">
        <div className="row center">

          <a className="waves-effect waves-light btn-large amber" id="signup-button"><i className="material-icons right">account_circle</i>Sign Up</a>
          <Login/>
          <SignUp/>  
          <img src={Header} alt="c9"/>

        </div>
      </div>
    </div>
  </div>

);

export default Jumbotron;