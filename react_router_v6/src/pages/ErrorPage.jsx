import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);
    

  return (
    <>
    <div>404 error Page</div>
    <NavLink to="/" className={`bg-blue-500 px-2 py-1 rounded my-2`}>
        Go to home page
    </NavLink>
    </>
  )
}

export default ErrorPage