import React from "react";

function Profile({name,age,country}){
   return(
     <div>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>Country: {country}</p>
     </div>
   )
};

export default Profile;