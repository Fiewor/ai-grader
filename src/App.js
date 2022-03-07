import React from "react";
import DropArea from "./components/DropArea";
import DisplayArea from "./components/DisplayArea";
import Nav from "./components/Nav";
import Form from "./components/Form";
import ViewButton from "./components/ViewButton";
//eslint-disable-next-line
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={DropArea} />
          <Route path="/login" component={Form} />
          <Route path="/viewText" component={DisplayArea} />
        </Switch>
        {/* <DropArea route="mark"/> */}
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
