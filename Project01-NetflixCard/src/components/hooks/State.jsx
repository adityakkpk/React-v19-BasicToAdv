import { useState } from "react";

export const State = () => {
    // let val = 0;
    let [val, setVal] = useState(0);
    const handleClick = () => {
        setVal(()=>val+1);
        console.log(val);
    }
    return (
        <>
            <h1>{val}</h1>
            <button onClick={handleClick} >Increment</button>
        </>
    )
}