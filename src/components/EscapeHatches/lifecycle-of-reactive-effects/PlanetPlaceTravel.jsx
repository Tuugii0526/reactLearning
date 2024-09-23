import { fetchPlaces } from "@/components/util/fetchPlaces";
import { useEffect,useState } from "react";
export const PlanetPlaceTravel=()=>{ 
    const [planetList,setPlanetList]=useState([])
    const [planetId,setPlanetId]=useState('')
    const [placeList,setPlaceList]=useState([])
    const [placeId,setPlaceId]=useState('')
    const handlePlanetSelect=(e)=>{
          setPlanetId(e.target.value)
    }
    const handlePlaceSelect=(e)=>{
        setPlaceId(e.target.value)
    }
    useEffect(()=>{
        let ignore=false
        fetchPlaces('/planets').then(response=>
        {
            if(!ignore)
            {
                setPlanetList(response)
                setPlanetId(response[0].id)
            }
        }
        )
        return ()=>{
            ignore=true
        }
    },[])
    useEffect(()=>{
       let ignore=false
       fetchPlaces(`/planets/${planetId}`).then(response=>{
        if(!ignore)
        {
            setPlaceList(response)
            setPlaceId(response[0].id)
        }
       })
    },[planetId])
    return <div className="flex flex-col justify-around">
         <p className="font-semibold">I have used useState</p>
        <label >
            Pick a planet:{' '}
            <select className="ring-1" name="planetDropdown" id="planet-dropdown" value={planetId} onChange={handlePlanetSelect}>
                {planetList.map(planet=>{
                    return <option key={planet.id} value={planet.id}>{planet.name}</option>
                })}
            </select>
        </label>
        <label >
            Pick a place:{' '}
            <select name="placeDropdown" id="place-dropdown" className="ring-1"onChange={handlePlaceSelect} >
                {
                    placeList.map(place=>{
                        return <option key={place.id} value={place.id}>{place.name}</option>
                    })
                }
            </select>
        </label>
    </div>
}
