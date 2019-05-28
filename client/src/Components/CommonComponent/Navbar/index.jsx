import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const Navbar = ({ name }) => (
  <div className="navbar">
    <h3 className="control-board">لوحة التحكم</h3>
    <h4 className="logout">تسجيل الخروج</h4>
    <div className="circle">{name}</div>
  </div>
);
Navbar.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Navbar;
