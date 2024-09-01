import {useState} from 'react'
const Counter=()=>{
    const [counter,setCounter]=useState(0)
    const [hover,setHover]=useState(false)
    let className='counter'
    if(hover)
    {
        className+=' hover'
    }
    return <div className={className}
    onPointerEnter={()=>{
        setHover(true)
    }
}
onPointerLeave={()=>{
    setHover(false)
}}
    >
        <h2>{counter}</h2>
        <button className='ring-1' onClick={()=>{setCounter(counter+1)}} >Add one</button>
       
    </div>
}
export  const DifferentComponentsAtTheSamePositionResetState=()=>{
const [isHavingBreak,setIsHavingBreak]=useState(false)
return <div>
    {isHavingBreak ? 
    (<p>
        See you later
    </p>) :
    (
        <Counter/>
    )
    }
     <label htmlFor="">
            <input type="checkbox" checked={isHavingBreak} onChange={(e)=>{
                setIsHavingBreak(e.target.checked)
            }}/>
            Take a break
        </label>
</div>
}
