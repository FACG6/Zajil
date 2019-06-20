import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Customers from "./Components/Layouts/Customers/index";
import Login from "./Components/Layouts/Login";
import Home from "./Components/Layouts/Home";
<<<<<<< HEAD
import Customers  from "./Components/Layouts/Customers/index"
=======
import OrdersManagement from "./Components/Layouts/Ordersmanagement";
import SingleCaptain from "./Components/Layouts/SingleCaptains";
import SingleCastomer from "./Components/Layouts/SingleCustomer";
>>>>>>> 125b00ae44cbf8eb7d6948030c9caec7f8357a1c
import Captains from "./Components/Layouts/Captains";
import NotFound from "./Components/Layouts/NotFound";
import InProgress from './Components/Layouts/ToBuildLater';

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
              component = {Home}
              exact
            />
            <Route
              path="/orders"
              component={OrdersManagement}
              exact
            />
            <Route
              exact
              path="/customers"
              component={Customers}
            />
            <Route
              exact
              path="/captains"
              component={Captains}
            />
            <Route
              exact
              path="/captains/profile/:id"
              component={SingleCaptain}
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
              path="/in-progress"
              component={InProgress}
            />
<<<<<<< HEAD
=======

            <Route component={NotFound} />
>>>>>>> 125b00ae44cbf8eb7d6948030c9caec7f8357a1c
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
