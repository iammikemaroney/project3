import React from "react";
import "../css/style.css";

const Footer = () => (

  <footer className="page-footer cyan">
    <div className="container">
      <div className="row">
        <div className="col l9 s12">
          <h5 className="white-text">Developer Team</h5>
          <p className="grey-text text-lighten-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente libero magnam quia temporibus, laborum suscipit minus. Explicabo molestiae, ad illum accusantium cum hic nulla odio asperiores porro, magni aspernatur.</p>
        </div>

        <div className="col l3 s12">
          <h5 className="white-text">Connect</h5>
          <ul>
            <li><a href="/food">food & recipes</a></li>
            <li><a href="#rec">rec of the week</a></li>
            <li><a href="#dr">dr locator</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        ©2018<a className="cyan-text text-lighten-3" href=""> Cloud9Buddy</a>
      </div>
    </div>
  </footer>
);

export default Footer;