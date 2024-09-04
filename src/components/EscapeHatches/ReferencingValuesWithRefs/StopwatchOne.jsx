import {useState} from 'react'
export const StopwatchOne=()=>{
const [startTime,setStartTime]=useState(null)
const [now,setNow]=useState(null)
const handleStart=()=>{
    setStartTime(Date.now())
    setNow(Date.now())
    setInterval(()=>{
        setNow(Date.now())
    },10)
}
let secondsPassed=0;
if(startTime!=null && now!=null)
{
    secondsPassed=((now-startTime)/1000)
}
return <>
<h1>Time: {secondsPassed}</h1>
<button onClick={handleStart}>Start</button>
</>
}