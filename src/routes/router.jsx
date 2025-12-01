import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import Docs from "../pages/Docs";
import About from "../pages/About";
// import Features from "../pages/Features";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "docs",
        element: <Docs />
      },
      {
        path: "about",
        element: <About />
      },
    ]
  }
]);
