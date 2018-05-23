import React from "react";
import "../css/style.css";

const Footer = () => (

  <footer class="page-footer cyan">
    <div class="container">
      <div class="row">
        <div class="col l9 s12">
          <h5 class="white-text">Developer Team</h5>
          <p class="grey-text text-lighten-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente libero magnam quia temporibus, laborum suscipit minus. Explicabo molestiae, ad illum accusantium cum hic nulla odio asperiores porro, magni aspernatur.</p>
        </div>

        <div class="col l3 s12">
          <h5 class="white-text">Connect</h5>
          <ul>
            <li><a href="/food">food & recipes</a></li>
            <li><a href="#rec">rec of the week</a></li>
            <li><a href="#dr">dr locator</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        ©2018<a class="cyan-text text-lighten-3" href=""> Cloud9Buddy</a>
      </div>
    </div>
  </footer>
);

export default Footer;