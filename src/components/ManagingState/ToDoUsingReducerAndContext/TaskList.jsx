import { useContext } from "react"
const TaskList=()=>{
const tasks=useContext(TasksContext)
return <ul>
    {tasks.map(task=>{
        <li></li>
    })}
</ul>
}
export default TaskList