import React, { Component } from "react";
import { Modal } from "antd";

class Popup extends Component {
  state = {
    visible: this.props.visible,
    name: {
      error: '',
      value: '' 
    },
    phone: {
      error: '',
      value: '',
    }
  };

  handleOk = e => {
    this.props.visibleFun("singleCustomer", "editVisibilty")(e);
  };

  handleCancel = e => {
    this.props.visibleFun("singleCustomer", "editVisibilty")(e);
  };
  componentWillReceiveProps(props) {
    this.setState({ visible: props.visible });
  }

  handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    if(name === 'name') {
      if(/^([a-z]|\s)+$/.test(value)) {
        this.setState({[name]: {error: '', value}})
      } else {
        this.setState({[name]: {value, error: 'الرجاء ملىء الحقل بحروف'}})
      }
    } else {
      if(/^\+[0-9]+$/.test(value)) {
        this.setState({[name]: {error: '', value}})
      } else {
        this.setState({[name]: {value, error: 'الرجاء ملىء الحقل بارقام'}})
      }
    }
  };

  render() {
    const { name, phone } = this.state;
    return (
      <Modal
        title="تعديل الطلب"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        closable={false}
        style={{ direction: "rtl" }}
      >
        <p>الاسم</p>
        <input onChange={this.handleChange} name='name' placeholder="الاسم" value={name.value}/>
        <p>{ name.error }</p>
        <p>الرقم</p>
        <input onChange={this.handleChange} name='phone' placeholder="الرقم" value={phone.value}/>
        <p>{ phone.error }</p>
      </Modal>
    );
  }
}

export default Popup;
