import React from "react";
// import Movie from "./Movie";
// import Strain from "./StrainContainer";
import Album from "./Album";

const WeeklyContainer = () => (
  <div>
    <div style={{backgroundColor: "#00acc1"}}>
    <br />
    <h4 className="center white-text">Recommendations of the Week</h4>
      {/* <Movie/> */}
      <Album/>
    </div>
  </div>
);

export default WeeklyContainer;