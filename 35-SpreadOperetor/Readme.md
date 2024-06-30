# Spread Operator

- It is also known as Rest Operator.
- The spread operator in JS/React allows an iterabal (like an array of objects) to be expend into individual elements. 
- It provides concise way to spread the elements of an iterable object into places where multiple elements (arguments or elements in array literals) are expeted.

### Syntax: 
* **Arrays:** `const newArray = [...oldArray];`
* **Objects:** `const newObj = {...oldObj};`

### Use cases

* Use Case 1: Copying Arrays
    - In JS, simply assigning an array to a new variable creates a reference, not a copy. This means that if you modify the new array, the original array will also be overwritten.
    - So We use `Spread Operator` instead of directly copying the original array to the new variable.
    - Copying the array using Spread Operator, it creates a shallow copy of the array, not a deep copy. This means that the new array will hold the references to the same elements as the original array.
* Use Case 2: Concatening Arrays
* Use Case 3: Adding Elements to an Arrays
* Use Case 4: Spreading object Properties