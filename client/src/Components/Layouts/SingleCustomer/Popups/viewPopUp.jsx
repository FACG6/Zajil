import React, { Component } from "react";
import { Modal, Table} from "antd";

class View extends Component {
  state = {
    visible: this.props.visible,
    id: this.props.id,
    information: null
  };

  handleCancel = e => {
    this.props.visibleFun("singleCustomer", "viewVisibility")(e);
  };
  componentWillReceiveProps(props) {
    const { visible, id, information } = props;
    console.log(props);
    this.setState({ visible, id, information });
  }

  render() {
      const columns = [{title: 'اسم الطلبية', dataIndex: 'f1'},
      {title: 'السعر', dataIndex: 'f2'}]
    if (this.state.information) {
      const { information } = this.state;
      return (
        <Modal
          title="عرض الطلب"
          visible={this.state.visible}
          cancelText="اغلاق"
          onCancel={this.handleCancel}
          closable={false}
          style={{ direction: "rtl", width: '575' }}
          className="viewModal"
        >
          <div className="view__captain">
            <div className="view__captain-box">
              <p>اسم الكابتن : </p>
              <p className="view__captain-value">{information.captain}</p>
            </div>
            <div className="view__captain-box">
              <p>تاريخ الطلبية : </p>
              <p className="view__captain-value">{information.date}</p>
            </div>
            <div className="view__captain-box">
              <p>اسم المكان : </p>
              <p className="view__captain-value">{information.place}</p>
            </div>
            <div className="view__captain-box">
              <p>حالة الطلب : </p>
              <p className="view__captain-value">{information.status}</p>
            </div>
            <Table dataSource={information.items} columns={columns} className="view__captain-table"/>
            <div className="view__captain-box">
              <p>السعر الكلي : </p>
              <p className="view__captain-value">{information.price}</p>
            </div>
          </div>
        </Modal>
      );
    }
    return "";
  }
}

// captain: "احمد محمد محمود"
// date: "2019-06-11"
// items: ["بندورة"]
// key: "3"
// place: undefined
// price: "20$"
// status: "تم"

export default View;
