import {useState} from 'react'
export const StateIsTiedToAPositionInTheRenderTree=()=>{
    const counter=<Counter/>
    return <>
        {counter}
        {counter}
    </>
     
}
function Counter(){
const [counter,setCounter]=useState(0)
const [isHovering,setIsHovering]=useState(false)
let className='counter'
if(isHovering)
{
className+=' hover'
}
return (<div className={className}
onPointerEnter={()=>{setIsHovering(true)}}
onPointerLeave={()=>{setIsHovering(false)}}
>
    <h2>{counter}</h2>
    <button className='ring-1 bg-white' onClick={()=>{setCounter(counter+1)}}>Add one</button>
</div>)

}