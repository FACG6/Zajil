import React from "react";
import swal from "sweetalert2";
import axios from "axios";
import "./style.css";
import { Button, Select, Modal } from "antd";

import { Form, Input, Cascader, Icon } from "antd";
const { Option } = Select;

class EditForm extends React.Component {
  state = {
    visible: false,
    storeNameManual: "",
    storeNameArray: [],
    error: "",
    originalItems: [],
    itemsInputs: [],
    key: 0
  };

  componentDidMount() {
    this.setState({
      itemsInputs: this.props.itemsArray ?  JSON.parse(JSON.stringify(this.props.itemsArray)) : [],
      originalItems: this.props.itemsArray ? JSON.parse(JSON.stringify(this.props.itemsArray)) : []
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (error, values) => {
      await this.setState({ storeNameArray: values.storeName });
      let storeId = "";
      for (let i = 0; i < this.props.stores.length; i++) {
        if (this.props.stores[i].value == values.storeName) {
          storeId = this.props.stores[i].id;
          for (let i = 0; i < this.props.stores.length; i++) {
            if (this.props.stores[i].value == values.storeName) {
              storeId = this.props.stores[i].id;
            }
          }
          let deletedItems = [],
          newItems = [];
        for (let i =0; i < this.state.originalItems.length; i++) {
          let exist = false;
          for (let j = 0; j < this.state.itemsInputs.length; j++) {
            if (JSON.stringify(this.state.originalItems[i]) === JSON.stringify(this.state.itemsInputs[j])) {
              exist = true;
            }
          }
          if (!exist) {
            deletedItems.push(this.state.originalItems[i]);
          }
        }
        for (let j in this.state.itemsInputs) {
          let edited = true;
          for (let i in this.state.originalItems) {
            if (JSON.stringify(this.state.originalItems[i]) === JSON.stringify(this.state.itemsInputs[j])) {
              edited = false;
            }
          }
          if (edited) {
            newItems.push(this.state.itemsInputs[j]);
          }
        }
      }
  render() {
    const { customerName, phoneNumber, customerAddress, storeId } = this.props;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "970"
    })(
      <Select style={{ width: 70 }}>
        <Option value="970">+970</Option>
        <Option value="972">+972</Option>
      </Select>
    );
    if (!this.state.error) {
      return (
        <React.Fragment>
          <Icon
            type="edit"
            style={{
              fontSize: "1.2rem",
              color: "rgba(0, 0, 0, 0.65)"
            }}
            onClick={this.showModal}
          />
          <Modal
            className="popupModal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            destroyOnClose={true}
          >
            <div className="modalHeader">
              <Icon type="down-square" />
              <h2>تعديل الطلب</h2>
            </div>
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
              <div style={{ display: "block" }}>
                <div className="popupModal_form-items-container">
                  <Form.Item
                    label={
                      <span>
                        <span className="popupModal_storeName-label">*</span>إسم
                        الزبون
                      </span>
                    }
                  >
                    <Input readOnly defaultValue={customerName} />
                  </Form.Item>
                </div>
                <div className="popupModal_form-items-container">
                  <Form.Item label="رقم الهاتف">
                    {getFieldDecorator("phone", {
                      initialValue: phoneNumber,
                      rules: [
                        { required: true, message: "يرجى إدخال رقم الهاتف !" }
                      ]
                    })(
                      <Input
                        addonBefore={prefixSelector}
                        style={{ width: "100%" }}
                      />
                    )}
                  </Form.Item>
                </div>
                <div className="popupModal_form-items-container">
                  <Form.Item label="العنوان">
                    {getFieldDecorator("address", {
                      initialValue: customerAddress,
                      rules: [
                        {
                          required: true,
                          message: "يرجى إدخال العنوان !"
                        }
                      ]
                    })(<Input />)}
                  </Form.Item>
                </div>
                <Form.Item {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">
                    حفظ
                  </Button>
                  <Button
                    className="cancelButton"
                    type="default"
                    onClick={this.handleCancel}
                  >
                    إلغاء
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </Modal>
        </React.Fragment>
      );
    }
  }
const EditPopup = Form.create()(EditForm);























const deletePopup = (id, DataToBeDisplayedObject, deletePopupHtmlString) => {
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

export { EditPopup, deletePopup };
