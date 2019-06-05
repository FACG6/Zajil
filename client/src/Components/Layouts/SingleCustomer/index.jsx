import React, { Component } from "react";
import { Icon } from "antd";
import { withRouter } from "react-router-dom";

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
      name: "",
      phone: "",
      status: "",
      email: "",
      address: "",
      avatar: ""
    },
    visible: false,
    error: ""
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    let customerInformation;
    fetch(`/api/v1/getCustomerDetails/${id}`)
      .then(res => res.json())
      .then(res => {
        const { error, result } = res;
        if (error === "unauthorized") {
          this.props.history.push("/login");
        } else if (result) {
          customerInformation = result[0];
          return fetch(`/api/v1/image/${result[0].s_image}`);
        } else {
          this.setState({ error });
        }
      })
      .then(res => res.arrayBuffer())
      .then(response => {
        const {
          s_name,
          s_mobile_number,
          s_email,
          status,
          s_address
        } = customerInformation;
        let typeArray = new Uint8Array(response);
        const stringChar = String.fromCharCode.apply(null, typeArray);
        this.setState({
          personalInformation: {
            name: s_name,
            phone: s_mobile_number,
            email: s_email,
            status,
            address: s_address,
            avatar: stringChar
          }
        });
      })
      .catch(() => {
        this.setState({ error: "Something error please try again" });
      });
  }
  handleClick = () => {
    this.setState({ visible: true });
  };
  render() {
    const {
      personalInformation: { name, phone, status, email, address, avatar }
    } = this.state;
    return (
      <>
        <Header Icon={<img src={avatar} className="avatar"/>} title={name} />
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

            {/* <div className="profile__box">
              <p className="profile__box__title">رقم الرخصة</p>
              <p className="profile__value">{licence}</p>
            </div>
            <div className="profile__box">
              <p className="profile__box__title">رقم الهوية</p>
              <p className="profile__value">{ID}</p>
            </div> */}
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

export default withRouter(Profile);
