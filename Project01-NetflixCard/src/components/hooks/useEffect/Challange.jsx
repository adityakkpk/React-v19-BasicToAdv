import React, { useEffect, useState } from 'react'

const Challenge = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(()=>{
        document.title = `Count ${count}`;
        console.log(name);
    }, [count, name]);

    const handleChange = (e) => {
        setName(e.target.value);
    }

  return (
    <div className='flex gap-3 flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold'>useEffect Challenge</h1>
        <p className='text-xl'>Count: {count} </p>
        <button className='py-1 px-2 bg-green-200 rounded text-black w-fit' onClick={() => setCount(count + 1)}>Increment</button>
        <p>Name: {name}</p>
        <input type='text' className='text-black' placeholder='Enter name' value={name} onChange={(e) => handleChange(e)} />
    </div>
  )
}

export default Challenge