import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Icon}from 'antd';
// import Customers from './Components/Layouts/Customers/index';
import Sidebar from "./Components/CommonComponent/Sidebar";
import Header from "./Components/CommonComponent/Header";
import Navbar from "./Components/CommonComponent/Navbar";
import Profile from "./Components/Layouts/SingleCustomer";
import Login from "./Components/Layouts/Login";
import Order from './Components/Layouts/Order/index'
import Home from "./Components/Layouts/Home";
import Captains from "./Components/Layouts/Captains";
import NotFound from "./Components/Layouts/NotFound";
import Ordersmanagement from "./Components/Layouts/Ordersmanagement/index";
import "./App.css";

import Viewcaptain from "./Components/Layouts/SingleCaptains";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={() => (
              <React.Fragment>
              <Sidebar />
              <Navbar />
              <Ordersmanagement />
              </React.Fragment>
            )} />
            <Route path="/login" component={Login} exact />
            <Route
              exact
              path="/captains/profile/:id"
              render={() => (
                <div className="app" >
                  <Sidebar />
                  <Navbar />
                  <Viewcaptain />
                </div>
              )}
            />

            <Route
              exact
              path="/customers/profile/:id"
              render={() => (
                <div>
                  <Sidebar />
                  <Navbar />
                  <Profile />
                </div>
              )}
              />
              <Route exact path="/orders" render = {() => (
                <div>
                <Sidebar />
                <Navbar />
                <Order />
              </div>
              )} />
          
            <Route
              render={() => (<NotFound />)}
            />
            
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
