import React, { Component } from "react";
import axios from "axios";
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

  };

  render() {
    return (
      <div className='login'>
        <h2 className='login__title'>زاجل</h2>
        <div className='login__box'>
        <h3 className="login__box__title">تسجيل الدخول</h3>
          <input type="text" name="userName" id="userName" placeholder="إسم المستخدم" onChange={this.handleChange} className='login__box__input' />
          <input type="password" name="password" id="password" placeholder="كلمة المرور" onChange={this.handleChange} className='login__box__input' />
          <input type="submit" value="تسجيل الدخول" onClick={this.handleClick} className='login__box__button' />
        </div>
      </div>
    );
  }
}
