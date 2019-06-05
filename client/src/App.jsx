import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddCaptain from './Components/Layouts/AddCaptain/index';
// import { Icon } from 'antd';

// import Sidebar from "./Components/CommonComponent/Sidebar";
// import Header from "./Components/CommonComponent/Header";
// import Navbar from "./Components/CommonComponent/Navbar/index";
//import Login from "./Components/Layouts/Login";
import "./App.css";

class App extends Component {
  state = {

  }
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
                  {/* <Sidebar />
                  <Navbar /> */}
                  <AddCaptain />
                  {/* <Header /> */}
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
