import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import SignUp from "./pages/signup";
import Home from "./pages/HomePage/home.tsx";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
};

export default Router;
