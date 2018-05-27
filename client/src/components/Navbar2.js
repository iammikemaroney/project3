import React from "react";
// import Food from "./pages/Food.js"
import "../css/style.css";
import { Link } from 'react-router-dom';
// import WeeklyContainer from "./Weekly/WeeklyContainer";
// import {Row, Input} from "react-materialize";
import Signup from "./Signup";

const styles={
  nav: {
    marginLeft: "15px"
  }
}
const Navbar2 = () => (
  <div>
    <nav className="nav-bar" role="navigation">
      <div className="nav-wrapper">
        <a style={styles.nav} id="logo-container" href="/" className="brand-logo">cloud 9 buddy</a>
        <Signup/>
        {/* <ul id="nav-links" className="right hide-on-med-and-down">
          <li><Link to="/food"> food & recipes</Link></li>
          <li><a href={WeeklyContainer}>rec of the week</a></li>
          <li><a href="#dr">dr locator</a></li>
        </ul> */}


        {/* <ul id="nav-mobile" className="sidenav">
          <li><a href="pages/food">food & recipes</a></li>
          <li><a href="#rec">rec of the week</a></li>
          <li><a href="#dr">dr locator</a></li>
        </ul> */}
        {/* <a href="/" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a> */}
      </div>
    </nav>
  </div>
);

export default Navbar2;