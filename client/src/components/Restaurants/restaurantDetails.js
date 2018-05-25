import React from "react";

const restaurantInfo = props => (
    <div className="text-center">
        <h3>Restaurant Name: {props.name}</h3>
        <h3> Address: {props.location.address}</h3>
        <h3> Average Cost for Two: $ {props.average_costs_for_two}</h3>
        <h3>Restaurant Rating: {props.user_rating.aggregate_rating}</h3>
    </div>
)

export default restaurantInfo;