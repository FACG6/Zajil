import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import TableComponent from "./Components/CommonComponent/table/Table";
// import SideBar from "./Components/CommonComponent/Sidebar";
import Login from "./Components/Layouts/Login";
import "./App.css";

// import Home from "./Components/Layouts/Home";

class App extends Component {
  state = {

  };
  render() {
    return <div className="App">
    <Router>
      <Switch>
        <Route path="/login" component={Login} exact />
      </Switch>
    </Router>
    </div>;
  }
}

export default App;
