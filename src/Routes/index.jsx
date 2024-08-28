import {createBrowserRouter,} from "react-router-dom";
import Login from "../Pages/Login/Login";
import HomeLayout from './../layouts/HomeLayout';
import CreateAcc from "../components/SinUp/CreateAcc";
import SignUp from "../components/SinUp/SignUp";
import Profile from "../Pages/Profile/Profile";





export const router = createBrowserRouter([
  {
    path: "/signup",
    element: <CreateAcc/>,
  },
  {
    path: "/",
    element: <SignUp/>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <HomeLayout/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  ]);