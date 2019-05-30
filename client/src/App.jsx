<<<<<<< HEAD
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
// import Navbar from './Components/CommonComponent/Navbar';
import SideBar from './Components/CommonComponent/Sidebar';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <BrowserRouter>
        <Route path="/" component={SideBar} />
      </BrowserRouter>


=======
import React, {Component} from 'react';
import { viewPopup, editPopup, deletePopup } from './Components/CommonComponent/table/Popups';
import TableComponent from './Components/CommonComponent/table/Table';
import './App.css';


class App extends Component {
  state = {
    
  }
  render() {
    return (
      <div className="App">
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
      />
>>>>>>> d4abe030a605759cad3fbec3c547a6dec3379b9c
    </div>
    );
  }
}

export default App;
