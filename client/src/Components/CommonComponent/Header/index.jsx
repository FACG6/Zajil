import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './style.css';
/* when pass Icon put insilde it <Icon type="..." className="header__icon" /> */

const Header = ({ title, Icon }) => (
  <React.Fragment>
    <div className="header">
      {/* <Icon type="carry-out" /> */}
      <div className="icon">{Icon}</div>
      <h2>{title}</h2>
    </div>
  </React.Fragment>
);

Header.propTypes = {
  Icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};
export default Header;