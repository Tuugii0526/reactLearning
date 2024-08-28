import { useImmer } from "use-immer"
import { initialTravelPlan } from "./places"
export const ImmerAvoidDeeplyNestedState=()=>{
    const root =initialTravelPlan[0]
    const planetChilds=root.childIds
    const [plan ,updatePlan]=useImmer(initialTravelPlan)
    const handleComplete=({parentId,childId})=>{
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
    const PlaceTree =()=>{
     
    }
    
    return 
}