import {useRef,useState} from 'react'
export const FocusingTextInputWithRef=()=>{
const [isInputFocused,setIsInputFocused]=useState(false)
const inputRef=useRef(null)
let className=''
if(isInputFocused)
{
    className='text-xs scale-125 translate-x-20 -translate-y-10 bg-yellow-200'
}

function handleClick(){
    if(isInputFocused)
    {
        inputRef.current.blur()
        setIsInputFocused(!isInputFocused)
    }
    else{
        inputRef.current.focus()
        setIsInputFocused(!isInputFocused)
    }
}
return <>
<p  className={`${className}`}>The useRef Hook returns an object with a single property called current. Initially, myRef.current will be null. When React creates a DOM node for this &lt;div&gt;, React will put a reference to this node into myRef.current. You can then access this DOM node from your event handlers and use the built-in browser APIs defined on it.</p>
<div className='flex gap-2 *:rounded-lg '>
    <input ref={inputRef} className='focus:bg-yellow-500 ring-1 p-1' type="text"  />
    <button className='ring-1 p-1 ' onClick={handleClick}>{isInputFocused? 'unFocus' : 'focus'}</button>
</div>
</>
}