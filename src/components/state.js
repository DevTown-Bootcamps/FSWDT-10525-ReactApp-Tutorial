import { getValue } from "@testing-library/user-event/dist/utils";
import React,{useState,useEffect,useContext,createContext} from "react";
// export default function Counter(){

//   const [count,setCount]= useState(0);
 
//   const increment = () =>{
//     setCount(count+1);
//   };

//   const decrement = () =>{
//     setCount(count-1);
//   }

//   return(
//     <div>
//         <h2>{count}</h2>
//         <button onClick={increment}>increment</button>
//         <button onClick={decrement}>Decrement</button>
//     </div>
//   )

// }

// useState useEffect(
// export default function Counter(){
//    const [count,setCount]=useState(0);

//    useEffect(()=>{
//     console.log('Componenet Mounted');
//     return ()=> console.log('Componenet used')
//    },[count]);

//    return(
//      <div>
//        <p>You clicked the button {count} times</p>
//        <button onClick={()=> setCount(count+1)}>Click to increase</button>
//      </div>
//    )
// };

const ThemeContext=createContext();

function Context(){
   return (
      <ThemeContext.Provider value="dark">
         <Toolbar/>
      </ThemeContext.Provider>
   )
};

function Toolbar(){
  return <ThemeButton />;
}

function ThemeButton(){
  const theme=useContext(ThemeContext);
  return <button style={{background: theme==='dark'?'#333':'#fff'}}>Click me</button>
}
