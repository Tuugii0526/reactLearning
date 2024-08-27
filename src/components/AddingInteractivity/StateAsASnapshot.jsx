import {useState} from 'react'
export const StateAsASnapshot=()=>{
    const [isSent,setIsSent]=useState(false)
    const [message,setMessage]=useState('hi')
    if(isSent)
    {
        return <div className="h-[100px] w-[200px] border-[2px] border-black rounded-2xl text-center">
            Your message is on the way!
        </div>
    }
    return <form className='flex flex-col items-center gap-2' onSubmit={(e)=>{
        e.preventDefault()
        setIsSent(true)

    }}>
     <textarea className='border-[2px] border-black p-2' name="message" id="message" placeholder='message' value={message} onChange={e=>setMessage(e.target.value)}></textarea>
     <button type='submit' className='bg-slate-400 w-fit p-1 rounded-sm'>Send</button>
    </form>
    
}