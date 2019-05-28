import React, { Component } from "react";
import axios from "axios";
import { loginValidation } from "../../helper/validationSchema";
import "./style.css";

export default class Login extends Component {
  state = {
    userName: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value.trim()
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    const { userName, password } = this.state;
    loginValidation
      .validate({ userName, password })
      .then(({ userName, password }) =>
        axios.post("/api/v1/login", {
          password,
          userName
        })
          .then(res => {
            //login now masseg
            //res from back then redirect to home page
          })
          .catch(e => {
            //show massege there is an internal server error
          })
      )
      .catch(e => {
        //show message there is a front end validation error
      }
      )

  };

  render() {
    return (
      <div className='login-page'>
        <h2 className='title'>زاجل</h2>
        <div className='login-box'>
          <h2>تسجيل الدخول</h2>
          <input type="text" name="userName" id="userName" placeholder="إسم المستخدم" onChange={this.handleChange} className='input' />
          <input type="password" name="password" id="password" placeholder="كلمة المرور" onChange={this.handleChange} className='input' />
          <input type="submit" value="تسجيل الدخول" onClick={this.handleClick} className='login-button' />
        </div>
      </div>
    );
  }
}