import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home />
    },
    {
      path:'/contact',
      element: <Contact />
    },
    {
      path:'/about',
      element: <About />
    },
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
