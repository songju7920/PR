import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/login.tsx";
import UserInfo from "./pages/userInfo/userInfo.tsx";

const route = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<UserInfo />} />
    </Routes>
  );
};

export default route;
