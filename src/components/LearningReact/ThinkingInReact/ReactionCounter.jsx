import {useState} from 'react'
export const ReactionCounter=()=>{
   const [laughCount,setLaughCount]=useState(0)
   const [loveCount,setLoveCount]=useState(0)
   const addLaughCount=()=>{
    setLaughCount(laughCount+1)
   }
   const addLoveCount=()=>{
    setLoveCount(loveCount+1)
   }
    return( <div className="w-[200px] h-[100px] p-3 flex flex-col justify-between bg-slate-400 rounded-xl">
    <img src="" alt="" className="w-full h-3/5"/>
    <div className="w-full h-1/5 flex justify-around">
    <span onClick={addLaughCount}>😅<span>{laughCount}</span></span>
    <span onClick={addLoveCount}>💗<span>{loveCount}</span></span>
    </div>
   </div>)
   
}