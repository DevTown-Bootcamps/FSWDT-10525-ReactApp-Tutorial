import React ,{useState} from "react";

function LoginControl(){
     const [isloggedin,setloggedin]=useState(false);

     const toggleLogin=()=>{
        setloggedin(!isloggedin);
     }

     return(
        <div>
            <button onClick={toggleLogin}>
               {isloggedin ? 'Logout':'Login'}
            </button>

            {isloggedin && <h1>Welcome back!</h1> }
            {!isloggedin && <p>Please log into your account</p>}
        </div>
     )
}
export default LoginControl;