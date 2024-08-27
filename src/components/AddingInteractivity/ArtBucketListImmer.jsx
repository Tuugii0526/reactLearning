import {useImmer} from 'use-immer'
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
export const ArtBucketListImmer=()=>{
    const [myList,updateMyList]=useImmer(initialList)
    const [yourList,updateYourList]=useImmer(initialList)
    const handleToggleYourList=(artworkId,nextSeen)=>{
     updateYourList(draft=>{
        const artWork=draft.find(a=>a.id===artworkId)
        artWork.seen=nextSeen
     })
    }
    const handleToggleMyList=(artworkId,nextSeen)=>{
     updateMyList(draft=>{
        const artWork=draft.find(a=>a.id===artworkId)
        artWork.seen=nextSeen
     })
    }
    return <Container>
    <h1>Art Bucket List</h1>
    <h2>My list of art to see:</h2>
   <Item lists={myList} onToggle={handleToggleMyList}/>
    <h2>Your list of art to see:</h2>
   <Item lists={yourList} onToggle={handleToggleYourList}/>
    </Container>
}