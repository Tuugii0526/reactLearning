import {useState} from 'react'
export const GroupRelatedState=()=>{
const [position,setPosition]=useState({x:0,y:0})
return <div className='w-full h-screen relative shadow-sm ring-1' onPointerMove={(e)=>{
    setPosition({
        x:e.clientX,
        y:e.clientY,
    })

}}>
<div  style={{
    position:'absolute',
    width:'20px',
    height:'20px',
    backgroundColor:'red',
    borderRadius:'50%',
        transform:`translate(${position.x}px,${position.y}px)`

}}>

</div>
</div>
    
}