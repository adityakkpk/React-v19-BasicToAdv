import React, { useState } from "react";

const Challange = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const handleStepChange = (event) => {
    const step = parseInt(event.target.value);
    setStep(step);
  };

  const handleIncrement = () => {
    if (step > 0) setCount((prevCount) => prevCount + step);
    else setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (step > 0) setCount((prevCount) => prevCount - step);
    else setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="container flex justify-center items-center text-white flex-col">
      <h1 className="text-4xl py-5">useState Challange</h1>

      <div>
        <p>
          Count : <span>{count}</span>
        </p>

        <div className="my-5 ">
          <label className="flex gap-2">
            Step :
            <input
              type="number"
              onChange={handleStepChange}
              className="rounded text-black px-1"
            />
          </label>
        </div>

        <div className="flex gap-5 my-5">
          <button
            className="bg-blue-500 py-1 px-2 rounded hover:bg-blue-300 disabled:bg-blue-200"
            onClick={() => handleIncrement()}
            disabled={count >= 100}
          >
            Increment
          </button>
          <button
            className="bg-blue-500 py-1 px-2 rounded hover:bg-blue-300 disabled:bg-blue-200"
            onClick={handleDecrement}
            disabled={count <= 0}
          >
            Decrement
          </button>
          <button
            className="bg-blue-500 py-1 px-2 rounded hover:bg-blue-300"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Challange;
