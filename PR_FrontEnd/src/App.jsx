import React from "react";
import "./style/index.css";
import GlobalStyle from "./style/GlobalStyle.ts";
import { BrowserRouter } from "react-router-dom";
import Router from "./router.jsx";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;
