import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import SignUp from "./pages/signup.jsx";
import Home from "./pages/HomePage/home.tsx";
import ProjectList from "./pages/ProjectListPage/projectList.tsx";
import Chatting from "./pages/ChattingPage/chattingPage.tsx";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/projects" element={<ProjectList />}></Route>
      <Route path="/chat" element={<Chatting />}></Route>
    </Routes>
  );
};

export default Router;
