import React from 'react';
// eslint-disable-next-line import/no-unresolved
import './style.css';

// eslint-disable-next-line react/prop-types
export default function Header({ title, icon }) {
  return (
    <div className="header">
      {icon}
      <h2>{title}</h2>
      <hr className="line" />
    </div>
  );
}
