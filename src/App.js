import React from "react";
import {
  DropArea,
  DisplayArea,
  Nav,
  Form,
  Footer,
  LandingPage,
} from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="grade" element={<DropArea />} />
          <Route path="login" element={<Form />} />
          <Route path="viewText" element={<DisplayArea />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
