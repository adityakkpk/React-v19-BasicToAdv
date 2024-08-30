import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact, { contactData } from "./pages/Contact";
import About from "./pages/About";
import AppLayout from "./Components/Layout/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import NotFound from "./pages/NotFound";
import Movies from "./pages/Movie";
import {getMoviesData} from "./api/GetAPIData";
import MoviesDetails from "./Components/UI/MoviesDetails";
import { getMovieDetails } from "./api/GetmovieDetails";

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
          path: "/movie",
          element: <Movies />,
          loader: getMoviesData,
        },
        {
          path: "/movie/:ID",
          element: <MoviesDetails />,
          loader: getMovieDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
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
