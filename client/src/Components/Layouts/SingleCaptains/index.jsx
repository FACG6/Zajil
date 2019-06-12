import React, { Component } from 'react';
import './style.css';

import Table from '../../CommonComponent/Table/Table';
import { viewPopup, editPopup, deletePopup } from "../../CommonComponent/Table/Popups";
import { notification, Icon } from 'antd';

export default class Viewcaptain extends Component {
  state = {
    columns:
      [
        //   { key: 35, customer: "أحمد", date: "4/7/1995", status: "تم", price: "600$" },
        //   { key: 50, customer: "كنعان", date: "4/3/1995", status: "تم", price: "800$" },
        //   { key: 30, customer: "أمين", date: "8/9/1995", status: "جاري التنفيذ", price: "700$" },
        //   { key: 15, customer: "عبدالله", date: "1/4/1995", status: "تم", price: "500$" },
        //   { key: 89, customer: "اسراء", date: "1/9/1995", status: "تم", price: "300$" },
      ],
    name: '',
    email: '',
    id_number: '',
    phone_number: '',
    status: '',
    address: '',
    licience_number: '',
  }

  componentDidMount() {
    const id = 6;
    // const { id } = this.props.id;

    // fetch(`/api/v1/getCaptainDetails/${id}`, {
    //   method: 'GET'
    // })
    //   .then(res => res.json())
    //   .then(res => {
    //     if (res.result) {

    //       const rows = res.result[0];
    //       this.setState({
    //         name: rows.s_name, email: rows.s_email, id_number: rows.s_id_number, phone_number: rows.s_mobile_number,
    //         status: rows.b_status, address: rows.s_address, licience_number: rows.s_driver_licence_number
    //       })

    //     }
    //     else {
    //       notification.open({
    //         message: 'يتعذر',
    //         description:
    //           res.error,
    //         icon: <Icon type="meh" style={{ color: '#108ee9' }} />,
    //       });
    //     }
    //   })
    //   .catch(err => {
    //     notification.open({
    //       message: 'يتعذر',
    //       description:
    //         err,
    //       icon: <Icon type="meh" style={{ color: '#108ee9' }} />,

    //     })
    //   }
    //   );
    ///one
    fetch(`/api/v1/getCaptainOrders/${id}`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => {

        if (res.result) {
          console.log(res);
          const rows = res.result[0];
          console.log('hhhhhhhhhh', rows)

          // this.setState({
          //   columns: [
          //     //set state coulm
          //   ]
          // });

        }
        else {
          notification.open({
            message: 'يتعذر',
            description:
              res.error,
            icon: <Icon type="meh" style={{ color: '#108ee9' }} />,
          });
        }

      })

      .catch(err => {
        console.log(789, err)
        notification.open({
          message: 'يتعذر',
          description:
            err,
          icon: <Icon type="meh" style={{ color: '#108ee9' }} />,
        })
      });
  }
  render() {
    return (
      <div>

        <div className='view-captain'>
          <div className='view-captain-personal-information'>
            <h2 className='view-captain-personal-information-title'>المعلومات الشخصية</h2>
            <div className='view-captain-personal-information-box'>
              <p>الاسم:{this.state.name}</p>
              <p>{this.state.email}:البريد الالكتروني</p>
              <p>رقم الهوية:{this.state.id_number}</p>
              <p>الهاتف المحمول:{this.state.phone_number}</p>
              <p>الحالة:{this.state.status}</p>
              <p>العنوان:{this.state.address}</p>
              <p>رقم الرخصة:{this.state.licience_number}</p>
            </div>
          </div>
          <div className='view-captain-orders'>
            <h2 className='view-captain-orders-title'>الطلبات الخاصة بالمستخدم</h2>
            <div className="order-table">
              <Table pageName="singleCaptain" columns={this.state.columns} viewPopup={viewPopup} editPopup={editPopup} deletePopup={deletePopup} />
            </div>
          </div>
        </div>
      </div >
    );
  }

}