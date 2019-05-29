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
    arrow_down_accounts:'hidden',
    arrow_up_accounts:'inline',
    arrow_down_reports:'hidden',
    arrow_up_reports:'inline',
    arrow_down_msg:'hidden',
    arrow_up_msg:'inline',
    arrow_down_settings:'hidden',
    arrow_up_settings:'inline',
  }
  handleClick = (value) => (e) => {
    this.setState((prev) => {
      let display = '';
      let up='';
      let down='';
      if (prev[value] === 'hidden') {
        display = 'block';
        up='hidden';
        down='inline';
      } else {
        display = 'hidden';
        up='inline';
        down='hidden';
      }
      if(value==='accounts')
      return { [value]: display , arrow_down_accounts:down,arrow_up_accounts:up};
      if(value==='reports')
      return { [value]: display , arrow_down_reports:down,arrow_up_reports:up};
      if(value==='msg')
      return { [value]: display , arrow_down_msg:down,arrow_up_msg:up};
      if(value==='settings')
      return { [value]: display , arrow_down_settings:down,arrow_up_settings:up};
    })
  }
  render() {
      
    const { accounts, reports, msg, settings,arrow_down_accounts,arrow_up_accounts ,arrow_down_reports,arrow_up_reports,arrow_down_msg,arrow_up_msg,arrow_down_settings,arrow_up_settings} = this.state;
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
            <span className={`${arrow_down_accounts}`}>
            <Icon type="down" />
            </span>
            <span className={`${arrow_up_accounts}`}>
            <Icon type="up"  />
            </span>
            
              
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
            <span className={`${arrow_down_reports}`}>
            <Icon type="down" />
            </span>
            <span className={`${arrow_up_reports}`}>
            <Icon type="up"  />
            </span>
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
            <span className={`${arrow_down_msg}`}>
            <Icon type="down" />
            </span>
            <span className={`${arrow_up_msg}`}>
            <Icon type="up"  />
            </span>
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
            <span className={`${arrow_down_settings}`}>
            <Icon type="down" />
            </span>
            <span className={`${arrow_up_settings}`}>
            <Icon type="up"  />
            </span>
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
