import { useSelectOptions } from "@/components/util/useSelectOptions"
export const PlanetPlaceTravelUsingCustomHook=()=>{
     const [planetId,planetsList,setPlanetId]=useSelectOptions('/planets')
     const [placeId,placesList,setPlaceId]=useSelectOptions(`/planets/${planetId}`)
     const handlePlanetSelect=(e)=>{
        setPlanetId(e.target.value)
  }
  const handlePlaceSelect=(e)=>{
      setPlaceId(e.target.value)
  }
    return <div className="flex flex-col justify-around">
        <p className="font-semibold">I have used useSelectOptions</p>
    <label >
        Pick a planet:{' '}
        <select className="ring-1" name="planetDropdown" id="planet-dropdown" value={planetId} onChange={handlePlanetSelect}>
            {planetsList?.map(planet=>{
                return <option key={planet.id} value={planet.id}>{planet.name}</option>
            })}
        </select>
    </label>
    <label >
        Pick a place:{' '}
        <select name="placeDropdown" id="place-dropdown" className="ring-1"onChange={handlePlaceSelect} value={placeId}>
            {
                placesList?.map(place=>{
                    return <option key={place.id} value={place.id}>{place.name}</option>
                })
            }
        </select>
    </label>
</div>
}