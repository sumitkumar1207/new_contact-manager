import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/layout/Header";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/layout/Footer";
import AddContact from "./components/contacts/AddContact";
import About from "./components/contacts/About";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="App">
            <Header branding="Contact-Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;