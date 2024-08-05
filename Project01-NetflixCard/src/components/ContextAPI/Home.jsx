import React, { useContext } from 'react'
import { MyContext } from './Index'

const Home = () => {

    const {name, age} = useContext(MyContext);

  return (
    <div className='p-4 h-lvh tracking-wide flex flex-col justify-center items-center bg-gray-900 text-white'>Home, My name is {name} and my age is {age}</div>
  )
}

export default Home