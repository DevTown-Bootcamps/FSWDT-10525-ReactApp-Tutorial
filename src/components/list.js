import React from "react";

export default function NameList(){
    const names=['Anshul','Riya','John'];


    return(
        <ul>
            {names.map((name,index)=>(
                <li key={index}>{name}</li>))}
        </ul>
    )
}