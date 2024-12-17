import React, { lazy, Suspense } from "react";

import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../Views/Layout/Layout";
import Loader from "../Views/Layout/Loader/Loader";
import Error from "../Views/Layout/Loader/Error";
// import Home from "../Views/Pages/Home/Home";
// import Services from "../Views/Pages/Services/Services";
// import Contact from "../Views/Pages/Contact/Contact";
const Home = lazy(() => import("../Views/Pages/Home/Home"));
const Services = lazy(() => import("../Views/Pages/Services/Services"));
const Contact = lazy(() => import("../Views/Pages/Contact/Contact"));

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/services",
          element: (
            <Suspense fallback={<Loader />}>
              <Services />,
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: (
            <Suspense fallback={<Loader />}>
              <Contact />,
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
