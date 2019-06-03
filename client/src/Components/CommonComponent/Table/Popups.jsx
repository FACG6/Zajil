import React, { Component } from 'react';
import axios from "axios";
import swal from 'sweetalert2';
import './style.css';
import { captainSchema } from '../../helper/validationSchema'

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
    },
    Error: {
      name: "",
      phone: "",
      IDNumber: "",
      status: "",
      email: "",
      address: "",
      licenceNumber: "",
    }
  };
  popup = async () => {

    const { value: formValues } = await swal.fire({
      title: '',
      html: `
      <div class="add-captain">
      <h2 class="add-captain-title">إضافة كابتن</h2>
      <hr>
      <div class='add-captain-container'>
      <div class="add-captain-container-left">
      <div>
      <p>:البريد</p> <input type="email" name="email" id="email" class="add-captain__input" /> 
      <span class='error-message'>${this.state.Error.email}</span>
      </div>
      <div>
      <p>:العنوان</p> <input type="text" name="address" id="address"  class="add-captain__input" />
      <span class='error-message'>${this.state.Error.address}</span>
      </div>  
      <div>
      <p>:رقم الرخصة</p><input type="text" name="licenceNumber" id="licenceNumber" class="add-captain__input" /> 
      <span class='error-message'>${this.state.Error.licenceNumber}</span>
      </div>
      <p>:صورة الهوية</p> 
      <div class="add-captain-container-left-avatar">
      <label for="avatar" class="add-captain-container-left-avatar-label">أرفق صورة</label>
      <input id="avatar" style="visibility:hidden;" type="file" accept=".jpg , .png">
      </div>
      </div>
      <div class="add-captain-container-center"></div>
      <div class="add-captain-container-right">
      <div>
      <p>:الاسم</p><input type="text" name="name" id="name" class="add-captain__input"/>
      <span class='error-message'>${this.state.Error.name}</span>
      </div>
      <div>
      <p>:الهاتف</p><input type="text" name="phone" id="phone" class="add-captain__input" />
      <span class='error-message'>${this.state.Error.phone}</span>
      </div>
      <div>
      <p>:رقم الهوية</p><input type="text" name="IDNumber" id="IDNumber" class="add-captain__input" />
      <span class='error-message'>${this.state.Error.IDNumber}</span>
      </div>
      <div>
      <p>:الحالة</p><select name="status" id="status" class="add-captain__select"> <option value="0">فعال</option> <option value="1">غير فعال </option> </select>
      <span class='error-message'>${this.state.Error.status}</span>
      </div>
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

      this.setState({ data: formValues, Error: {} });
      const { Error, ...data } = this.state;
      captainSchema
        .validate(data)
        .then((validateFormValue) => {
          // console.log(validateFormValue, 11111111);
          axios.post("/api/v1/addCaptain", validateFormValue)
            .then(res => {
              //change state as responce from back
            })
            .catch(e => {
              //enternal server error
            })

        }
        )
        .catch((e) => {

          // if (e) {
          //   const handleError = (path, message) => {
          //     return { path: message }//how i can create variable key
          //   }
          //   const path = e.path;
          //   const message = e.message;
          //   const errors = handleError(path, message);
          //   this.setState({ Error: { ...errors } })
          // }
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
