import { useState,useEffect } from "react"
export const SuppressingLinter=()=>{
const [count,setCount]=useState(0)
const [increment,setIncrement]=useState(1)
console.log("Iam working")
function onTick(){
    setCount(count+increment)
    console.log('count :',count)
}
useEffect(()=>{
let intervalId=setInterval(onTick,1000)
return ()=>{clearInterval(intervalId)}
},[])
return <div>
    <h1>Counter:{count}</h1>
</div>
}