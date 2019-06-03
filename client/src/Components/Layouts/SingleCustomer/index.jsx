import React, { Component } from "react";
import { Icon } from "antd";

import Header from "../../CommonComponent/Header";
import Table from "../../CommonComponent/Table/Table";
import Popup from "./Popup";
import {
  viewPopup,
  editPopup,
  deletePopup
} from "../../CommonComponent/Table/Popups";

import "./style.css";

class Profile extends Component {
  state = {
    personalInformation: {
      name: "شروق عبدالله سعد",
      phone: "0599999999",
      status: "فعال",
      email: "shrooqabdullahsaad@gmail.com",
      address: "غزة",
      licence: "059999999999",
      ID: "00000000",
    },
    visible: false ,
  };
  handleClick = () => {
    this.setState({visible: true});
  }
  render() {
    const {
      personalInformation: { name, phone, status, email, address, licence, ID }
    } = this.state;
    return (
      <>
      {/* <button onClick={this.handleClick}>click</button>
      <Popup visible={this.state.visible} /> */}
        <Header Icon={<Icon type="user" />} title="الصفحة الشخصية" />
        <div className="profile">
          <div className="profile__info">
            <h3 className="profile__info__title">المعلومات الشخصية</h3>
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
          <div className="profile__orders">
            <Table
              pageName="singleCustomer"
              columns={[
                {
                  key: "1",
                  email: "shrooqabdullah@gmail.com",
                  mobileNo: "059999999",
                  date: "14-7-2019",
                  status: "تم",
                  address: "غزة",
                  captain: "محمد",
                  price: "50$"
                }
              ]}
              viewPopup={viewPopup}
              EditPopup={Popup}
              deletePopup={deletePopup}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
