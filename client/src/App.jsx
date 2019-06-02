import React, {Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Sidebar from './Components/CommonComponent/Sidebar';
import Header from './Components/CommonComponent/Header';
import Navbar from './Components/CommonComponent/Navbar/index'

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
    <Router>

      <Route exact path='/' render={()=>(
        <div>
 <Sidebar />
 <Navbar />
 
          <Header />
        </div>
         
       
         )} /> 
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
