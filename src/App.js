import React from "react";
import { Header, Footer } from "./components";

import {
  DisplayGrade,
  DisplayContent,
  LandingPage,
  TextList,
  TextPage,
  Login,
  Register,
  DropArea,
} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" exact element={<LandingPage />} />
            <Route path="grade" element={<DropArea />} />
            <Route path="text" element={<TextList />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="texts" element={<DisplayContent route="texts" />} />
            <Route path="mark" element={<DisplayContent route="mark" />} />
            <Route
              path="all-uploads"
              element={<DisplayContent route="all-uploads" />}
            />
            <Route path="viewGrade" element={<DisplayGrade />} />
            <Route path="texts/:id" element={<TextPage />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Ooops. There's nothing here!</p>
                </main>
              }
            />
          </Routes>
          {/* <Footer /> */}
        </div>
      </Router>
      {/* <ToastContainer /> */}
    </>
  );
}

export default App;
