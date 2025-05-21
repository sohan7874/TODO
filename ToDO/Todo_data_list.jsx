import { GiCheckMark } from "react-icons/gi"
import { TiDelete } from "react-icons/ti"


export const TODO_Data_List = ({task,indexid,Handledeletedata,checked,HandlecheckedTodo})=>{

return(

  <li key={indexid} className="todo-item">
  <span className={checked? "checkList":"notCheckList"}>{task.content}</span>
  <button className="check-btn" onClick={() => HandlecheckedTodo(task.content)}> <GiCheckMark /></button>
  <button className="delete-btn" onClick={()=>Handledeletedata(task.content)}><TiDelete /></button>
    </li>
)

}