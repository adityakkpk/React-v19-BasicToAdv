import React, { useReducer } from 'react'

const ReducerComp = () => {

    const reducer = (state, action) => {
        //reducer Function
        console.log(state);
        console.log(action);
        
        if(action.type === "INCREMENT"){
            return state += 1;
        }

        if(action.type === "DECREMENT"){
            return state -= 1;
        }
        
    }

    const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className='flex flex-col justify-center items-center gap-5'>
        <h1 className='text-4xl text-sky-600'>Hello useReducer() Hook !</h1>
        <h1>Count : {count}</h1>
        <button className='px-2 py-1 bg-sky-500 rounded text-black hover:bg-sky-300' onClick={() => dispatch({type: "INCREMENT"})}>Increment</button>
        <button className='px-2 py-1 bg-red-800 rounded hover:bg-red-500' onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
    </div>
  )
}

export default ReducerComp