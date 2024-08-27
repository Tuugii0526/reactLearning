import {useState} from 'react'
export  const ReactingToInputWithState=()=>{
    const [answer,setAnswer]=useState('')
    const [error,setError]=useState(null)
    const [status,setStatus]=useState('typing')
    const handleSubmitForm=async(e)=>{
        e.preventDefault()
        setStatus('submitting')
        try
        {
            await submitForm(answer)
            setStatus('success')
        }
        catch(err)
        {
            console.log('this is an error:',err)
            setError(err)
            setStatus('typing')
        }
    }
    const submitForm=(answer)=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(answer!=='ub' || answer!=='ulaanbaatar')
                {
                    reject(new Error('Good guess but a wrong answer.Try again !'))
                }
                else
                {
                    resolve()
                }
            },1500)
        })
    }
    const handleAnswerChange=(e)=>{
        setAnswer(e.target.value)
    }
    if(status==='success')
    {
        return <h1>That's right </h1>
    }
    return <form className='w-full h-full flex flex-col gap-3' onSubmit={handleSubmitForm}>
        <h2>Quiz</h2>
        <p>What is the capital city of Mongolia ?</p>
        <textarea className='ring-1 p-1' value={answer}
        onChange={handleAnswerChange}
        disabled={status==='submitting'}
        />
        <button className='ring-1 ring-gray-400' type='submit' disabled={
            answer.length===0 || status==='submitting'
        }>Submit</button>
        {
            error !==null && <p className='error'>{error.message}</p>
        }
    </form>
}