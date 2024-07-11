import React from 'react'
import { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(5)

  return (
    <div className='text-white flex gap-10 justify-center items-center flex-col'>
        <h1 className='text-2xl underline mt-10'>useState Hook!</h1>
        <p className='text-xl'>Count: {count}</p>
        <button className='bg-blue-700 w-fit px-2 py-1 rounded hover:bg-blue-400' onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Counter