import {useState} from 'react'
export const SameComponentAtTheSamePosition=()=>{
const [isFancy,setIsFancy]=useState(false)
return <div>
{isFancy ? (<Counter isFancy={true} />) :
(<Counter isFancy={false} />)}
<label >
<input type="checkbox" checked={isFancy} onChange={(e)=>{
    setIsFancy(e.target.checked)
}} />
Use fancy styling
</label>
</div>

    
}
const Counter=({isFancy})=>
    {
        const [counter,setCounter]=useState(0)
        const [isHovering,setIsHovering]=useState(false)
        let className='counter'
        if(isHovering)
        {
        className+=' hover'
        }
        if(isFancy)
        {
            className+=' fancy'
        }
        return (<div className={className}
        onPointerEnter={()=>{setIsHovering(true)}}
        onPointerLeave={()=>{setIsHovering(false)}}
        >
            <h2>{counter}</h2>
            <button className='ring-1 bg-white text-black' onClick={()=>{setCounter(counter+1)}}>Add one</button>
        </div>)
        
}