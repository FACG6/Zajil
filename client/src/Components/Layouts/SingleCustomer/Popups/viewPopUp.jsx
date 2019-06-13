import React, { Component } from "react";
import { Modal, notification } from "antd";

class View extends Component {
  state = {
    visible: this.props.visible,
    id: this.props.id,
    information: null
  };

//   handleOk = e => {
//     fetch(`/api/v1/deleteOrder/${this.props.id}`, { method: "DELETE" })
//       .then(res => res.json())
//       .then(res => {
//         const { error } = res;
//         if (error) {
//           this.openNotificationWithIcon("error", error);
//         } else {
//           this.props.updateState(this.state.id);
//           this.openNotificationWithIcon("success", "Delete Done");
//         }
//         this.props.visibleFun("singleCustomer", "deleteVisibility")(e);
//       })
//       .catch(() => {
//         this.openNotificationWithIcon('warning', 'Something error please try again');
//         this.props.visibleFun("singleCustomer", "deleteVisibility")(e);
//       });
//   };

  handleCancel = e => {
    this.props.visibleFun("singleCustomer", "deleteVisibility")(e);
  };
  componentWillReceiveProps(props) {
    const { visible, id, information } = props;
    console.log(props);
    this.setState({ visible, id, information });
  }

  render() {
    return (
      <Modal
        title="عرض الطلب"
        visible={this.state.visible}
        onOk={this.handleOk}
        cancelText="اغلاق"
        onCancel={this.handleCancel}
        closable={false}
        style={{ direction: "rtl" }}
        className="viewModal"
      >
        <p>view</p>
      </Modal>
    );
  }
}

export default View;
