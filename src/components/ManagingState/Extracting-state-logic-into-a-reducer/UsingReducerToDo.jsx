import {useReducer} from 'react'
import {useState} from 'react'
let nextId = 1;
const initialTasks = [
  {id: 0, text: 'Be aware of yourself', done: true}
];
const tasksReducer=(tasks,action)=>{
  switch(action.type)
  {
    case 'added':
        {
         return [
            ...tasks,
            {
                id:action.id++,
                text:action.text,
                done:false
            }
         ]
        }
    case 'deleted':
        {
            return tasks.filter(task=>task.id!==action.id)
        }
    case 'edited':
        {
            return tasks.map(task=>{
                if(task.id===action.task.id)
                {
                    return action.task
                }
                else
                {
                    return task
                }
            })
        }
    default :
    {
        throw Error('Unknown action: '+action.type)
    }
  }
}
const Task=({task,onEditTask,onDeleteTask})=>{
    const [isEditing,setIsEditing]=useState(false)
    const [inputTitle,setInputTitle]=useState(task.text)
    return <li  className='flex gap-2 my-2'
    >
       <input type="checkbox" checked={task.done} onChange={(e)=>onEditTask({...task,done:e.target.checked})}/>
       {
          (isEditing) ? <>
            <input className='ring-1' type="text" value={inputTitle} onChange={(e)=>{setInputTitle(e.target.value)}}/>
            <button className='ring-1 rounded-sm ' onClick={()=>{
                onEditTask({...task,text:inputTitle})
                setIsEditing(!isEditing)
                }} > Save</button>
          </> 
          : <>
          <p >{task.text}</p>
          <button className='ring-1 rounded-sm' onClick={()=>{setIsEditing(!isEditing)}}>Edit</button>
          </>
       }
       <button className='ring-1 rounded-sm' onClick={()=>{onDeleteTask(task.id)}}>Delete</button>
    </li>
}
const TaskList=({tasks,onEditTask,onDeleteTask})=>{
   
 return <ul>
    {tasks.map(task=>(<Task key={task.id} task={task} onDeleteTask={onDeleteTask} onEditTask={onEditTask} />))}
 </ul>
}
const AddTaskInput=({onAddTask})=>{
    const [text,setText]=useState('')
    return <label >
        <input className='ring-1 rounded-sm mr-1' type="text" value={text} onChange={(e)=>{
            setText(e.target.value) }}
            placeholder=' Add task'/>
    <button onClick={()=>{onAddTask(text)}}>Add</button>
    </label>
}
export const UsingReducerToDo=()=>{
const [tasks,dispatch]=useReducer(tasksReducer,initialTasks)
const [reverse,setReverse]=useState(false)
const [sort,setSort]=useState(false)
const displayTasks=[...tasks]
if(reverse)
{
    displayTasks.reverse()
}
if(sort)
{
    displayTasks.sort((a,b)=>{
        if(a.text.toLowerCase()<b.text.toLowerCase())
        {
            return -1;
        }
        if(a.text>b.text)
        {
            return 1;
        }
        return 0;
    })
}
const handleAddTask=(text)=>{
dispatch({
type:'added',
id:nextId++,
text:text
})
}
const handleDeleteTask=(id)=>{
    dispatch({
        type:'deleted',
        id:id
    })
}
const handleEditTask=(task)=>{
    dispatch({
        type:'edited',
        task:task
    })
}
return <div>
   <div className='flex '>
   <label >
        <input type="checkbox" checked={reverse} onChange={(e)=>{setReverse(e.target.checked)}}/>
        Reverse tasks
    </label>
    <label >
        <input type="checkbox" checked={sort} onChange={(e)=>{setSort(e.target.checked)}}/>
        Sort tasks alphabetically
    </label>
   </div>
<AddTaskInput onAddTask={handleAddTask}/>
<TaskList tasks={displayTasks} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask}/>
</div>
}