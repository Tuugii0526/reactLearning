import {useRef} from 'react'
export const ClickMe=()=>{
   let ref =useRef(0)
    const handleClick=()=>{
        ref.current=ref.current+1
        alert(`You click ${ref.current} times`)
    }
    return <button onClick={handleClick}>click me!</button>
}