import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/login.tsx";
import UserInfo from "./pages/userInfo/userInfo.tsx";
import NotFound from "./pages/error/NotFound.tsx";

const route = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard/:userId" element={<UserInfo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default route;
