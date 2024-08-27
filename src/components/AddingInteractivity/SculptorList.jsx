import {useState } from 'react'
import { Container } from './Container'
import next from 'next'
let nextId=0
export const SculptorList=()=>{
    const [name,setName]=useState('')
    const [artists,setArtists]=useState([])
    return <Container>
        <h1>Inspiring sculptors</h1>
        <div className='flex gap-1 '>
            <input className=' border-[1px] border-black'  value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={()=>{
                const nextArtists=[...artists,{id:nextId++,name:name}]
               setArtists(nextArtists)
            }       
            }>Add</button>
        </div>
        <ul className='list-disc list-inside'>
            {artists.map(artist=>
            { return <li key={artist.id}>{artist.name}</li>
            })
            }
        </ul>
    </Container>
}