import React,{Component} from 'react';
import axios from "axios";
import swal from 'sweetalert2';
import './style.css'
import { orderSchema } from '../../helper/validationSchemaOrder'
import { async } from 'q';
// const Swal = require('sweetalert2')

// CommonJS
class AddOrder extends Component{
  state = {
    data: {
      username: "",
      phone: "",
      captenName: "",
      market: "",
      addItem: "",
      address: "",
    }
  };

  handleChange = async() => {
    console.log('error')

  }
  popup = async () => {

    const { value: formValues } = await swal.fire({
      title: '',
      html:`
    <label class="title">اضافة طلب</label>
    <hr className="header__line" />
    
    <label  dir="ltr" id="market" class="market"><input class="input"/>:اختر متجر</label>
    <label  dir="ltr" id="username" class="username"><input class="input"/>:اسم الزبون</label>
    <br/>
    <br/>
    <label  dir="ltr" id="captenName" class="captenName"><input class="input"/>:اسم الكابتن </label>
    <br/>
    
    <br/>
    <label  dir="ltr" id="address" class="addres"><input class="inputt"/>:العنوان</label>
    
    <br/>
    <br/>
    
    <label  dir="ltr" id="addItem" class="addItem"><input class="input"/>:اضافة عنصر</label>
    
    <br/>
    <br/>
    
    <label  dir="ltr" id="phone" class="phone"><input  class="inputPhone"/>:رقم الهاتف</label>
      `,
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
          username: document.getElementById('username').value,
          phone: document.getElementById('phone').value,
          address: document.getElementById('address').value,
          market: document.getElementById('market').value,
          captenName: document.getElementById('captenName').value,
          addItem: document.getElementById('addItem').value,
        }

      }
    })
  
  if (formValues) {
    this.setState({ data: formValues });
    orderSchema
      .validate(formValues)
      .then((validateFormValue) => {
        // console.log(validateFormValue)
        axios.post("/api/v1/postCaptain", validateFormValue)
          .then(res => {
            //change state as responce from back
            console.log(res)
          })
          .catch(e => {
            //enternal server error
          })

        }
        )

    }
  }
    render() {
      return (
        <button onClick={this.popup} onChange={this.handleChange} >add Order</button>
      );
    };
  }

export default AddOrder;
