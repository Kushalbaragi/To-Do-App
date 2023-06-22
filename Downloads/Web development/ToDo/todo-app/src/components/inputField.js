import React ,{ useRef }from 'react'


function InputField({inputHandler}) {
  let inputRef=useRef();
  function clickHandler(){
    if(inputRef.current.value!==''){
      inputHandler(inputRef.current.value)
      inputRef.current.value='';
    }
  }
  return (
    <div className='input-container'>
    <input autoFocus ref={inputRef} type='text' placeholder='What are your task for today?'/>
      <button onClick={clickHandler}>Add</button>
    </div>
  )
}

export default InputField