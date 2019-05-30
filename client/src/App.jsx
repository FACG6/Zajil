import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  viewPopup,
  editPopup,
  deletePopup
} from "./Components/CommonComponent/Table/Popups";
import "./App.css";
import OrdersManagement from "./Components/Layouts/Ordersmanagement/index";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          render={() => (<OrdersManagement />)}
        />
      </Router>
    );
  }
}

export default App;
