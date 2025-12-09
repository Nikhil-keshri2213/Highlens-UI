import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Blog_App from "../pages/Blog_App";
import SinglePost from "../pages/SinglePost";
import UserProfile from "../pages/UserProfile";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Blog_App />, // Home page → Post list
      },

      {
        path: "post/:postId",
        element: <SinglePost />, // Dynamic post page
      },

      {
        path: "user/:userId",
        element: <UserProfile />, // User page
      },

      // 404 - fallback
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;