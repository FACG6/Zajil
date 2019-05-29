import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

import './style.css';

export default class Sidebar extends Component {
  state = {
    accounts: 'hidden',
    reports: 'hidden',
    msg: 'hidden',
    settings: 'hidden',
  }
  handleClick = (value) => (e) => {
    this.setState((prev) => {
      let display = '';
      if (prev[value] === 'hidden') {
        display = 'block';
      } else {
        display = 'hidden';
      }
      return { [value]: display };
    })
  }
  render() {
    const { accounts, reports, msg, settings } = this.state;
    return (
      <div className="container">

        <div className="sidebar">
          <h1 className="sidebar__header">زاجل</h1>
          <div className="sidebar__bar">
            <div className='home'>
              <Link to="/" className="sidebar__links ">
                <span>
                  الرئيسية
            <Icon type="home" />
                </span>

              </Link>
            </div>
            <div className='home'>
              <Link to="/" className="sidebar__links" >
                <span>
                  إدارة الطلبات
            {' '}
                  <Icon type="menu-unfold" />
                </span>

              </Link>
            </div>


            <div className="sidebar__dropdown lists" onClick={this.handleClick('accounts')}>
              <Icon type="down" />
              إدارة الحسابات
          {' '}

              <Icon type="tool" />
              {' '}
              <div className={`sidebar__dropdowncontainer ${accounts}`}>
                <Link to="/customers" className="sidebar__links ">
                  <span>
                    المستخدمين
              <Icon type="team" />
                  </span>
                </Link>
                <Link to="/captains" className="sidebar__links">
                  <span>
                    الكابتن
              <Icon type="car" />
                  </span>

                </Link>
                <Link className="sidebar__links">
                  <span>
                    المشرفين
              <Icon type="star" />
                  </span>

                </Link>
              </div>

            </div>


            <div onClick={this.handleClick('reports')} className="sidebar__dropdown lists" >
              <Icon type="down" />
              إدارة التقارير
          {' '}
              <Icon type="profile" />
              <div className={`sidebar__dropdowncontainer ${reports}`}>
                <Link to="" className="sidebar__links ">
                  <span>
                    تقارير الكابتن
              <Icon type="profile" />
                  </span>

                </Link>
                <Link to="" className="sidebar__links">
                  <span>
                    تقارير المستخدم
              <Icon type="profile" />
                  </span>

                </Link>
                <Link to="" className="sidebar__links ">
                  <span>
                    تقارير عامة
              {' '}
                    <Icon type="profile" />
                  </span>

                </Link>
              </div>
            </div>


            <div onClick={this.handleClick('msg')} className="sidebar__dropdown lists" >
              <Icon type="down" />
              إدارة الرسائل
          <Icon type="mail" />
              <div className={`sidebar__dropdowncontainer ${msg}`}>
                <Link to="" className="sidebar__links ">
                  <span>
                    رسائل قصيرة
              {' '}
                    <Icon type="mail" />
                  </span>

                </Link>
                <Link to="" className="sidebar__links">
                  <span>
                    اشعارات
              {' '}
                    <Icon type="bell" />
                  </span>

                </Link>
              </div>
            </div>
            <div className='home'>

              <Link to="" className="sidebar__links">
                <span>
                  إدارة الاستفسارات
            {' '}
                  <Icon type="wechat" />
                </span>

              </Link>
            </div>
            <div className='home'>
              <Link to="" className="sidebar__links">
                <span>
                  إدارة البروموكود
            {' '}
                  <Icon type="setting" />
                </span>

              </Link>
            </div>


            <div onClick={this.handleClick('settings')} className="sidebar__dropdown lists" >
              <Icon type="down" />
              الإعدادات
          {' '}
              <Icon type="setting" />
              <div className={`sidebar__dropdowncontainer ${settings}`}>
                <Link to="" className="sidebar__links">
                  <span>
                    ثوابت النظام
              {' '}
                    {' '}
                    <Icon type="setting" />
                  </span>

                </Link>
                <Link to="" className="sidebar__links">
                  <span>
                    ثوابت لوحة التحكم
              {' '}
                    {' '}
                    <Icon type="control" />
                  </span>

                </Link>
                <Link to="" className="sidebar__links">
                  <span>
                    إدارة الاماكن العامة
              {' '}
                    {' '}
                    <Icon type="environment" />
                  </span>

                </Link>
              </div>
            </div>
            <div className='home'>
              <Link to="" className="sidebar__links">
                <span>
                  إتصل بنا
            {' '}
                  <Icon type="phone" />
                </span>

              </Link>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
