import { useState } from "react";
import { Board } from "./Board";

export default  function Game(){
    const [xIsNext,SetXIsNext]=useState(true)
    const [history,setHistory]=useState(Array(9).fill(null))
    return <div className="w-full h-screen flex flex-col items-center justify-center">
       <div className="flex gap-8">
        <Board/>
        <div>
            <ol className="list-decimal list-inside relative top-5">
            </ol>
        </div>
       </div>
    </div>
}