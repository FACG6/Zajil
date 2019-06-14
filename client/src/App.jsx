import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Icon } from 'antd'
import Customers from './Components/Layouts/Customers/index'
import Header from "./Components/CommonComponent/Header";
import Login from "./Components/Layouts/Login";
import Home from "./Components/Layouts/Home";
import EditCaptain from './Components/Layouts/Captains/EditCaptain';
import Sidebar from "./Components/CommonComponent/Sidebar";
import Navbar from "./Components/CommonComponent/Navbar";
import Profile from "./Components/Layouts/SingleCustomer";
import Captains from "./Components/Layouts/Captains"
import "./App.css";


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
                <div>
                  <EditCaptain />
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
