import { useImmer } from "use-immer"
import { initialTravelPlan } from "./places"
export const ImmerAvoidDeeplyNestedState=()=>{
    const root =initialTravelPlan[0]
    const planetChildrenIds=root.childIds
    console.log('planet children ids:',planetChildrenIds)
    const [plan ,updatePlan]=useImmer(initialTravelPlan)

    const handleComplete=(parentId,childId)=>{
    updatePlan(draft=>{
    const parent=draft[parentId]
    parent.childIds=parent.childIds.filter(id=>id!==childId)
    deleteAllChildren(childId)
    function deleteAllChildren(id){
     const place=draft[id]
     place.childIds.forEach(deleteAllChildren)
     delete draft[id]
    }
    })
    }
    const PlaceTree =({id,placesById,parendId,onComplete})=>{
     const place=placesById[id]
     console.log('place is:',place)
     const childrenIds=place.childIds 
     return <li className="relative left-5">
      {place.title}
      <button className="ring-1 ml-2" onClick={()=>{
        onComplete(parendId,id)
      }} >Complete</button>
      {childrenIds.length>0 && (<ol className="list-inside list-decimal">
        {childrenIds.map(childId=><PlaceTree key={childId} id={childId} placesById={placesById} parendId={id} onComplete={onComplete}/>)}
        </ol>)}
     </li>
    }
    
    return (<ol className="list-inside list-decimal ">
        {planetChildrenIds.map(planetChildId=>(<PlaceTree key={planetChildId} id={planetChildId} placesById={plan} parendId={0} onComplete={handleComplete}/>))}
    </ol>)
    
}

