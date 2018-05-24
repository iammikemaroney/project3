import React from "react";
import "../css/style.css";
import Login from "./Login";
import SignUp from "./Signup";
import Header from "../img/c9-header-cloud.png";
// import bokeh from "../img/first.jpg";
import {Parallax} from "react-materialize";

const bokeh = "../img/first.jpg";

const styles = {
 header: { 
   position: "relative",
 
  height: "500px"
},
icon: {
  height: "400px",
  width: "500px",
  marginRight: "auto",
  marginTop: "auto"
},
button: {
  position: "absolute",
  bottom: "800px"
}, 
parallax: {
  backgroundColor: "url(" + bokeh + ")",
}
}

const Jumbotron = () => (
  

  <div>

<Parallax imageSrc= "http://materializecss.com/images/parallax1.jpg"/>
    <div className="section white">
    <div style={styles.header}>
    <div className="section no-pad-bot">
      <div className="container">
        <div className="row center">
        <img style={styles.icon} src={Header} alt="c9"/>
          <a style={styles.button} className="waves-effect waves-light btn-large amber" id="signup-button"><i className="material-icons right">account_circle</i>Sign Up</a>
          
          {/* <Login/> */}
          {/* <SignUp/>   */}
          

        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  

);

export default Jumbotron;