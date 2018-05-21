import React from "react";

const DoctorList = props => (
  <ul className="collection">
    {props.results.map(result => (
      <li className="collection-item" key={result.id}>
        <img
          alt={result.name}
          className="img-fluid"
          src={result.image}
        />
        <h1> {result.data.name} </h1>
      </li>
    ))}
  </ul>
);

export default DoctorList;