import React, {Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { viewPopup, editPopup, deletePopup } from './Components/CommonComponent/table/Popups';
import TableComponent from './Components/CommonComponent/table/Table';
import './App.css';

import Home from './Components/Layouts/Home';
import Sidebar from './Components/CommonComponent/Sidebar';

class App extends Component {
  state = {
    
  }
  render() {
    return (
      <div className="App">
    <Router>

      <Route exact path='/' component={Sidebar} /> 
    </Router>
      
    
        {/* <Home />
      <TableComponent
        pageName="customers"
        columns={[{
          key: 54, customer: 'fgd', captain: 'fgdf', date: 'dfsdf',
        }, {
          key: 56, customer: 'fgd', captain: 'fgdf', date: 'dfsdf',
        }]}
        viewPopup={viewPopup}
        editPopup={editPopup}
        deletePopup={deletePopup}
      /> */}
    </div>
    );
  }
}

export default App;
