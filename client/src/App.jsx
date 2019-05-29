import React, {Component} from 'react';
import { viewPopup, editPopup, deletePopup } from './Components/CommonComponent/table/Popups';
import TableComponent from './Components/CommonComponent/table/Table';
import './App.css';
// import Navbar from './Components/CommonComponent/Navbar';
import Viewcaptain from './Components/Layouts/SingleCaptains';

function App() {
  return (
    <div className="App">
      <Viewcaptain />
      {/* <Navbar /> */}
    </div>
    );
  }


export default App;
