import { useState } from "react"
export const Square=({value,onSquareClick})=>{
    // function handleClick(){
    //     console.log('clicked')
    // }
    
    return <div className="square" onClick={onSquareClick}>{value}</div>
}