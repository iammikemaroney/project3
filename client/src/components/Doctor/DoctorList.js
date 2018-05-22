
import React from "react";

const DoctorList = props => (
  <ul className="collection">
    {props.results.map((result, i) => (
      <div  key={i}>
        <img
          alt={result.profile.first_name}
          className="img-fluid"
          src={result.profile.image_url}
        />
        <h1> {result.practices[0].name}</h1>

        <h3> {result.practices[0].visit_address.street} </h3>
        <h3> {result.practices[0].visit_address.city} {result.practices[0].visit_address.state} {result.practices[0].visit_address.zip} </h3>  
        <h4> Phone # : {result.practices[0].phones[0].number}  </h4> 

        
      </div>
    ))}
  </ul>
);

export default DoctorList;