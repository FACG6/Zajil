import React, { Component } from "react";
import { Icon } from "antd";

import Sidebar from "../../CommonComponent/Sidebar";
import Navbar from "../../CommonComponent/Navbar";
import Header from "../../CommonComponent/Header";

import './style.css';

class Profile extends Component {
  state = {
    personalInformation: {
      name: "شروق عبدالله سعد",
      phone: "0599999999",
      status: "فعال",
      email: "shrooqabdullahsaad@gmail.com",
      address: "غزة",
      licence: "059999999999",
      ID: "00000000"
    }
  };
  render() {
    const {
      personalInformation: { name, phone, status, email, address, licence, ID }
    } = this.state;
    return (
      <>
        <Navbar />
        <Sidebar />
        <Header Icon={<Icon type="user" />} title="الصفحة الشخصية" />
        <div className="profile">
          <div className="profile__info">
            <div className="profile__box">
              <p className="profile__box__title">الاسم</p>
              <p className="profile__value">{name}</p>
            </div>
            <div className="profile__box">
              <p className="profile__box__title">الهاتف المحمول</p>
              <p className="profile__value">{phone}</p>
            </div>
            <div className="profile__box">
              <p className="profile__box__title">الحالة</p>
              <p className="profile__value">{status}</p>
            </div>
            <div className="profile__box">
              <p className="profile__box__title">البريد الالكتروني</p>
              <p className="profile__value">{email}</p>
            </div>
            <div className="profile__box">
              <p className="profile__box__title">العنوان</p>
              <p className="profile__value">{address}</p>
            </div>

            <div className="profile__box">
              <p className="profile__box__title">رقم الرخصة</p>
              <p className="profile__value">{licence}</p>
            </div>
            <div className="profile__box">
              <p className="profile__box__title">رقم الهوية</p>
              <p className="profile__value">{ID}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
