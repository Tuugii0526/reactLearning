import { useRef,useState,useEffect } from "react"
export const ManagingAListOfRefsUsingRefCallback=()=>{
 const itemsRef=useRef(null)
 const [number,setNumber]=useState(1)
const [images,setImages]=useState([])
let previousElement=useRef(null);
let currentElement =useRef(null);
useEffect(()=>{
    fetch(`https://dev.to/api/articles?per_page=1000`).then(response=>response.json()).then(data=>{setImages(data.map(d=>d?.cover_image).filter(img=>img))})
},[])
const getMap=()=>{
    if(!itemsRef.current)
    {
        itemsRef.current=new Map()
        return itemsRef.current
    }
    return itemsRef.current
    
}
const goToTheImage=(number)=>{
    const map=getMap()
    previousElement.current= currentElement.current
    if(previousElement.current!==null)
    {
        previousElement.current.classList.remove('scrolledInto')
    }
    currentElement.current=map.get(images[number-1])
    currentElement.current.scrollIntoView({
        behavior:'smooth',
        block:'nearest',
        inline:'center'
    })
    currentElement.current.classList.add('scrolledInto')
    
}
 return <>
 <nav className="sticky top-0 h-5 w-[95%] rounded-md ring-2 ring-yellow-600 flex items-center justify-around *:bg-orange-400 *:rounded-md" >
  <input className="p-1 w-40" type="number" placeholder={`between 1 and ${images.length}`} value={number} onChange={(e)=>{
    if(0>=e.target.value  )
    {
        setNumber('')
    }
    else if(e.target.value>images.length)
    {setNumber(images.length)}
    else
    {

        setNumber(e.target.value)
    }
    }} min={'1'} max={`${images.length}`}/>  <button onClick={()=>{
        if(number=='')
        {
            goToTheImage(1)
        }
        else
        {
            goToTheImage(number)
        }
    }} >Go to #{number}</button>
 </nav>
 <ul className="w-[400px] h-[300px] flex flex-col items-center gap-4 overflow-scroll">
    {images.map((img,i)=><li key={i} ref={(node)=>{
      let map=getMap()
       if(node)
       {
           map.set(img,node);
       }
       else
       {
        map.delete(img);
       }
    }}>
        <img src={img} alt="" width={'80%'} className="h-[80px] lg:h-[100px]"/>
    </li>)}
 </ul>
 </>
}