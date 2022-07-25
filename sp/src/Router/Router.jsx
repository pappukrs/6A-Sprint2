import React from "react";
import { Routes, Route } from "react-router-dom";
import Blogs from "../Component/Blogs";
import CreateBlog from "../Component/CreateBlog";
import Home from "../Component/Home";
import Login from "../Component/Login";
import Private from "../Component/Private";
const Router = () => {
  return (
    <div>
      <Routes>
        <Route
          path={"/login"}
          element={
            <Private>
              <Home />
            </Private>
          }
        />
        <Route path={"/login"} element={<Login />} />
        <Route
          path={"/blogs"}
          element={
            <Private>
              <Blogs />
            </Private>
          }
        />
        <Route
          path={"/blogs/create"}
          element={
            <Private>
              <CreateBlog />
            </Private>
          }
        />
      </Routes>
    </div>
  );
};

export default Router;
