import {useState,useEffect} from 'react'
import { fetchPlaces } from './fetchPlaces'
export const useSelectOptions=(url)=>{
const [list,setList]=useState(null)
const [selectedId,setSelectedId]=useState(null)
useEffect(()=>{
    if(url===null)
    {
        return;
    }
    let ignore=false;
    fetchPlaces(url).then(response=>{
        if(!ignore)
        {
            setList(response)
            setSelectedId(response[0].id)
        }
        return ()=>{
            ignore=true;
        }
    })
},[url])
return [selectedId,list,setSelectedId]
}