import React from 'react'

const Text = () => {
  return (
    // <section className='flex items-center justify-start flex-col'>
    //     <div className=''>
    //         b p mondal
    //     </div>
    //     <div className='md:h-lvh overflow-hidden border flex items-center justify-center'>
    //         <h1 className='md:text-[35rem]'>OJAX</h1>
    //     </div>
    //     <div>
    //         Time
    //     </div>
    // </section>
    <div className="bg-black text-white h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">COLLEGE OF ENGINEERING ARANMULA</h1>
        <h2 className="text-2xl mb-8">PRESENTS</h2>
      </div>
      <div className="text-center">
        <h1 className="text-[35rem] w-screen leading-3 my-52 font-bold">OJAX</h1>
      </div>
      <div className="text-center mt-8">
        <p className="text-xl">06:23:42:00 2023 April</p>
        <p className="text-sm">DAY HOURS MINUTES SECONDS 26 27 TH</p>
      </div>
    </div>
  )
}

export default Text