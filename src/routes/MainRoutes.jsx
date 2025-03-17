import React from "react";
import Home from "../components/pages/Home";
import { Route, Routes } from "react-router-dom";
import Register from "../components/authentication/register/Register";
import Books from "../components/pages/Books";
import AboutUs from "../components/pages/AboutUs";
import EditProduct from "../admin/EditProduct";
import Admin from "../components/pages/Admin";
import ShowPage from "../components/pages/ShowPage";
import ShowLike from "../components/pages/ShowLike";
import Basket from "../components/pages/Basket";
import { useAuth } from "../context/AuthContext";

const MainRoutes = () => {
  const { user } = useAuth();
  const routes = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/signUp",
      element: <Register />,
      id: 4,
    },
    {
      link: "/books",
      element: <Books />,
      id: 6,
    },
    {
      link: "/aboutUs",
      element: <AboutUs />,
      id: 7,
    },
    {
      link: "/show",
      element: <ShowPage />,
      id: 8,
    },
    {
      link: "/like",
      element: <ShowLike />,
      id: 9,
    },
    {
      link: "/basket",
      element: <Basket />,
      id: 10,
    },
  ];

  const privateRoute = [
    {
      link: "/admin",
      element: <Admin />,
      id: 2,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 5,
    },
  ];
  return (
    <Routes>
      {routes.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
      {user
        ? user.email === "talgattulobaev519@gmail.com"
          ? privateRoute.map((item) => (
              <Route path={item.link} element={item.element} key={item.id} />
            ))
          : null
        : null}
    </Routes>
  );
};

export default MainRoutes;
