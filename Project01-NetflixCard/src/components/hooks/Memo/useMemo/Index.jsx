import React, { useMemo, useState } from "react";

const MemoParentComp = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="p-4 h-lvh w-full tracking-wider gap-5 flex flex-col justify-center items-center text-white">
      <ExpensiveComponent />
      <button
        className="py-3 px-6 bg-cyan-400 rounded-sm"
        onClick={() => setCount(count + 1)}
      >
        Re-render parent
      </button>
      <p>Parent re-renders: {count}</p>
    </div>
  );
};

export default MemoParentComp;

// const ExpensiveComponent = React.memo(() => {
const ExpensiveComponent = () => {
  const sum = () => {
    let i = 0;
    for (i = 0; i <= 100000000; i++) {
      i = i + 1;
    }
    return i;
  };

  const total = useMemo(() => {
    return sum();
  },[])

//   const total = sum();

  return <p>Sum: {total}</p>;
};
