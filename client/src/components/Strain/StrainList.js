import React from "react";
// import "../styles/strain.css";

const StrainList = props => (
  <ul className="strainSection">
    {props.results.map(result => (
      <div key={result.id}>
        <img
          alt={result.name}
          className="img-fluid"
          src={result.image}
        />
        <h1 className="list"> Strain: {result.name} </h1>
        <h1 className="list"> Lineage: {result.genetics.names} </h1>
        <h1 className="list"> Company: {result.seedCompany.name} </h1>
        <h1> <a className="strainLink" href={result.url}><strong>Strain Info</strong></a> </h1>
      </div>
    ))}
  </ul>
);

export default StrainList;