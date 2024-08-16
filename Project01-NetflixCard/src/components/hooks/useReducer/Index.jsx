import React, { useReducer } from "react";

const ReducerComp = () => {
  const initialState = {
    count: 0,
  };

  const reducer = (state, action) => {
    //reducer Function
    console.log(state);
    console.log(action);

    // if(action.type === "INCREMENT"){
    //     return state += 1;
    // }

    // if(action.type === "DECREMENT"){
    //     return state -= 1;
    // }

    // if(action.type === "RESET"){
    //     return state = 0;
    // }

    switch (action.type) {
      case "INCREMENT":
        return {count: state.count + 1}

      case "Decrement":
        return {count: state.count - 1}

      case "RESET":
        return {count: 0}

      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="text-4xl text-sky-600">Hello useReducer() Hook !</h1>
      <h1>Count : {state.count}</h1>
      <button
        className="px-2 py-1 bg-sky-500 rounded text-black hover:bg-sky-300"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>
      <button
        className="px-2 py-1 bg-red-800 rounded hover:bg-red-500"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
      </button>
      <button
        className="px-2 py-1 bg-green-800 rounded hover:bg-green-500"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>
    </div>
  );
};

export default ReducerComp;
