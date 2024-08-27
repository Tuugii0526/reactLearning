import { useState } from "react"

export const StateOverTime=()=>{
    const [to,setTo]=useState('Alice')
    const [message,setMessage]=useState('hi')
    const handleSubmit=(e)=>{
        e.preventDefault()
        alert(`You said ${message} to ${to}`)
    }
    return <>
    <form onSubmit={handleSubmit} >
       <label htmlFor="toWhom">
       To: 
        <select name="" id="toWhom" value={to} onChange={e=>{setTo(e.target.value)

        }} >
            <option value="Alice" selected>Alice</option>
            <option value="Bob">Bob</option>
        </select>
       </label>
       <textarea className="border-[1px] border-black" onChange={(e)=>{
        setMessage(e.target.value)
       }} name="message" id="message" placeholder="message">{message}</textarea>
       <button className="bg-slate-300" type="submit">Send</button>
    </form>
    </>
    
}