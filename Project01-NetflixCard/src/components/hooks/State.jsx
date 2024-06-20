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
        <div className="main-div">
            <h1>{val}</h1>
            <button onClick={handleClick} >Increment</button>
        </div>
        <ChildComp />
        </>
    )
}

// This component will also be re-rendered when the state changes because the state in Parent component is changed.
function ChildComp() {
    console.log("Child Component Render");
    return <div>Child Component</div>
}