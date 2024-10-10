import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import MainLayout from "./Components/Layout/MainLayout";
import Home from "./Pages/Home";
import FetchOld from "./Pages/FetchOld";
import FetchRQ from "./Pages/FetchRQ";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import FetchIndv from "./Components/UI/FetchInvd";
import NotFound from "./Components/UI/NotFound";
import InfiniteScroll from "./Pages/InfiniteScroll";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trad",
        element: <FetchOld />,
      },
      {
        path: "/rq",
        element: <FetchRQ />,
      },
      {
        path: "/rq/:id",
        element: <FetchIndv />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "infinite",
        element: <InfiniteScroll />,
      }
    ],
  },
]);

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
