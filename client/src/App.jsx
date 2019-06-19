import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Customers from "./Components/Layouts/Customers/index";
import Sidebar from "./Components/CommonComponent/Sidebar";
import Navbar from "./Components/CommonComponent/Navbar";
import Login from "./Components/Layouts/Login";
import Home from "./Components/Layouts/Home";
import OrdersManagement from "./Components/Layouts/Ordersmanagement";
import SingleCaptain from "./Components/Layouts/SingleCaptains";
import SingleCastomer from "./Components/Layouts/SingleCustomer";
import Captains from "./Components/Layouts/Captains";

import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/login" component={Login} exact />
          <Switch>
            <Route
              path="/"
              render={() => (
                <>
                  <Sidebar />
                  <Navbar />
                  <Home />
                </>
              )}
              exact
            />
            <Route
              path="/orders"
              render={() => (
                <>
                  <Sidebar />
                  <Navbar />
                  <OrdersManagement />
                </>
              )}
              exact
            />
            <Route
              exact
              path="/customers"
              render={() => (
                <>
                  <Sidebar />
                  <Navbar />
                  <Customers />
                </>
              )}
            />
            <Route
              exact
              path="/captains"
              render={() => (
                <>
                  <Sidebar />
                  <Navbar />
                  <Captains />
                </>
              )}
            />
            <Route
              exact
              path="/captains/profile/:id"
              render={() => (
                <>
                  <Sidebar />
                  <Navbar />
                  <SingleCaptain />
                </>
              )}
            />
            <Route
              exact
              path="/customers/profile/:id"
              render={() => (
                <>
                  <Sidebar />
                  <Navbar />
                  <SingleCastomer />
                </>
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
