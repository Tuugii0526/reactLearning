import {useState} from 'react'
import { Container } from './Container';
const initialList = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: false },
    { id: 2, title: 'Terracotta Army', seen: true },
  ];
const Item=({lists,onToggle})=>{
    return <ul>
        {lists.map(list=>{
            return <li key={list.id}>
                <label >
                    <input type="checkbox" checked={list.seen} onChange={(e)=>onToggle(list.id,e.target.checked)}/>
                    {list.title}
                </label>
            </li>
        })}
    </ul>
}
export const ArtBucketList=()=>{
    const [myList,setMyList]=useState(initialList)
    const [yourList,setYourList]=useState(initialList)
    const handleToggleYourList=(artworkId,nextSeen)=>{
       const nextYourList=yourList.map(list=>{
        if(list.id===artworkId)
        {
         return {...list,seen:nextSeen}
        }
        else
        {
            return list
        }
       })
       setYourList(nextYourList)
    }
    const handleToggleMyList=(artworkId,nextSeen)=>{
     const nextMyList=myList.map(list=>{
        if(list.id===artworkId)
        {
     return {...list,seen:nextSeen}
        }
        else
        {
        return    list
        }
     })
     setMyList(nextMyList)
    }
    return <Container>
    <h1>Art Bucket List</h1>
    <h2>My list of art to see:</h2>
   <Item lists={myList} onToggle={handleToggleMyList}/>
    <h2>Your list of art to see:</h2>
   <Item lists={yourList} onToggle={handleToggleYourList}/>
    </Container>
}