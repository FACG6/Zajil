import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
// import Navbar from './Components/CommonComponent/Navbar';
<<<<<<< HEAD
import SideBar from './Components/CommonComponent/Sidebar';
=======
import Button from './Components/CommonComponent/Button';

>>>>>>> 7496a25b97f34be5cf54cb6bd5bde8fc66d9d11c

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      {/* <Navbar /> */}
      <BrowserRouter>
        <Route path="/" component={SideBar} />
      </BrowserRouter>


=======
      <Button name="d" />
>>>>>>> 7496a25b97f34be5cf54cb6bd5bde8fc66d9d11c
    </div>
  );
}

export default App;
