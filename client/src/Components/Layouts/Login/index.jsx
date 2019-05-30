import React, { Component } from "react";
import "./style.css";

export default class Login extends Component {
  state = {
    userName: "",
    password: "",
    error: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value.trim()
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    const { userName, password } = this.state;
    if(!userName || !password){
      return this.setState({error: 'الرجاء ملىء جميع الحقول'});
    }
    fetch('/api/v1/login', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({password, userName})
    })
    .then(res => res.json())
    .then(res => {
      const { error } = res;
      if (error) {
        this.setState({error});
      } else {
        this.props.history.push('/');
      }
    })
    .catch(() => {
      this.setState({error: 'هناك خطأ جرب مرة أخرى'});
    })

  };

  render() {
    const {error} = this.state;
    return (
      <div className='login'>
        <h1 className='login__title'>زاجل</h1>
        <div className='login__box'>
          <h3 className="login__box-title">تسجيل الدخول</h3>
          <input type="text" name="userName" id="userName" placeholder="إسم المستخدم" onChange={this.handleChange} className='login__box-input' />
          <input type="password" name="password" id="password" placeholder="كلمة المرور" onChange={this.handleChange} className='login__box-input' />
          <input type="submit" value="تسجيل الدخول" onClick={this.handleClick} className='login__box-button' />
        {error && <p className="login__box-error">{error}</p>}
        </div>
      </div>
    );
  }
}
