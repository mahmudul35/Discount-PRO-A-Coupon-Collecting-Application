import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import AuthLayout from "../layout/AuthLayout";
import Root from "../layout/Root";
import Brand from "../pages/Brand";
import CouponPage from "../pages/CouponPage";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import PrivateRoute from "../private/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../data.json"),
      },
      {
        path: "/brand",
        element: <Brand />,
        loader: () => fetch("../data.json"),
      },
      {
        path: "/brand/:id",
        loader: ({ params }) => fetch(`../data.json`),
        element: (
          <PrivateRoute>
            <CouponPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            {" "}
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
]);
export default router;
