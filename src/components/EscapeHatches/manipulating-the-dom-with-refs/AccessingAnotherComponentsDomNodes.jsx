import {useRef,forwardRef} from 'react'
const MyInput=forwardRef((props,ref)=>{
return <input {...props} className='ring-1 ' ref={ref} />
})
export const AccessingAnotherComponentsDomNodes=()=>{
    const inputRef=useRef(null);
    function handleClick(){
        inputRef.current.focus()
    }
    return (
        <>
        <p> Accessing another components dom nodes:</p>
        <MyInput ref={inputRef}/>
        <button onClick={handleClick}>Focus the input</button>
        </>
    )
}