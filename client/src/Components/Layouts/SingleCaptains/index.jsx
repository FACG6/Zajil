import React, { Component } from 'react';
import './style.css';
import { Icon } from 'antd';
import Header from '../../CommonComponent/Header';
import Navbar from '../../CommonComponent/Navbar';
import SideBar from '../../CommonComponent/Sidebar'
import Table from '../../CommonComponent/Table/Table';
import { viewPopup, editPopup, deletePopup } from "../../CommonComponent/Table/Popups";

export default class Viewcaptain extends Component {
  state = {
    columns:
      [
        { key: 35, customer: "أحمد", date: "4/7/1995", status: "تم", price: "600$" },
        { key: 50, customer: "كنعان", date: "4/3/1995", status: "تم", price: "800$" },
        { key: 30, customer: "أمين", date: "8/9/1995", status: "جاري التنفيذ", price: "700$" },
        { key: 15, customer: "عبدالله", date: "1/4/1995", status: "تم", price: "500$" },
        { key: 89, customer: "اسراء", date: "1/9/1995", status: "تم", price: "300$" },
      ],
    name: 'ناريمان محمد حلس',
    email: 'mm@hhh.com',
    id_number: '123456',
    phone_number: '05987055',
    status: 'غير فعال',
    address: 'غزة',
    licience_number: '123456789',
  }
  render() {
    return (
      <div>
        <Navbar />
        <SideBar />
        <Header title='ناريمان محمد حلس' Icon={<Icon type="user" className="header__icon" />} />
        <div className='view-captain-personal-information'>
          <h2 className='view-captain-personal-information-title'>المعلومات الشخصية</h2>
          <div className='personal-box'>
            <p>الاسم:{this.state.name}</p>
            <p>البريد الالكتروني:{this.state.email}</p>
            <p>رقم الهوية:{this.state.id_number}</p>
            <p>الهاتف المحمول:{this.state.phone_number}</p>
            <p>الحالة:{this.state.status}</p>
            <p>العنوان:{this.state.address}</p>
            <p>رقم الرخصة:{this.state.licience_number}</p>
          </div>
        </div>
        <div className='captain-orders'>
          <h2>الطلبات الخاصة بالمستخدم</h2>
          <div className="order-table">
            <Table pageName="singleCaptain" columns={this.state.columns} viewPopup={viewPopup} editPopup={editPopup} deletePopup={deletePopup} />
          </div>
        </div>
      </div>
    );
  }

}