import React, { useState, useEffect } from 'react'

const CleanUp = () => {
    const [count, setCount] = useState(100000);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);

        //Cleanup function
        return () => {
            clearInterval(interval);
        }
    }, [count]);

  return (
    <div className='container flex items-center justify-center'>
        <div className='flex gap-3 flex-col border items-center p-10 rounded'>
            <p className='text-3xl'>My Subscribers on YT</p>
            <div className='text-7xl'>
                {count}
            </div>
            <h3 className='text-center'>
                Subscribers <br /> Realtime counter
            </h3>
        </div>
    </div>
  )
}

export default CleanUp