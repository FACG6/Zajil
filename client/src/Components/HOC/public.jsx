import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import checkLogin from "../helper/checkLogin";
import Home from '../Layouts/Home';

export default WrappedComponent =>
  class extends Component {
    state = {
      fetch: false,
      login: null,
      error: null
    };

    componentDidMount() {
        checkLogin()
        .then(response => {
          const { result } = response;
          this.setState({ login: result, fetch: true });
        })
        .catch(error => {
          this.setState({ error, fetch: true });
        });
    }

    render() {
      const { fetch, login, error } = this.state;
      if (!fetch) {
        return <h1> Loading </h1>;
      }
      if(fetch && error) return <p>{error}</p>
      if (login) return <Redirect to={<Home />} />;
      return <WrappedComponent {...this.props} />;
    }
  };
