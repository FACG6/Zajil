import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { viewPopup, editPopup, deletePopup } from './Components/CommonComponent/table/Popups';
// import TableComponent from './Components/CommonComponent/table/Table';
// import SideBar from './Components/CommonComponent/Sidebar';
import './App.css';
// import Navbar from './Components/CommonComponent/Navbar';
import Viewcaptain from './Components/Layouts/SingleCaptains';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path="/login" component={Login} exact /> */}
          <Route path="/" component={Viewcaptain} exact />
          {/* <Navbar /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
