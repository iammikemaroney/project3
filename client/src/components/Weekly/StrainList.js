import React from "react";
// import "../styles/strain.css";

const styles = {
  weed: {
      height: "250px",
      marginLeft: "20px"
  }
};

const StrainList = props => (
  
  <ul className="strainSection center white-text">
    {props.results.map(result => (
      <div key={result.id}>
        <p className="list"> Strain: {result.name} </p>
        <img
          style={styles.weed}
          alt={result.name}
          className="img-fluid"
          src={result.image}
        />
        <p className="list"> Lineage: {result.genetics.names} </p>
        <p className="list"> Company: {result.seedCompany.name} </p>
        <p> <a className="strainLink" href={result.url} target="_blank"><strong>Strain Info</strong></a> </p>
      </div>
    ))}
  </ul>
);

export default StrainList;