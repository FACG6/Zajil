import React, { Component } from "react";
import axios from "axios";
import { DatePicker, Input, Button, Icon } from "antd";
import moment, { isValid } from "moment";
import Sidebar from "../../CommonComponent/Sidebar/index";
import Header from "../../CommonComponent/Header/index";
import Navbar from "../../CommonComponent/Navbar/index";
import TableComponent from "../../CommonComponent/Table/Table";
import {
//   viewPopup,
//   editPopup,
  deletePopup
} from "../../CommonComponent/Table/Popups";
import "./style.css";

class OrdersManagement extends Component {
  state = {
    orders: [],
    filteredOrders: [],
    date: "",
    status: "",
    name: "",
    error: "",
    filter: false
  };

  componentDidMount() {
    axios
      .get("/api/v1//viewOrders")
      .then(res => {
        if (res.status === 204) {
          let error = [...this.state.error];
          error.response = res;
          error.response.data = "No orders yet.";
          this.setState({ error });
        } else {
          this.setState({ orders: res.data });
        }
      })
      .catch(error => {
        this.setState({
          error
        });
      });
  }



  clearFields = async () => {
    await this.setState({
      date:"", status:"", name:"", filter:false
    })
  }

  render() {
    const { RangePicker } = DatePicker;
    const dateFormat = "DD-MM-YYYY";

      return (
        <div className="ordersManagement-bars-container">
          <Sidebar />
          <div className="ordersManagement-main-container">
            <Navbar />
            <Header title={"إدارة الطلبات"} Icon={<Icon type="carry-out" />} />
            <div className="ordersManagement_sub-container">
              <div>
                <Button
                  className="ordersManagement_addOrder-button"
                  type="primary"
                >
                  إضافة طلب
                </Button>
                <div className="ordersManagement_filters-container">
                  <div className="ordersManagement_filters-container-timeFilter">
                    <p
                      style={{ textAlign: "right" }}
                      className="ordersManagemet_timePicker-lable"
                    >
                      إختر الفترة
                    </p>
                    <RangePicker
                      placeholder={["من", "إلى"]}
                      format={dateFormat}
                      onChange={e => this.filter("date", e)}
                      value={this.state.date}
                    />
                  </div>
                  <Input
                    id="statusInput"
                    onChange={e => this.filter("status", e.target.value)}
                    className="ordersManagement_status-filter-input"
                    placeholder="الفلترة حسب الحالة :"
                    value={this.state.status}
                  />
                  <Input
                    value={this.state.name}
                    onChange={e => this.filter("name", e.target.value)}
                    className="ordersManagement_status-filter-input"
                    placeholder="الفلترة حسب اسم الكابتن :"
                  />
                  <Button
                    className="ordersManagement_filter-button"
                    type="primary"
                    onClick={this.clearFields}
                  >
                    إفراغ الحقول
                  </Button>
                </div>
                <TableComponent
                  pageName="orders"
                //   viewPopup={viewPopup}
                //   editPopup={editPopup}
                  deletePopup={deletePopup}
                  editHtml="<input type='text' placeholder='name' id='name'>"
                  columns={
                    this.state.filter === true
                      ? this.state.filteredOrders
                      : this.state.orders
                  }
                />
              </div>
            </div>
          </div>
        </div>
      );
    } 
}

export default OrdersManagement;
