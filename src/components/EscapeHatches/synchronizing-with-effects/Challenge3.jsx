import {useState,useEffect} from 'react'
const Counter=()=>{
    const [counter,setCounter]=useState(0)
    useEffect(()=>{
        function handleAdd(){
            setCounter(c=>c+1)
        }
       const timeId= setInterval(handleAdd,1000)
       return ()=>clearInterval(timeId)
    },[])
    return <p className='font-bold'>{counter}</p>
}
export const Challenge3=()=>{
    const [isShowing,setIsShowing]=useState(false)
return <div>
    <button className='ring-1 p-1 ' onClick={()=>{
        setIsShowing(!isShowing)
    }}>{isShowing ? 'Hide counter' : 'Show counter'}</button>
    <br />
    {
        isShowing && <Counter/>
    }
</div>
}