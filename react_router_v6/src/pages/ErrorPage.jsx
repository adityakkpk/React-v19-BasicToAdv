import React from 'react'
import { NavLink, useNavigate, useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);
    
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

  return (
    <div className='flex flex-col gap-2 justify-center items-center my-3'>
    <div>404 error Page</div>
    {/* <NavLink to="/" className={`bg-blue-500 px-2 py-1 rounded mb-2`}>
        Go to home page
    </NavLink> */}
    
    <button onClick={handleGoBack} className={`bg-blue-500 px-2 py-1 rounded mb-2`}>
        Go Back
    </button>
    </div>
  )
}

export default ErrorPage