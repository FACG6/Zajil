import React, { Component } from 'react';
//import { viewPopup, editPopup, deletePopup } from './Components/CommonComponent/table/Popups';
//import TableComponent from './Components/CommonComponent/table/Table';
import Addcaptain from './Components/CommonComponent/table/Popups'
import './App.css';


class App extends Component {
  state = {

  }
  render() {
    return (
      <div className="App">
        <Addcaptain />
        {/* <TableComponent
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
