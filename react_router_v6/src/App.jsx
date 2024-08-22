import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {

  // const router = createBrowserRouter([
  //   {
  //     path:'/',
  //     element: <Home />
  //   },
  //   {
  //     path:'/contact',
  //     element: <Contact />
  //   },
  //   {
  //     path:'/about',
  //     element: <About />
  //   },
  // ]);

  // Old Method / using helper function/

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
