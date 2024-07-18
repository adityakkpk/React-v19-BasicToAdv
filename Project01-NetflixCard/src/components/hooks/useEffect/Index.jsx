import React, { useEffect, useState } from 'react'

const ReactUseEffect = () => {

    const [date, setDate] = useState(0);

    useEffect(()=>{
        const interval = setInterval(() => {
            const newDate = new Date();
            setDate(newDate.toLocaleString());
        }, 1000);

        return () => clearInterval(interval); // cleanup function to clear interval when component unmounts
    }, []);

  return (
    <div className='flex gap-3 flex-col items-center justify-center'>
        {/* <h1 className='text-3xl'>useEffect</h1>
        <p className='text-xl'>Count: {counter} </p>
        <button className='py-1 px-2 bg-green-200 rounded text-black w-fit' onClick={() => setCounter(counter + 1)}>Increment</button> */}
        <h1>Date: {date}</h1>
    </div>
  )
}

export default ReactUseEffect