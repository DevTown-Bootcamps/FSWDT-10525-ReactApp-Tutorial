import React,{useState} from "react";

// export default function NameForm(){
//   const [name,setName]=useState("");

//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     alert("A name has been added:"+name);
//   };

//   return(
//     <form onSubmit={handleSubmit}>
//         <label>
//             Name:
//             <input type="text" value={name} onChange={(e)=>{ setName(e.target.value)}}/>
//         </label>
//     </form>
//   )
// }


export default function MultipInput(){
   const [form,setForm]=useState({
     name:"",
     email:""
   });

   const handleChange=(e)=>{
     setForm({
        ...form,
        [e.target.name]:e.target.value
     });
   };

   const handleSubmit=(e)=>{
     e.preventDefault();
     console.log(form);
   };

   return(
    <form onSubmit={handleSubmit}>
       <input type="text" name="name" value={form.name} onChange={handleChange}/>
       <input type="text" name="email" value={form.email} onChange={handleChange}/>
       <button type="submit">Submit</button>
    </form>
   )
}