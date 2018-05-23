import React from "react";
import Movie from "./Movie";
import StrainContainer from "./components/Strain/StrainContainer";
import Album from "./Album";

const WeeklyContainer = () => (
  <div>
    <Movie/>
    <Album/>
    <StrainContainer/>
  </div>
);

export default WeeklyContainer;