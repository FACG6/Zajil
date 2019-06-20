import React, { Component } from 'react';
import {withRouter}from 'react-router-dom'
import './style.css';
import Header from "../../CommonComponent/Header";
import Table from "../../CommonComponent/Table/Table";
import Popup from "./Popups/Popup";
import DeletePopup from "./Popups/deletePopup";
import WrappedComponent from '../../HOC/WithNavSide';
import {
  viewPopup,

} from "../../CommonComponent/Table/Popups";

import { notification, Icon } from 'antd';

 class Viewcaptain extends Component {
  state = {
    columns:
      [],
    name: '',
    email: '',
    id_number: '',
    phone_number: '',
    status: '',
    address: '',
    licience_number: '',
    avatar: ""

  }

  componentDidMount() {
    const { pk_i_id } = this.props.match.params;
    fetch(`/api/v1/getCaptainDetails/${pk_i_id}`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => {
        if (res.result) {
          const rows = res.result[0];
          fetch(`/api/v1/image/${rows.s_image}`)
            .then(res => res.arrayBuffer())
            .then(response => {
              const {
                s_name,
                s_email,
                s_id_number,
                s_mobile_number,
                status,
                s_address,
                s_driver_licence_number,
              } = rows;
              let typeArray = new Uint8Array(response);
              const stringChar = String.fromCharCode.apply(null, typeArray);
              this.setState({
                name: s_name,
                email: s_email,
                id_number: s_id_number,
                phone_number: s_mobile_number,
                status,
                address: s_address,
                licience_number: s_driver_licence_number,
                avatar: stringChar

              });
            })
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


    fetch(`/api/v1/getCaptainOrders/${pk_i_id}`, {
      method: 'GET'
    })

      .then(res => res.json())
      .then(res => {

        if (res.result) {
          const rows = res.result;
          this.convertToObjectForTable(rows);

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
        notification.open({
          message: 'يتعذر',
          description:
            err,
          icon: <Icon type="meh" style={{ color: '#108ee9' }} />,
        })
      });

  }

  convertToObjectForTable = (results) => {
    const table = results.map(result => {
      const obj = {};
      const key = Object.keys(result)[0];
      obj.key = key;
      obj.date = result[key][0].date.split('T')[0];
      obj.status = result[key][0].status;
      obj.customer = result[key][0].name;
      obj.price = result[key][0].total + '$';
      obj.place = result[key][0].place;
      obj.items = result[key][0].items_names;
      return obj;
    });
    this.setState({ columns: table });
  }
  render() {

    return (
      <div>
        <Header Icon={<img src={this.state.avatar} className="avatar" />} title={this.state.name} />

        <div className='view-captain'>
          <div className='view-captain-personal-information'>
            <h2 className='view-captain-personal-information-title'>المعلومات الشخصية</h2>
            <div className='view-captain-personal-information-box'>

              <p className='paragraph'><span>الاسم:</span>{this.state.name}</p>
              <p className='paragraph'>{this.state.email}<span>:البريد الالكتروني</span></p>
              <p className='paragraph'><span>رقم الهوية:</span> {this.state.id_number}</p>
              <p className='paragraph'><span>الهاتف المحمول:</span>{this.state.phone_number}</p>
              <p className='paragraph'><span>الحالة:</span>{this.state.status}</p>
              <p className='paragraph'><span>العنوان:</span>{this.state.address}</p>
              <p className='paragraph'><span>رقم الرخصة:</span>{this.state.licience_number}</p>
            </div>
          </div>
          <div className='view-captain-orders'>
            <h2 className='view-captain-orders-title'>الطلبات الخاصة بالمستخدم</h2>
            <div className="order-table">
              <Table pageName="singleCaptain"

                viewPopup={viewPopup}
                EditPopup={Popup}
                DeletePopup={DeletePopup}

                columns={this.state.columns}

              />
            </div>
          </div>
        </div>
      </div >
    );
  }

}

export default WrappedComponent(withRouter(Viewcaptain));

