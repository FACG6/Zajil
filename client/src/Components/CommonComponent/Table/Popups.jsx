import React, { Component } from 'react';
import axios from "axios";
import swal from 'sweetalert2';
import './style.css';

export default class Addcaptain extends Component {
  state = {
    data: {
      name: "",
      phone: "",
      IDNumber: "",
      status: "",
      email: "",
      address: "",
      licenceNumber: "",
      avatar: "",
    }
  };
  popup = async () => {

    const { value: formValues } = await swal.fire({
      title: '',
      html: `
      <div class="add-captain">
      <p class="add-captain-title">إضافة كابتن</p>
      <hr>
      <div class='add-captain-container'>
      <div class="add-captain-container-left">
      <p>:البريد</p> <input type="email" name="email" id="email" class="add-captain__input" /> 
      <p>:العنوان</p> <input type="text" name="address" id="address"  class="add-captain__input" />  
      <p>:رقم الرخصة</p><input type="text" name="licenceNumber" id="licenceNumber" class="add-captain__input" /> 
      <p>:صورة الهوية</p> 
      <div class="add-captain-container-left-avatar">
      <label for="avatar" class="add-captain-container-left-avatar-label">أرفق صورة</label>
      <input id="avatar" style="visibility:hidden;" type="file">
      </div>
      </div>
      <div class="add-captain-container-center"></div>
      <div class="add-captain-container-right">
      <p>:الاسم</p><input type="text" name="name" id="name" class="add-captain__input"/>
      <p>:الهاتف</p><input type="text" name="phone" id="phone" class="add-captain__input" />
      <p>:رقم الهوية</p><input type="text" name="IDNumber" id="IDNumber" class="add-captain__input" /> 
      <p>:الحالة</p><select name="status" id="status" class="add-captain__select"> <option value="0">فعال</option> <option value="1">غير فعال </option> </select>
      </div> 
      </div>  
      </div>`,
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonColor: '#28a745',
      confirmButtonText: 'حفظ',
      cancelButtonText: 'إلغاء',
      cancelButtonColor: '#2b2a37',
      closeOnConfirm: true,
      reverseButtons: true,
      preConfirm: () => {
        return {
          name: document.getElementById('name').value,
          phone: document.getElementById('phone').value,
          IDNumber: document.getElementById('IDNumber').value,
          status: document.getElementById('status').value,
          email: document.getElementById('email').value,
          address: document.getElementById('address').value,
          licenceNumber: document.getElementById('licenceNumber').value,
          avatar: document.getElementById('avatar').value,
        }

      }
    })

    if (formValues) {

      this.setState({ data: formValues });
      const inputValues = Object.values(formValues)
      const inputObject = { ...inputValues };
      axios.post("/api/v1/postCaptain", inputObject)
        .then(res => {
          //change state as responce from back
        })
        .catch(e => {
          //enternal server error
        })
    }
  }

  render() {
    return (
      <button onClick={this.popup} >add captain</button>
    );
  };
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

export { viewPopup, editPopup, deletePopup, Addcaptain };
