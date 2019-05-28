import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const CountBox = (props) => {
  const {
    icon, number, title, color,
  } = props;
  return (
    <div className="card" style={{ background: `${color}` }}>
      {icon}
      <div className="card__content">
        <h1>{number}</h1>
        <p className="card__content-title">{title}</p>
      </div>
      <div className="card__footer" />
    </div>
  );
};
CountBox.prototype = {
  icon: PropTypes.node.isRequired,
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default CountBox;
