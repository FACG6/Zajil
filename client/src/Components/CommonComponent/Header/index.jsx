import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
// to insert the Icon =>> <Icon type="carry-out" />

const Header = ({ title, Icon }) => (
  <>
    <div className="header">
      <div className="icon">{Icon}</div>
      <h2>{title}</h2>
    </div>
    <hr className="header__line" />
  </>
);

Header.propTypes = {
  Icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};
export default Header;
