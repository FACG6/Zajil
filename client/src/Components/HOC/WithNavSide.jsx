import React, { Component } from 'react';

import Sidebar from '../CommonComponent/Sidebar';
import Navbar from '../CommonComponent/Navbar';

export default WrappedComponent =>
  class extends Component {
    render() {
      return (
        <>
          <Sidebar />
          <Navbar />
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
