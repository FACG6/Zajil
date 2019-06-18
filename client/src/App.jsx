import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Customers from './Components/Layouts/Customers/index';
import Sidebar from "./Components/CommonComponent/Sidebar";
import Navbar from "./Components/CommonComponent/Navbar";
import Login from "./Components/Layouts/Login";
import Home from "./Components/Layouts/Home";
import OrdersManagement from "./Components/Layouts/Ordersmanagement";
import SingleCaptain from "./Components/Layouts/SingleCaptains";
import SingleCastomer from "./Components/Layouts/SingleCustomer";
import Captains from "./Components/Layouts/Captains"

import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/login" component={Login} exact />
          <Sidebar />
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/orders" component={OrdersManagement} exact />
            <Route
              exact
              path="/customers"
              render={() => (<Customers />)}
            />
            <Route
              exact
              path="/captains"
              render={() => (<Captains />)}
            />
            <Route
              exact
              path="/captains/profile/:id"
              render={() => (<SingleCaptain />)}
            />
            <Route
              exact
              path="/customers/profile/:id"
              render={() => (<SingleCastomer />)}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

