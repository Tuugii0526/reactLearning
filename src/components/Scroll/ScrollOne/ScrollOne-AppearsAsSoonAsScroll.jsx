import {Box} from './Box'
import React, {useRef,useEffect} from 'react'
export const ScrollOne=({number})=>{
   const boxes=[]
   for(let i=0;i<number;i++)
   {
    boxes.push(<Box key={i} minusOrPlus={i%2 ? 'translate-x-[500px]':'-translate-x-[500px]'}/>)
   }
    return <div className="container w-full h-fit *:my-1 flex flex-col items-center bg-slate-300 overflow-scroll">
    <h1>Scroll to see 👀 the animation</h1>
   {
    boxes
   }
    </div>
}