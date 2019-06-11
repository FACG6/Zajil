import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Icon } from 'antd'
import Customers from './Components/Layouts/Customers/index'
// import Sidebar from "./Components/CommonComponent/Sidebar";
// import Header from "./Components/CommonComponent/Header";
// import Navbar from "./Components/CommonComponent/Navbar/index";
import Login from "./Components/Layouts/Login";
// import Home from "./Components/Layouts/Home";
import EditCaptain from './Components/Layouts/EditCaptain/index';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Router>
          <>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnVisibilityChange
              draggable
              pauseOnHover
            />
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
          </>
        </Router>
      </div>
    );
  }
}

export default App;
