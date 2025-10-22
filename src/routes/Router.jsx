import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Services from "../pages/Services/Services";
import MyProfile from "../pages/MyProfile/MyProfile";
import ProtectedRoute from "./ProtectedRoute";
import UpdateProfile from "../pages/MyProfile/UpdateProfile"; // Challenge
import ForgotPassword from "../pages/Login/ForgotPassword"; // Challenge

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('/services.json'), // Load data for home page
      },
      {
        path: "/services",
        element: <Services />, // You can create this page to show *all* services
      },
      {
        path: "/service/:serviceId",
        element: <ProtectedRoute><ServiceDetails /></ProtectedRoute>,
        loader: () => fetch('/services.json'), // Load all data, we'll filter in component
      },
      {
        path: "/my-profile",
        element: <ProtectedRoute><MyProfile /></ProtectedRoute>,
      },
      {
        path: "/update-profile",
        element: <ProtectedRoute><UpdateProfile /></ProtectedRoute>, // Challenge
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
        path: "/forgot-password",
        element: <ForgotPassword />, // Challenge
      }
    ],
  },
]);

export default router;