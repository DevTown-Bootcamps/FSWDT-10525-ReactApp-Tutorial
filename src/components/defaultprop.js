import React from "react";
import PropTypes from "prop-types";

function DefaultProfile(props){
 return(
    <div>
        <h2>Name: {props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Country: {props.country}</p>
    </div>
 );
}

DefaultProfile.defaultProps={
    name: "Guest",
    age:18,
    country:"Unknown"
}

DefaultProfile.propTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    country:PropTypes.string
};

export default DefaultProfile;