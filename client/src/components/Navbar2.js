import React from "react";
import "../css/style.css";
const Navbar2 = () => (
  <div>
    <nav class="nav-bar">
      <div class="nav-wrapper container">
        <a id="logo-container" href="/" class="brand-logo">cloud 9 buddy</a>
        <ul id="nav-links" class="right hide-on-med-and-down">
          <li><a href="food.html">food & recipes</a></li>
          <li><a href="#rec">rec of the week</a></li>
          <li><a href="#dr">dr locator</a></li>
        </ul>

        <ul id="nav-mobile" class="sidenav">
          <li><a href="food.html">food & recipes</a></li>
          <li><a href="#rec">rec of the week</a></li>
          <li><a href="#dr">dr locator</a></li>
        </ul>
        <a href="/" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      </div>
    </nav>
  </div>
);

export default Navbar2;