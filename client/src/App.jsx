import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Icon } from 'antd';


import Sidebar from "./Components/CommonComponent/Sidebar";
import Navbar from "./Components/CommonComponent/Navbar/index";
import Header from './Components/CommonComponent/Header'
//import Login from "./Components/Layouts/Login";
import "./App.css";
import Viewcaptain from "./Components/Layouts/SingleCaptains";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            {/* <Route path="/login" component={Login} exact /> */}
            <Route
              exact
              path="/"
              render={() => (
                <div>
                  <Sidebar />
                  <Navbar />
                  <Header title='ناريمان محمد حلس' Icon={<Icon type="user" className="header__icon" />} />
                  <Viewcaptain />
                </div>
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
