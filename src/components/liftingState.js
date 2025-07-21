import { useState } from "react";

function Parent(){
    const [message,setMessage]=useState('');

    return(
        <>
            <ChildInput onMessageChange={setMessage}/>
            <ChildDisplay message={message}/>
        </>
    )
}

function ChildInput({onMessageChange}){
   return(
    <input onChange={(e)=>onMessageChange(e.target.value)} placeholder="Type Something"/>
   );
}

function ChildDisplay({message}){
    return <h3>Message: {message}</h3>
}