import {useState,useRef} from 'react'
// import { flushSync } from 'react-dom'
export const WithoutFlushSync=()=>{
const listRef=useRef(null)
const [text,setText]=useState('')
const [toDo,setToDo]=useState(initialToDos)
const handleAddTodo=()=>{
    setText('')
    setToDo([...toDo,{
        id:nextId++,text:text
    }])
    listRef.current.lastChild.scrollIntoView(
        {
            behaviour:'smooth',
            block:'nearest'
        }
    )
} 

return <div className='h-[400px] w-[500px] flex flex-col gap-5 overflow-y-scroll p-4'>
<div className='flex gap-2'>
    <button className='ring-1 p-1 ' onClick={handleAddTodo}>Add</button>
    <input type="text" value={text} className='ring-1' onChange={(e)=>{
        setText(e.target.value)
    }} />
</div>
<ul ref={listRef}>
    {toDo.map(t=><li key={t.id} className='list-disc'>
        {t.text}
    </li>)}
</ul>
</div>
}
let nextId=0;
const initialToDos=[];
for(let i=0;i<20;i++)
{
   initialToDos.push(
    {
        id:nextId++,
        text:'Todo #'+(i+1)
    }
   )
}