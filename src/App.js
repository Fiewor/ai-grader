import React from "react";
import {
  DropArea,
  DisplayText,
  DisplayGrade,
  Nav,
  Form,
  Footer,
  LandingPage,
  TextView,
  TextExtract,
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
          <Route path="text" element={<TextExtract />} />
          <Route path="login" element={<Form />} />
          <Route path="texts" element={<DisplayText />} />
          <Route path="viewGrade" element={<DisplayGrade />} />
          <Route path="texts/:id" element={<TextView />} />
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
  );
}

export default App;
