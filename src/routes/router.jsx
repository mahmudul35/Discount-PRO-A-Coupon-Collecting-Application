import { createBrowserRouter } from "react-router-dom";
import ForgetPassword from "../components/ForgetPassword";
import Login from "../components/Login";
import Register from "../components/Register";
import UpdateUser from "../components/UpdateUser";
import AuthLayout from "../layout/AuthLayout";
import Root from "../layout/Root";
import Brand from "../pages/Brand";
import CouponPage from "../pages/CouponPage";
import Developer from "../pages/Developer";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import PrivateRoute from "../private/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
      {
        path: "/profile/update",
        element: (
          <PrivateRoute>
            {" "}
            <UpdateUser />
          </PrivateRoute>
        ),
      },
      {
        path: "/devloper",
        element: <Developer />,
      },
      {
        path: "/forgetPassword",
        element: <ForgetPassword />,
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
]);
export default router;
