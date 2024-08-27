import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AppLayout from "./Components/Layout/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import NotFound from "./pages/NotFound";
import Movies from "./pages/Movie";
import {getMoviesData} from "./api/GetAPIData";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      // errorElement: <ErrorPage /> ,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movies",
          element: <Movies />,
          loader: getMoviesData,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path:"*",
          element: <NotFound />
        }
      ],
    },
  ]);

  // Old Method / using helper function/

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path='/' element={<Home/>} />
  //       <Route path='/contact' element={<Contact/>} />
  //       <Route path='/about' element={<About/>} />
  //     </Route>
  //   )
  // )

  return <RouterProvider router={router} />;
}

export default App;
