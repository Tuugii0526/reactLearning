import AddTask from "./AddTask";
import TaskList from "./TaskList";
import {ToDoContext} from "./ToDoContext";

  const ToDo=()=>{
return <ToDoContext>
    <h2>Day off in Kyoto</h2>
    <AddTask/>
    <TaskList/>
    </ToDoContext>
}
export default ToDo