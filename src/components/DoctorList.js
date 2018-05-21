import React from "react";

const DoctorList = props => (
  <ul className="collection">
    {props.results.map(result => (
      <div key={result.id}>
        <img
          alt={result.profile.first_name}
          className="img-fluid"
          src={result.profile.image_url}
        />
        <h1> {result.profile.first_name} {result.profile.last_name}</h1>
        
      </div>
    ))}
  </ul>
);

export default DoctorList;