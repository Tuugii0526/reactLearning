import { useContext,useState} from "react"
let nextId=1
const AddTask=()=>{
    const [text,setText]=useState('')
    const dispatch=useContext(TasksDispatchContext)
    const onAddTask=()=>{
        dispatch({
            type:'added',
            task:{
                id:nextId++,
                title:text,
                done:false
            }
        })
    }
return  <div className="flex">
<input className="ring-1 p-1" type="text" value={text} onChange={()=>{
    setText(text)
}}/>
<button onClick={onAddTask}>Add</button>
</div>
} 
export default AddTask