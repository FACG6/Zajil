import React, { Component } from 'react';
//import axios from "axios";
import swal from 'sweetalert2';
import './style.css';
import { stat } from 'fs';

export default class Addcaptain extends Component {
  state = {
    name: {
      error: '',
      value: ''
    },
    phone: {
      error: '',
      value: '',
    },
    IDNumber: {
      error: '',
      value: '',
    },
    status: {
      error: '',
      value: '',
    },
    email: {
      error: '',
      value: '',
    },
    address: {
      error: '',
      value: '',
    },
    licenceNumber: {
      error: '',
      value: '',
    },
    avatar: {
      error: '',
      value: '',
    },
    empty: {
      error: '',
      value: '',
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
      <span class='error-message'>${this.state.email.error}</span>
      </div>
      <div>
      <p>:العنوان</p> <input type="text" name="address" id="address"  class="add-captain__input" />
      <span class='error-message'>${this.state.address.error}</span>
      </div>  
      <div>
      <p>:رقم الرخصة</p><input type="text" name="licenceNumber" id="licenceNumber" class="add-captain__input" /> 
      <span class='error-message'>${this.state.licenceNumber.error}</span>
      </div>
      <div>
      <p>:صورة الهوية</p> 
      <div class="add-captain-container-left-avatar">
      <label for="avatar" class="add-captain-container-left-avatar-label">أرفق صورة</label>
      <input id="avatar" style="visibility:hidden;" type="file" accept=".jpg , .png">
      <span class='error-message'>${this.state.avatar.error}</span>
      </div>
      </div>
      </div>
      <div class="add-captain-container-center"></div>
      <div class="add-captain-container-right">
      <div>
      <p>:الاسم</p><input type="text" name="name" id="name" class="add-captain__input"/>
      <span class='error-message'>${this.state.name.error}</span>
      </div>
      <div>
      <p>:الهاتف</p><input type="text" name="phone" id="phone" class="add-captain__input" />
      <span class='error-message'>${this.state.phone.error}</span>
      </div>
      <div>
      <p>:رقم الهوية</p><input type="text" name="IDNumber" id="IDNumber" class="add-captain__input" />
      <span class='error-message'>${this.state.IDNumber.error}</span>
      </div>
      <div>
      <p>:الحالة</p><select name="status" id="status" class="add-captain__select"> <option value="0">فعال</option> <option value="1">غير فعال </option> </select>
      <span class='error-message'>${this.state.status.error}</span>
      </div>
      <div>
      ${this.state.empty.error}
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

    })

    let name = swal.getPopup().querySelector('#name').value;
    let phone = swal.getPopup().querySelector('#phone').value;
    let IDNumber = swal.getPopup().querySelector('#IDNumber').value;
    let status = swal.getPopup().querySelector('#status').value;
    let email = swal.getPopup().querySelector('#email').value;
    let address = swal.getPopup().querySelector('#address').value;
    let licenceNumber = swal.getPopup().querySelector('#licenceNumber').value;
    let avatar = swal.getPopup().querySelector('#avatar').value;



    // if (name === '' || phone === '' || IDNumber === '' || email === '' || address === '' || licenceNumber === '' || avatar === ''
    //   || status === '') {
    //   this.setState({ empty: { value: '', error: 'يرجى ملئ جميع الحقول ' } })
    // }
    if (name !== '') {
      if (/^([a-z]|\s)+$/.test(name)) {
        this.setState({ name: { error: '', value: name } })
        
      } else {
        this.setState({ name: { value: '', error: 'الرجاء ملىء الحقل بحروف' } })
      }
    }
    else if (phone !== '') {
      if (/^[0-9]+$/.test(phone)) {
        this.setState({ phone: { error: '', value: phone } })
      } else {
        this.setState({ phone: { value: '', error: 'الرجاء ملىء الحقل بارقام' } })
      }
    }
    else if (IDNumber !== '') {
      if (/^[0-9]+$/.test(IDNumber)) {
        this.setState({ IDNumber: { error: '', value: IDNumber } })
      } else {
        this.setState({ IDNumber: { value: '', error: 'الرجاء ملىء الحقل بارقام' } })
      }
    }
    else if (email !== '') {

      if (/.+\@.+\..+/.test(email)) {
        this.setState({ email: { error: '', value: email } })
      } else {
        this.setState({ email: { value: '', error: 'الرجاء ملئ الحقل ببريد الكتروني' } })
      }
    }
    else if (address !== '') {
      if (/^([a-z]|\s)+$/.test(address)) {
        this.setState({ address: { error: '', value: address } })
      } else {
        this.setState({ address: { value: '', error: 'الرجاء ملىء الحقل بحروف' } })
      }
    }
    else if (licenceNumber !== '') {
      if (/^[0-9]+$/.test(licenceNumber)) {
        this.setState({ licenceNumber: { error: '', value: licenceNumber } })
      } else {
        this.setState({ licenceNumber: { value: '', error: 'الرجاء ملىء الحقل بارقام' } })
      }
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
