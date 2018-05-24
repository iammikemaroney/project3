import React from "react";
// import Food from "./pages/Food.js"
import "../css/style.css";
import { Link } from 'react-router-dom';
import WeeklyContainer from "./Weekly/WeeklyContainer";

const Navbar2 = () => (
  <div>
    <nav className="nav-bar" role="navigation">
      <div className="nav-wrapper container">
        <a id="logo-container" href="/" className="brand-logo">cloud 9 buddy</a>
        <ul id="nav-links" className="right hide-on-med-and-down">
          <li><Link to="/food"> food & recipes</Link></li>
          <li><a href="">rec of the week</a></li>
          <li><a href="#dr">dr locator</a></li>
        </ul>

        <ul id="nav-mobile" className="sidenav">
          <li><a href="pages/food">food & recipes</a></li>
          <li><a href="#rec">rec of the week</a></li>
          <li><a href="#dr">dr locator</a></li>
        </ul>
        <a href="/" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      </div>
    </nav>
  </div>
);

export default Navbar2;