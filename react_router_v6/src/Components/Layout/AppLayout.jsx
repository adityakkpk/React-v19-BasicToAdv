import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useNavigation } from 'react-router-dom'
import WaveLoader from './Loading'

const AppLayout = () => {

  // Global Loader
  const navigation = useNavigation();
  console.log(navigation);

  if(navigation.state === "loading") return <><Header /><WaveLoader /><Footer /></>
  

  return (
    <>
        <Header />
        <Outlet/>
        <Footer />
    </>
  )
}

export default AppLayout