import {useState} from 'react'
export const RenderingTakesASnapshotInTime=()=>{
    const [number,setNumber]=useState(0)
    return  <div className="w-[200px] h-[100px] flex flex-col justify-center border-[2px] border-black">
   Number is: {number}
   <button className='border-[2px] border-black bg-slate-400' onClick={()=>{
    setNumber(number+1)
    setNumber(number+1)
    setNumber(number+1)

   }}> +3</button>

    </div>
}