import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import SignUp from "./pages/signup";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/Signup" element={<SignUp />}></Route>
    </Routes>
  );
};

export default Router;
