import React, { useContext } from 'react'
import { MyContext } from './Index'

const Home = () => {

    const {name, age} = useContext(MyContext);

  return (
    <div>Home, My name is {name} and my age is {age}</div>
  )
}

export default Home