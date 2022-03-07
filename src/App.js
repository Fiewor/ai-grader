import React from "react";
import DropArea from "./components/DropArea";
import DisplayArea from "./components/DisplayArea";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<DropArea />} />
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
