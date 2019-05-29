import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  viewPopup,
  editPopup,
  deletePopup
} from "./Components/CommonComponent/table/Popups";
import TableComponent from "./Components/CommonComponent/table/Table";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          render={() => (
            <TableComponent
              pageName="captains"
              columns={[
                {
                  key: 54,
                  customer: "fgd",
                  captain: "fgdf",
                  date: "dfsdf"
                },
                {
                  key: 56,
                  customer: "fgd",
                  captain: "fgdf",
                  date: "dfsdf"
                }
              ]}
              viewPopup={viewPopup}
              editPopup={editPopup}
              deletePopup={deletePopup}
            />
          )}
        />
      </Router>
    );
  }
}

export default App;
