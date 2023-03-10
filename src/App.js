import React, { useContext } from "react";
import { Content, Theme } from "@carbon/react";
import { Routes, Route } from "react-router";
import { IdProvider, IdContext } from "./IdContext";

import "./app.scss";
import MainHeader from "./components/MainHeader";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ErrorPage from "./pages/ErrorPage";
import DropArea from "./pages/DropArea";
import DisplayContent from "./pages/DisplayContent";
import Grades from "./pages/Grades";

const App = () => {
  const ids = useContext(IdContext);
  return (
    <>
      <Theme theme="g90">
        <MainHeader />
      </Theme>
      <Content>
        <IdProvider>
          <Routes>
            <Route path="/" exact element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/droparea" element={<DropArea />} />
            <Route path="/grade" element={<Grades />} />

            <Route
              path="/uploads"
              element={<DisplayContent route="all-uploads" />}
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </IdProvider>
      </Content>
    </>
  );
};

export default App;
