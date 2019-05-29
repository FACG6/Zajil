import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
// import Navbar from './Components/CommonComponent/Navbar';
import SideBar from './Components/CommonComponent/Sidebar';
import Button from './Components/CommonComponent/Button';


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <BrowserRouter>
        <Route path="/" component={SideBar} />
      </BrowserRouter>


    </div>
  );
}

export default App;
