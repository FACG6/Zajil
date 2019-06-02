import React, { Component } from "react";
import { Modal } from "antd";

class Popup extends Component {
  state = { visible: this.props.visible};

  handleOk = e => {
      this.props.visibleFun("singleCustomer",
      "editVisibilty")(e);
  };

  handleCancel = e => {
    this.props.visibleFun("singleCustomer",
    "editVisibilty")(e);
  };
  componentWillReceiveProps(props) {
      this.setState({visible: props.visible})
  }

  handleChange = (e) => {
    console.log(e.target.value);
  }

  render() {
    return (
      <Modal
        title="تعديل الطلب"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        closable={false}
        style={{direction: "rtl"}}
      >
        <input onBlur={this.handleChange} placeholder="test"/>
      </Modal>
    );
  }
}

export default Popup;
