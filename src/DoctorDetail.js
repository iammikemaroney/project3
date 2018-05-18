import React from "react";

const DoctorDetail = props => (
  <div className="text-center">
    <img
      alt={props.title}
      className="img-fluid"
      src={props.src}
      style={{ margin: "0 auto" }}
    />
    <h3>Doctor Name: {props.practices.name}</h3>
    <h3>Location: {props.practices.visit_address.street}</h3>
    <h3>Phone Number: {props.practices.phones.number}</h3>
  </div>
);

export default DoctorDetail;
