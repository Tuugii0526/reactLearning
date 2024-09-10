import {useState,useRef} from 'react'
import { flushSync } from 'react-dom';
export const FlushSync=()=>{
const [text,setText]=useState('')
const [toDos,setToDos]=useState(initialToDos)
const listRef=useRef(null)
const handleAddTodo=()=>{
    const newToDo={id:nextId++,text:text}
    setText('')
    flushSync(()=>{
        setToDos([...toDos,newToDo])
    })
    listRef.current.lastChild.scrollIntoView({
        behavior:'smooth',
        block:'nearest'
    })

}
return <div className='h-[400px] w-[500px] flex flex-col gap-5 overflow-y-scroll p-20'>
    <div className='flex gap-2'>
    <button className='ring-1 p-1 ' onClick={handleAddTodo}>Add</button>
    <input type="text" value={text} className='ring-1' onChange={(e)=>{
        setText(e.target.value)
    }} />
</div>
<ul ref={listRef}>
    {toDos.map(t=><li key={t.id} className='list-disc'>
        {t.text}
    </li>)}
</ul>
</div>
}
let nextId=0;
const initialToDos=[]
for(let i=0;i<20;i++)
{
    initialToDos.push({
        id:nextId++,
        text:'Todo #'+(i+1)
    })
}