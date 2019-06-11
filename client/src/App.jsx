import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Icon } from 'antd'
import Customers from './Components/Layouts/Customers/index'
// import Sidebar from "./Components/CommonComponent/Sidebar";
// import Header from "./Components/CommonComponent/Header";
// import Navbar from "./Components/CommonComponent/Navbar/index";
import Login from "./Components/Layouts/Login";
// import Home from "./Components/Layouts/Home";
import EditCaptain from './Components/Layouts/EditCaptain/index';


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
                  {/* <Sidebar />
                  <Navbar />
                  <Header title="الرئيسية" Icon={<Icon type="bank" />} />
                  <Home /> */}
                </div>
              )}
            />
            <Route
              exact
              path="/customers"
              render={() => (<Customers />)}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
