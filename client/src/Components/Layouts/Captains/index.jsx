import React, { Component } from "react";
import { Icon, notification } from "antd";

import Button from "../../CommonComponent/Button";
import Header from "../../CommonComponent/Header/index";
import CollectionCreateForm from "./Popups/AddCaptain";
import WrappedComponent from '../../HOC/WithNavSide';

import "./style.css";

class Captains extends Component {
  state = {
    visible: false,
    tableData: []
  };
  handleVisible = () => {
    this.setState(prev => {
      return { visible: !prev.visible };
    });
  };

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        this.openNotificationWithIcon('error', 'هناك خطأ في البانات المدخلة')
      } else {
        const {IDNumber,  address, email, licenceNumber, name, password, phone, status, file} = values;
       const formData = new FormData();
       formData.append('file', file.fileList[0].originFileObj);
       formData.append('IDNumber', IDNumber);
       formData.append('address', address);
       formData.append('email', email);
       formData.append('licenceNumber', licenceNumber);
       formData.append('name', name);
       formData.append('password', password);
       formData.append('phone', phone);
       formData.append('status', status);
      fetch("/api/v1/addCaptain", {
        method: "POST",
        body: formData,
      })
        .then(res => res.json())
        .then(res => {
          const { error } = res;
          if (error) {
            this.openNotificationWithIcon('error', error);
          } else {
            this.openNotificationWithIcon('success', 'تمت الاضافة بنجاح');
            console.log(res.result);
            //the result will be store in state in next pull request
          }
          
        })
        .catch(() => {
          this.openNotificationWithIcon('warning', 'هناك خطأ ما الرجاء اعادة ارسال البيانات')
        });
        this.handleVisible();
      }
    });
  };

  openNotificationWithIcon = (type, message) => {
    notification[type]({
      message: message,
      duration: 1.5
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };
  render() {
    return (
      <div className="containercustomers">
        <div className="conatinercustomers__customer">
          <Header title="إدارة الكابتن" Icon={<Icon type="team" />} />
          <div className="addcustomer">
            <Button
              name="إضافة كابتن"
              icon={<Icon type="user" />}
              onClick={this.handleVisible}
            />
            <CollectionCreateForm
              wrappedComponentRef={this.saveFormRef}
              visible={this.state.visible}
              onCancel={this.handleVisible}
              onCreate={this.handleCreate}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default WrappedComponent(Captains);
