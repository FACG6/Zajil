import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Icon}from 'antd';
import Customers from './Components/Layouts/Customers/index';
import Sidebar from "./Components/CommonComponent/Sidebar";
import Header from "./Components/CommonComponent/Header";
import Navbar from "./Components/CommonComponent/Navbar";
import Profile from "./Components/Layouts/SingleCustomer";

import Login from "./Components/Layouts/Login";
import Ordersmanagement from "./Components/Layouts/Ordersmanagement/index";
import Home from "./Components/Layouts/Home";
import Captains from "./Components/Layouts/Captains"

import "./App.css";
import OrdersManagement from "./Components/Layouts/Ordersmanagement";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login" component={Login} exact />
            <Route
              exact
              path="/"
              render={() => (
                <div className="app" >
                  <Sidebar />
                  <Navbar />
                <OrdersManagement />
                  {/* <Home /> */}
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
            
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
