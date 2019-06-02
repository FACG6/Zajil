import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { viewPopup, editPopup, deletePopup } from './Components/CommonComponent/table/Popups';
// import TableComponent from './Components/CommonComponent/table/Table';
// import SideBar from './Components/CommonComponent/Sidebar';
import Profile from "./Components/Layouts/SingleCustomer";
import "./App.css";

// import Home from './Components/Layouts/Home';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/customers/profile/:id" component={Profile} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
