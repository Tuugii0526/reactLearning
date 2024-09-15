import { useEffect,useState } from "react"

const fetchBio=(person)=>{
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(person)
        {
            resolve(`This is ${person.split('').map((letter,index)=>{

                if(index==0)
                {
                    return letter.toUpperCase()
                }
                else
                {
                    return letter
                }
            }).join('')}`)
        }
        else
        {
            reject(new Error("The person's bio not found !"))
        }
    },3000)
 })
}
export const Challenge4=()=>{
    const [person,setPerson]=useState('namjildorj')
    const [bio,setBio]=useState(null)
    let ignore=false
    useEffect(()=>{
    setBio(null)
    fetchBio(person).then(result=>{
      if(!ignore)
      {
        setBio(result)
      }
    })
    return ()=>{
        ignore=true
    }
    },[person])
    return <div>
        <select name="familyMemberBio" className="ring-1" onChange={(e)=>{
setPerson(e.target.value)
        }}>
            <option value="namjildorj">Namjildorj</option>
            <option value="sainbayar">Sainbayar</option>
            <option value="myanganbayar">Myanganbayar</option>
            <option value="tuguldur">Tuguldur</option>
            <option value="tuvshingerel">Tuvshingerel</option>
        </select>
        {bio ?? 'Loading...'}
    </div>
}