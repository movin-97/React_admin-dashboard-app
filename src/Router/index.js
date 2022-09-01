import React from "react";
import { Route, Routes } from "react-router-dom";
import router from "./routers";

const RouterProvider = () => {
  return (
    <Routes>
      {router.map((route) => {
        return (
          <Route key={route.path} path={route.path} element={route.component} />
        );
      })}
    </Routes>
  );
};

export default RouterProvider;
