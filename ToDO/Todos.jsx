  import { useState } from "react";
import "./Todo.css"
import { Form } from "./Form";
import { TODO_Data_List } from "./Todo_data_list";


const key = "reaact-todo"
  export const Todo=()=>{

    const [task,setTask]=useState(()=>{

    const rawtools =localStorage.getItem(key)

    if (!rawtools) {
     return []; 
    }
 return JSON.parse(rawtools);

  });
  
  


const HandleFormSubmit =(inputvalue)=>{
  const {id,content,checked} = inputvalue; 

if (!content) {
  return;
}

const matchedcontent = task.find((curTask) => curTask.content === content);


if (matchedcontent) {
  return;
}

setTask((previoustask)=>[...previoustask,{id:id,content:content,checked:checked} ])
}

//add data to local storage 
localStorage.setItem(key,JSON.stringify(task));



const Handledeletedata =(curTask)=>{
  
  
  const updatedtask = task.filter((task) => task.content !== curTask);

  return setTask(updatedtask);
};


const HandlecheckedTodo = (value) => {
  console.log(value);
  
  const updatedTasks = task.map((curTask) => {
    console.log("hiii");
    
    if (curTask.content === value) {
      console.log("hii2");
      
      return { ...curTask, checked: !curTask.checked };
    } else {
      return curTask; // fixed typo
    }
  });
  setTask(updatedTasks);
};








  return(
    <>
    <section className="todo-container">
      <header>
  <h1>Todo List</h1>
    </header>



  <Form OnTodoAdd={HandleFormSubmit}/>

<section className="myUnOrdList">
<ul>
{

  task.map((curTask)=>{
    
  
return(



<TODO_Data_List key={curTask.id} 
 task={curTask} 
 indexid={curTask.id} 
 checked={curTask.checked}
 Handledeletedata = {Handledeletedata}
 HandlecheckedTodo={HandlecheckedTodo}
 />
)

  })
}

</ul>


 
</section>
<button className="clear-btn" onClick={() => setTask([])}> Delete All</button>
  </section>

    </>)
  };