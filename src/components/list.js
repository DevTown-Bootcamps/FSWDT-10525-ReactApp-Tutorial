import React,{useState} from "react";

// export default function NameList(){
//     const names=['Anshul','Riya','John'];


//     return(
//         <ul>
//             {names.map((name,index)=>(
//                 <li key={index}>{name}</li>))}
//         </ul>
//     )
// }

export default function ToDoList(){
    const [tasks,setTasks]=useState([]);
    const [input,setInput]=useState("");

    const handleAdd=()=>{
        if(input.trim()){
        setTasks([...tasks,{id:Date.now(),text:input}]);
        setInput('');
        }
    }

    const handleDelete=(id)=>{
        setTasks(tasks.filter(tasks=>tasks.id!==id));
    }

    return(
        <div>
            <h2>ToDo List</h2>
            <input type="text" placeholder="Enter your task" value={input}
                onChange={(e)=>setInput(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>

            <ul>
                {tasks.map(task=>(
                    <li key={task.id}>
                        {task.text}
                        <button onClick={handleDelete}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
    
}