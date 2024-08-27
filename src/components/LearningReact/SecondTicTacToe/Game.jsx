 import next from 'next'
import {useState} from 'react'

 const Square=({value,handleClick})=>{
return(<div className='square' onClick={handleClick}>{value}</div>)
     }
 const Board=({xIsNext,currentSquares,onPlay})=>{
    const isWinner=(square)=>{
        const lines=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for(let i=0;i<lines.length;i++)
            {
                const [a,b,c]=lines[i]
                if(square[a] && square[a]===square[b] && square[a]===square[c])
                {
                    return square[a]
                }
            }
            return null
        }
        
    let status;
    const winner=isWinner(currentSquares)
    if(winner)
    {
        status="Winner: "+winner
    }
    else
    {
        status="Next player: "+(xIsNext ? 'X' : 'O')
    }
   
  const handleClick=(index)=>{
    if(currentSquares[index] || isWinner(currentSquares))
    {
        return 
    }
   const xOrO=xIsNext ? 'X':'O'
   const nextSquares=currentSquares.slice()
   nextSquares[index]=xOrO
   onPlay(nextSquares)
  }
 
    return <div>
        <div>{status}</div>
        <div className='board-row'>
            <Square value={currentSquares[0]} handleClick={()=>handleClick(0)}/>
            <Square value={currentSquares[1]} handleClick={()=>handleClick(1)}/>
            <Square value={currentSquares[2]} handleClick={()=>handleClick(2)}/>
        </div>
        <div className='board-row'>
            <Square value={currentSquares[3]} handleClick={()=>handleClick(3)}/>
            <Square value={currentSquares[4]} handleClick={()=>handleClick(4)}/>
            <Square value={currentSquares[5]} handleClick={()=>handleClick(5)}/>
        </div>
        <div className='board-row'>
            <Square value={currentSquares[6]} handleClick={()=>handleClick(6)}/>
            <Square value={currentSquares[7]} handleClick={()=>handleClick(7)}/>
            <Square value={currentSquares[8]} handleClick={()=>handleClick(8)}/>
        </div>
    
    </div>
 }
 export default function Game(){
 const [history,setHistory]=useState([Array(9).fill(null)])
 const [currentMove,setCurrentMove]=useState(0)
 console.log('history is:',history)
 const currentSquares=history[currentMove]
const xIsNext=currentMove%2===0
const onPlay=(nextSquares)=>{
    console.log('next square is',nextSquares)
    const newHistory=[...history.slice(0,currentMove+1),nextSquares]
    setHistory(newHistory)
    setCurrentMove(newHistory.length-1)
}
const jumpTo=(nextMove)=>{
 setCurrentMove(nextMove)
}
const lists=history.map((squares,index)=>{
    const description=  index==0 ? 'Go to game start' : 'Go to move #'+index
    return <li key={index} onClick={()=>jumpTo(index)} className='hover:bg-slate-400'>{description}</li>
})
 return  <div className='w-full h-screen flex flex-col items-center justify-center'>
    <div className='flex gap-8'>
    <Board xIsNext={xIsNext} currentSquares={currentSquares} onPlay={onPlay} />
    <ol className='list-decimal list-inside'>
{lists}
    </ol>
    </div>
    
 </div>
 }