import { useState } from "react"
import { Container } from "./Container"
let initialCounters=[0,0,0]
export const ReplacingArray=()=>{
    const [counters,setCounters]=useState(initialCounters)
    const handleIncrementClick=(i)=>{
        const nextCounters=counters.map((counter,index)=>{
          if(index===i)
          {
            return counter+1
          }
          else
          {
            return counter
          }
        })
        setCounters(nextCounters)
    }
    return <Container>
    <ul className="list-disc list-inside">
    {
        counters.map((counter,index)=>{
            return <li key={index}>{counter} <button className="border-[1px ] border-black bg-slate-400" onClick={()=>handleIncrementClick(index)}>+1</button></li>
        })
     }
    </ul>
    </Container>
}