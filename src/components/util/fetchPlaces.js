import { lib } from "../library/lib"
export  const fetchPlaces= (path) =>{
    const regForTest=/^\/\w+(?:\/\w+)?/i
    const urlReg=/(\w+)/ig
    const matches=path.match(urlReg)
    return new Promise((resolve,reject)=>{
    if(regForTest.test(path))
    {
       let promise;
       if(matches.length==1)
       {
        promise=lib.map(d=>{
            return {...d}
        })
        resolve(promise)
       }
       else if(matches.length==2)
       {
        const planet=lib.find(d=>d.id.toLowerCase()===matches[1].toLowerCase())
        if(planet)
        {
            promise=[...planet.places]
        resolve(promise)
        }
        else
        {
            reject('Given planet is not found')
        }
       }
    }
    else
    {
        reject('Error')
    }
    })
}