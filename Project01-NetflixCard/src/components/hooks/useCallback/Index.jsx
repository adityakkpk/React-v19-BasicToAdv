import React, { memo, useCallback, useState } from 'react'

const Button = memo(({children, onClick}) => {
    console.log(`Rendering button: ${children}`);
    
    return <button className={`px-2 py-1 rounded ${children === "Increment" ? "bg-green-400" : "bg-red-400"}`} onClick={onClick}>{children}</button>
})

const UseCallback = () => {
    const [count, setCount] = useState(0);

    // const increment = () => {
    //     console.log("Increment inside");
        
    //     setCount(prev => prev + 1);
    // };

    // memoised increment function using useCallback
    const increment = useCallback(() => {
        console.log("Increment inside");
        
        setCount(prev => prev + 1);
    }, [])
    
    // const decrement = () => setCount(prev => prev - 1);
    
    // memoised decrement function using useCallback
    const decrement = useCallback(() => {
        console.log("Decrement inside");
        
        setCount(prev => prev - 1);
    }, [])

  return (
    <div className='p-4 h-lvh w-full tracking-wider flex flex-col justify-center items-center gap-5 bg-black text-white'>
        <h1 className=''>Count: {count}</h1>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
    </div>
  )
}

export default UseCallback