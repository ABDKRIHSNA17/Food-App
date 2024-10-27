import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home-Pages/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import Cart from "../pages/Food-Pages/Cart";
import CheckOut from "../pages/Food-Pages/CheckOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: <div>Orders Page</div>,
      },
      {
        path: "/about",
        element: <div>About Page</div>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path:"/checkout",
        element: <CheckOut/>
      }
    ],
  },
]);

export default router;
