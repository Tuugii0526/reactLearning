import {
    forwardRef, 
    useRef, 
    useImperativeHandle
  } from 'react';
  
  const MyInput = forwardRef((props, ref) => {
    const realInputRef = useRef(null);
    useImperativeHandle(ref, () => ({
      // Only expose focus and nothing else
      focus() {
        realInputRef.current.focus();
      },
    }));
    return <input {...props} ref={realInputRef} className='ring-1'/>;
  });
  
  export default function Form() {
    const inputRef = useRef(null);
  
    function handleClick() {
      inputRef.current.focus();
    }
  
    return (
      <>
      <p>Imperative handling</p>
        <MyInput ref={inputRef} />
        <button onClick={handleClick}>
          Focus the input
        </button>
      </>
    );
  }
  