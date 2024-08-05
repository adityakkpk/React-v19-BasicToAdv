import React, { useContext } from "react";
import { MyContext } from "./Index";

const Services = () => {
  const {name, age} = useContext(MyContext);


  return (
    <section
      className={`p-4 h-lvh tracking-wide flex flex-col justify-center items-center bg-gray-900 text-white`}
    >
      <h1>Hello Context API (Services). My name is {name} and my age is {age}</h1>
    </section>
  );
};

export default Services;
