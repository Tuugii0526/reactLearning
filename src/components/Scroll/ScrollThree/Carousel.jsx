import {useState,useRef,useEffect} from 'react'
import { flushSync } from 'react-dom'
export const Carousel=({children:slides})=>{
  const [currentIndex,setCurrentIndex]=useState(0)
  const selectedRef=useRef(null)
  const  goToPrev=()=>{
    flushSync(()=>{
        setCurrentIndex(index=>(index-1<0 ? slides.length-1 : index-1))
    })
    selectedRef.current.scrollIntoView({
        behavior:'smooth',
        inline:'center'
    })
     }
     const goToNext=()=>{
        flushSync(()=>{
            setCurrentIndex(index=>(index+1>slides.length-1 ? 0 : index+1))

        })
   selectedRef.current.scrollIntoView({
    behavior:'smooth',
    inline:'center',

})
}
useEffect(()=>{
const intervalId=setInterval(goToNext,3000)
return ()=>clearInterval(intervalId)
},[])
    return <div className="overflow-hidden relative">
        <div className="flex transition-transform ease-out duration-500" style={{
            transform:`translateX(-${currentIndex*100}%)`
        }}>{slides}</div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
            <button className=" p-1 rounded-full shadow bg-slate-400 text-gray-800 hover:bg-white " onClick={goToPrev}>&lt;</button>
            <button className="p-1 rounded-full shadow bg-slate-400 text-gray-800 hover:bg-white" onClick={goToNext}>&gt;</button>
        </div>
        <div className='absolute inset-x-0 bottom-5 w-4/5 mx-auto flex  items-center gap-2 overflow-scroll px-2'>
        {slides.map((_,index)=>{
            return <div className={`flex-shrink-0 w-fit h-fit rounded-full bg-slate-500  ${index===currentIndex  ? 'p-2 ' :'opacity-50'}`} ref={index===currentIndex ? selectedRef : null} style={{
                scrollbarWidth:'30px'
            }}>{index}</div>
        })}
        </div>
    </div>
}