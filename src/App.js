import React from "react"
import DropArea from "./components/DropArea";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <DropArea route="answer"/>
      <DropArea route="mark"/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
