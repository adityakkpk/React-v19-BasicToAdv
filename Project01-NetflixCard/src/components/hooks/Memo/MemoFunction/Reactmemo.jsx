import React, { useRef, useState } from 'react'

const ReactMemo = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='p-4 h-52 tracking-wider flex flex-col justify-end items-center gap-5'>
        <h1>{count}</h1>
        <button className='bg-cyan-500 py-1 px-3' onClick={() => setCount(prev => prev + 1)}>
            Increment
        </button>
        <MemoWrapped />
    </div>
  )
}

const Counts = () => {
    const renderCount = useRef(0);
    console.log(renderCount);
    
    return (<>
        <div className='text-center'>
            <p>Nothing Changed here but ive now rendered:</p>
            <span className='text-red-600'>{renderCount.current++} time(s)</span>
        </div>
    </>)
} 

const MemoWrapped = React.memo(Counts);

export default ReactMemo