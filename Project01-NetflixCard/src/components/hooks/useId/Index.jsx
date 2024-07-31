import React, { useId } from 'react'

const UseId = () => {

    // const userId = useId();
    // const passId = useId();
    // const emailId = useId();

    const id = useId();

  return (
    <form className='h-[100vh] flex flex-col gap-5 justify-center items-center'>
        <div className='flex gap-3'>
            <label htmlFor={"userId" + id}>Username:</label>
            <input type="text" id={"userId" + id} name='name' className='rounded' />
        </div>
        <div className='flex gap-3'>
            <label htmlFor={"passId" + id}>Password:</label>
            <input type="text" id={"passId" + id} name='password' className='rounded' />
        </div>
        <div className='flex gap-3'>
            <label htmlFor={"emailId" + id}>Email:</label>
            <input type="email" id={"emailId" + id} name='Email' className='rounded' />
        </div>
        <button type='submit' className='bg-gray-500 px-2 py-1 rounded'>Submit</button>
    </form>
  )
}
export default UseId