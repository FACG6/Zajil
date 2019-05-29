import React, { Component } from 'react';
import axios from "axios";
import { Icon } from 'antd';
import Header from '../../CommonComponent/Header'
import swal from 'sweetalert2';
import './style.css';

export default class Addcaptain extends Component {
  state = {
    name: "",
    phone: "",
    IDNumber: "",
    status: "",
    email: "",
    address: "",
    licenceNumber: "",
    avatar: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value.trim()
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    const { name, phone, IDNumber, status, email, address, licenceNumber, avatar } = this.state;
    axios.post("/api/v1/postCaptain", {
      name, phone, IDNumber, status, email, address, licenceNumber, avatar
    })
      .then(res => {

      })
      .catch(e => {

      })

  };
  handleExit = (e) => {
    e.preventDefault();

  }

  render() {
    return (
      <div className='add-captain'>
        <Header title='اضافة كابتن' Icon={<Icon type="user" className="header__icon" />} />
        <div className='add-captain-box'>
          <div className='right-box'>
            <p>الاسم:</p>
            <input type="text" name="name" id="name" onChange={this.handleChange} className='' />
            <p>الهاتف المحمول:</p>
            <input type="text" name="phone" id="phone" onChange={this.handleChange} className='' />
            <p>رقم الهوية:</p>
            <input type="text" name="IDNumber" id="IDNumber" onChange={this.handleChange} className='' />
            <p>الحالة:</p>
            <select name="status" id='status' onChange={this.handleChange} className=''>
              <option value="0">فعال</option>
              <option value="1">غير فعال </option>
            </select>
          </div>
          <div className='left-box'>
            <p>البريد الالكتروني:</p>
            <input type="email" name="email" id="email" onChange={this.handleChange} className='' />
            <p>العنوان:</p>
            <input type="text" name="address" id="address" onChange={this.handleChange} className='' />
            <p>رقم الرخصة:</p>
            <input type="text" name="licenceNumber" id="licenceNumber" onChange={this.handleChange} className='' />
            <p>صورة الهوية:</p>
            <input type="file" name="avatar" id="avatar" onChange={this.handleChange} className='' accept="image/*" />
            <input type="submit" value="حفظ" onClick={this.handleClick} className='' />
            <input type="submit" value="الغاء" onClick={this.handleExit} className='' />
          </div>
        </div>
      </div>

    );
  }
}

const viewPopup = (id, viewPopupHtmlString) => {
  const span = document.createElement('span');
  const details = viewPopupHtmlString;
  span.innerHTML = `${details}`;
  swal.fire({
    title: 'Are you sure?',
    showCancelButton: true,
    showConfirmButton: true,
    confirmButtonColor: '#28a745',
    confirmButtonText: 'تعديل',
    cancelButtonText: 'إغلاق',
    cancelButtonColor: '#2b2a37',
    closeOnConfirm: true,
    reverseButtons: true,
    html: span,
  });
};

const editPopup = (id, editPopupHtmlString) => {
  const span = document.createElement('span');
  const details = editPopupHtmlString;
  span.innerHTML = `${details}`;
  swal.fire({
    title: 'Are you sure?',
    showCancelButton: true,
    showConfirmButton: true,
    confirmButtonColor: '#ffc700bd',
    confirmButtonText: 'تعديل',
    cancelButtonText: 'إغلاق',
    cancelButtonColor: '#2b2a37',
    closeOnConfirm: true,
    reverseButtons: true,
    html: span,
  });
};

const deletePopup = (id, deletePopupHtmlString) => {
  const span = document.createElement('span');
  const details = deletePopupHtmlString;
  span.innerHTML = `${details}`;
  swal.fire({
    title: 'Are you sure?',
    showCancelButton: true,
    showConfirmButton: true,
    confirmButtonColor: '#ff4343',
    confirmButtonText: 'حذف',
    cancelButtonText: 'إغلاق',
    cancelButtonColor: '#2b2a37',
    closeOnConfirm: true,
    reverseButtons: true,
    html: span,
  });
};

export { viewPopup, editPopup, deletePopup };
