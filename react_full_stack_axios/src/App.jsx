import React, { useEffect } from 'react'
import { getPosts } from './api/PostApi';

const App = () => {

  const getPostData = async () => {
    const res = await getPosts();
    console.log(res);
  }
  
  useEffect(() => {
    getPostData();
  },[])

  return (
    <div className='text-center text-4xl'>Hello world!</div>
  )
}

export default App