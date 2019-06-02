import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import PropTypes from 'prop-types';

const Navbar = ({ name }) => (
  <div className="navbar">
    <h3 className="control-board">لوحة التحكم</h3>
    <div className='navbar__container'>
      <div className="circle">{name}</div>
      <Link to='/logout' className="logout">
تسجيل الخروج
      </Link>
      
    </div>
    
  </div>
);
Navbar.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Navbar;
