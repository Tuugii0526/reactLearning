import {useState} from 'react'
import { initialTravelPlan } from './places'
export const  AvoidDeeplyNestedState=()=>{
    const [plan ,setPlan]=useState(initialTravelPlan)
    const handleComplete=(parentId,childId)=>{
        console.log('Iam working')
        console.log('parent id:',parentId)
        console.log('child id:',childId)
       const parent= plan[parentId]
       const nextParent={
        ...parent,
        childIds:parent.childIds.filter(id=>id!==childId)
       }
       setPlan({...plan,[parentId]:nextParent})
    }
    const PlaceTree =({id,placesById,parentId,onComplete})=>{
    const place=placesById[id]
    const childIds=place.childIds
    return (
        
       <>
        <li className='relatvie left-2 m-2'>
            {place.title}
            <button className='ring-1 rounded-sm ml-2' onClick={()=>{
                onComplete(parentId,id)
            }} >Complete</button>
            <ol className='list-decimal list-inside relative left-10'>
                {childIds.length>0 && childIds.map(childId=>(<PlaceTree key={childId} id={childId} parentId={id} placesById={placesById} onComplete={onComplete}/>
                ))}
            </ol>
        </li>
       </>
    )
    }
    const root=plan[0]
    const planetIds=root.childIds
    return <>
<h2>Places to visit</h2>
<ol className='list-decimal list-inside relative left-10'>
        {(planetIds.map(id=>{
    return <PlaceTree key={id} id={id} placesById={plan} parentId={0} onComplete={handleComplete} />
    }))}
    </ol>
    </>
}
