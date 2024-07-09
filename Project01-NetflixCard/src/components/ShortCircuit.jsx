import React from 'react'

const ShortCircuit = () => {

    // Logical OR
    // const result1 = false || "Hello"; // "Hello" 
    // const result2 = true || "World"; // true

    // Logical AND
    // const result1 = false && "Hello"; // false
    // const result2 = true && "World"; // "World"

    // Nullish Coalescing
    const result1 = null ?? "Hello"; // "Hello"
    const result2 = undefined && "World"; // "World"
    const result3 = '"' ?? "Fallback" // "

    console.log(result1);
    console.log(result2);
    console.log(result3);
  return (
    <div>ShortCircuit</div>
  )
}

export default ShortCircuit