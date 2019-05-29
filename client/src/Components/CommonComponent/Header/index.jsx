import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
/* when pass Icon put insilde it <Icon type="..." className="header__icon" /> */

const Header = ({ title, Icon }) => (
  <div className="header">
    {Icon}
    <h2 className="header__h2">{title}</h2>
    <hr className="header__line" />
  </div>
);
Header.propTypes = {
  Icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
export default Header;
