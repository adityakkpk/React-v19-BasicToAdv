import React from 'react'
import Accordion from './Components/Accordion'

const App = () => {
  return (
    <div className='w-full h-full flex items-center justify-center flex-col p-4 gap-10'>
      <h1 className='text-3xl underline'>Accordion</h1>
      <Accordion />
    </div>
  )
}

export default App