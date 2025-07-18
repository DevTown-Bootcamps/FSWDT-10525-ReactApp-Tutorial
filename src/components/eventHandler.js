//function components
import React, {useState,Component} from "react";

// function ButtonClicker(){
//     const [count,setCount]= useState(0);

//     const handleClick= () =>{
//         setCount(count+1);
//     };

//     return(
//         <div>
//             <h2>Click counter: {count}</h2>
//             <button onClick={handleClick}></button>
//         </div>
//     )
// }

// export default ButtonClicker;

// class ClassClicker extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             count:0
//         }

//         this.handleClick=this.handleClick.bind(this);
//     };

//     handleClick(){
//         this.setState({count:this.state.count+1});
//     }

//     render(){
//         return(
//             <div>
//                 <h2>Class Click counter: {this.state.count}</h2>
//                 <button onClick={this.handleClick}>Click Me</button>
//             </div>
//         )
//     }


// }

// export default ClassClicker;

//onClick,onchange,onsubmit,onmousedown,onmouseenter,onmouseleave,onmouseout,onkeydown,onkeyup;



export default function FormInput(){
    const [input,setInput]=useState('');

    const handleChange = (e) =>{
        setInput(e.target.value);
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Submited value: ${input}`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your name" value={input} onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
    )
}

// Create a function components and take in two props value, and create two use state in this case and update 
// the props value in the use state.Print the value on screen

// import React, { useState } from 'react';
// function TwoValueComponent({ value1, value2 }) {
//   const [firstValue, setFirstValue] = useState(value1);
//   const [secondValue, setSecondValue] = useState(value2);
 
//   return (
//     <div>
//       <h2>Props passed into state:</h2>
//       <p>First Value: {firstValue}</p>
//       <p>Second Value: {secondValue}</p>
//       <button onClick={updateFirst}>Update First Value</button>
//       <button onClick={updateSecond}>Update Second Value</button>
//     </div>
//   );
// }
// export default TwoValueComponent;