import React from "react";
import { Content, Theme } from "@carbon/react";
import { Routes, Route } from "react-router";
import "./app.scss";
import MainHeader from "./components/MainHeader";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DropArea from "./pages/DropArea";
import DisplayContent from "./pages/DisplayContent";

const App = () => {
  return (
    <>
      <Theme theme="g90">
        <MainHeader />
      </Theme>
      <Content>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/droparea" element={<DropArea />} />
          <Route
            path="/uploads"
            element={<DisplayContent route="all-uploads" />}
          />
        </Routes>
      </Content>
    </>
  );
};

export default App;
