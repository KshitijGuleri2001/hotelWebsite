import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./Components/Login";
import GallaryPage from "./Components/GallaryPage"
import SignUp from "./Components/SignUp";
import BeachBlog from "./Pages/Beach_blog/BeachBlog";
import Mountain from "./Pages/HeaderOption/Mountain";
import Hotels from "./Pages/HeaderOption/Hotel";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
      },
      {
        path: "/Login",
        element: <Login/>,
      },

      {
        path: "/signup",
        element: <SignUp/>,
      },
      {
        path: "/gallaryPage",
        element: <GallaryPage/>,
      }, {
        path: "/beach-blog",
        element: <BeachBlog/>,
      },
    {
      path: "/mountains",
      element: <Mountain/>,
    },
    {
      path: "/hotels",
      element: <Hotels/>,
    },
]);
export default router;
