import {useState,useRef} from 'react'
export const StopwatchTwo=()=>{
const [startTime,setStartTime]=useState(null)
const [now,setNow]=useState(null)
const intervalRef=useRef(null)
let secondsPassed=0
if(startTime!=null && now!=null)
{
    secondsPassed=(now-startTime)/1000
}
const handleStart=()=>{
    setStartTime(Date.now())
    setNow(Date.now())
    clearInterval(intervalRef.current)
    intervalRef.current=setInterval(()=>{
        setNow(Date.now())
    },10)
}
const handleStop=()=>{
    clearInterval(intervalRef.current)
}
return <>
<h1>Time: {secondsPassed}</h1>
<button onClick={handleStart}>Start</button>
<button onClick={handleStop}>Stop</button>
</>
}