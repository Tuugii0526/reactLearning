import { createContext,useReducer } from "react";
const TasksContext=createContext(null)
const TasksDispatchContext=createContext(null)
const initialState=[
    {
        id:0,
        title:'Be aware of yourself',
        done:true
    }
]
const reducerFunction=(tasks,action)=>{
switch(action.type)
{
    case "added":
        {
        return [...tasks,action.task]
        }
    case "edited":
        {
            
        }
}
}
export const ToDoContext=({children})=>{
    const [tasks,dispatch]=useReducer(reducerFunction,initialState)
    return <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
}