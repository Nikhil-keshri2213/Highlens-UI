import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import Docs from "../pages/Docs";
import About from "../pages/About";
import Blog_App from "../highlens-blogs/Blog_App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "docs",
        element: <Docs />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blogs",
        element: <Blog_App />,
      },
    ],
  },
]);
