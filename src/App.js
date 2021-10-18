import React from "react"
import DropArea from "./components/DropArea";
import Nav from './Nav'
import Form from './components/Form'
//eslint-disable-next-line
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

function App() {
  return (
      <Router>
        <div className="App">
            <Nav />
            <Switch>
              <Route path='/' exact component={DropArea} />
              <Route path='/login' component={Form} />
            </Switch>
            {/* <DropArea route="mark"/> */}
            {/* <Footer/> */}
        </div>
    </Router>
  );
}

export default App;
