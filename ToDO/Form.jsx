
import { useState } from "react";

export const Form= ({OnTodoAdd})=>{
  const [inputvalue,setinputvalue]=useState({id: "",
    content: "",
    checked: false});

  const HandleInputChange = (value)=>{
    setinputvalue({id:value,content:value,checked:false})
  }


  const HandleFormSubmit=(event)=>{
event.preventDefault();   //ano use em ty k submit button per click kre to re render no ty ena mate
    OnTodoAdd(inputvalue);
    setinputvalue({id:"",content:"",checked:false});

  }
  

 

  return(
<>
    <section className="form">

  <form action="" onSubmit={HandleFormSubmit}>
    
    <div >
      <input type="text" className="todo-input" autoComplete="off"  value={inputvalue.content} onChange={(event)=>HandleInputChange(event.target.value)}/>
    </div>

    <div>
<button type="submit" className="todo-btn">Add task </button>
    </div>
  </form>

  </section>
  </>
  )
}