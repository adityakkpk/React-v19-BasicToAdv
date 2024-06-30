import React from "react";

function Help() {
  // * Use Case 1: Copying Arrays
  // const nums = ['a', 'b', 'c'];
  // const copiedNums = [...nums]; // creates a new array with the same elements as nums
  // console.log(copiedNums);

  // * Use Case 2: Concating Arrays
  // const arr1 = ['a', 'b'];
  // const arr2 = ['c', 'd'];
  // // const concatenatedArr = arr1 + arr2; // 'a', 'b''c', 'd'
  // const concatenatedArr = [...arr1,...arr2]; // creates a new array with elements from both arr1 and arr2
  // console.log(concatenatedArr);

  //* Use Case 3: Adding Elements to an Array
  // const arr3 = ['e', 'f'];
  // const arr4 = [...arr3, 'g'] // modifies the original array
  // console.log(arr4);

  //* Use Case 4: Spreading object Properties
  const person = { name: "John", age: 30 };
  const newPerson = { ...person, age: person.age + 1, job: "Developer" };
  console.log(newPerson);

  return <div>name: {newPerson.name}, age: {newPerson.age}</div>;
}

export default Help;
