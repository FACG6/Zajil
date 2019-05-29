import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const Button = ({ name, onClick }) => (
  <div>
    <button className="button" type="submit" onClick={onClick}>
      {name}
    </button>
  </div>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
