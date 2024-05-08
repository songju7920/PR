import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/login.tsx";
import UserInfo from "./pages/userInfo/userInfo.tsx";
import NotFound from "./pages/error/NotFound.tsx";
import Signup from "./pages/signup/signup.tsx";

const route = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard/:userId" element={<UserInfo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default route;
