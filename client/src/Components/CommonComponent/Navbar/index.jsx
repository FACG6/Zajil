import React from 'react';
import './style.css';

const Navbar = ({ name }) => (
  <div className="navbar">
    <h3 className="controlBoard">لوحة التحكم</h3>
    <h4 className="logout">تسجيل الخروج</h4>
    <div className="circle">{name}</div>
  </div>
);

export default Navbar;
