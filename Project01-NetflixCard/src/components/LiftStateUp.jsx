import React, { useState } from 'react'

const LiftStateUp = () => {
    const [inputValue, seInputValue] = useState("");
  return (
    <>
      <InputComponent input={inputValue} setInput={seInputValue} />
      <DisplayComponent input={inputValue} />
    </>
  )
}

export default LiftStateUp

const InputComponent = ({input,setInput}) =>{
    return (
        <input type="text" value={input} className='border rounded border-gray-800' placeholder='Enter input' onChange={(e) => setInput(e.target.value)} />
    )
}

const DisplayComponent = ({input}) =>{
    return (
        <p>The input value is: {input}</p>
    )
}