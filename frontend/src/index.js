import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import LoginPage from "./components/login.jsx";
import GlobalStyle from "./style/GlobalStyle.ts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <LoginPage />
  </React.StrictMode>
);
