import React, { Component } from "react";
import { Icon } from "antd";

import Sidebar from "../../CommonComponent/Sidebar";
import Navbar from "../../CommonComponent/Navbar";
import Header from "../../CommonComponent/Header";

class Profile extends Component {
  state = {
      personalInformation: {
          name: '',
          phone: '',
          status: '',
          email: '',
          address: '',
          licence: '',
          ID: ''
      }
  };
  render() {
    return (
      <>
        <Navbar />
        <Sidebar />
        <Header Icon={<Icon type="user" />} title="الصفحة الشخصية" />
        <div className="profile">
          <div className="profile__box">
            <p className="profile__name">الاسم</p>
            <p className="profile__value"></p>
          </div>
          <div className="profile__box">
            <p className="profile__phone">الهاتف المحمول</p>
            <p className="profile__value"></p>
          </div>
          <div className="profile__box">
            <p className="profile__status">الحالة</p>
            <p className="profile__value"></p>
          </div>
          <div className="profile__box">
            <p className="profile__email">البريد الالكتروني</p>
            <p className="profile__value"></p>
          </div>
          <div className="profile__box">
            <p className="profile__address">العنوان</p>
            <p className="profile__value"></p>
          </div>

          <div className="profile__box">
            <p className="profile__licence">رقم الرخصة</p>
            <p className="profile__value"></p>
          </div>
          <div className="profile__box">
            <p className="profile__id">رقم الهوية</p>
            <p className="profile__value"></p>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
