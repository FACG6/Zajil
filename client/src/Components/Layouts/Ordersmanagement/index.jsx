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
  dateFilter = object => {
    const { date } = this.state;
    if (date[0] && date[1]) {
      if (date[0].isValid() && date[1].isValid()) {
        const fromDate = date[0].toDate().setHours(0, 0, 0, 0);
        const toDate = date[1].toDate().setHours(0, 0, 0, 0);
        let filtered = object.filter(order => {
          if (
            moment(order.date)
              .toDate()
              .setHours(0, 0, 0, 0) >= fromDate &&
            moment(order.date)
              .toDate()
              .setHours(0, 0, 0, 0) <= toDate
          ) {
            return true;
          }
        });
        return filtered;
      }
    }
  };
  statusFilter = object => {
    const { status } = this.state;
    let filtered = [];
    const regex1 = new RegExp(/^[(ت)]+/);
    const regex2 = new RegExp(/^[(ل)]/);
    filtered = object.filter(order => {
      if (
        (order.b_status === true &&
          regex1.test(status) &&
          "تم".indexOf(status) != -1) ||
        (order.b_status === false &&
          regex2.test(status) &&
          "لم يتم".indexOf(status) != -1)
      ) {
        return true;
      } else if (order.b_status == status) {
        return true;
      }
    });
    return filtered;
  };
  nameFilter = object => {
    const { name } = this.state;
    let filtered = [];
    filtered = object.filter(order => {
      if (order.captain.indexOf(name) != -1) {
        return true;
      }
    });
    return filtered;
  };

  filter = async (type, value) => {
    const { date, status, name, orders } = this.state;
    let filtered = [];
    if (type === "date") {
      await this.setState({ date: value });
      if (status) {
        filtered = this.statusFilter(orders);
        if (name) {
          filtered = this.nameFilter(filtered);
        }
        filtered = this.dateFilter(filtered);
        this.setState({ filteredOrders: filtered, filter: true });
      } else if (name) {
        filtered = this.nameFilter(orders);
        filtered = this.dateFilter(filtered);
        this.setState({ filteredOrders: filtered, filter: true });
      } else if (value.length > 0) {
        filtered = this.dateFilter(orders);
        this.setState({ filteredOrders: filtered, filter: true });
      } else {
        this.setState({ filteredOrders: [], filter: false });
      }
    }else if (type === "status") {
      await this.setState({ status: value });
      if (date) {
        filtered = this.dateFilter(orders);
        if (name) {
          filtered = this.nameFilter(filtered);
        }
        filtered = this.statusFilter(filtered);
        this.setState({ filteredOrders: filtered, filter: true });
      } else if (name) {
        filtered = this.nameFilter(orders);
        filtered = this.statusFilter(filtered);
        this.setState({ filteredOrders: filtered, filter: true });
      } else if (value.length > 0) {
        filtered = this.statusFilter(orders);
        this.setState({ filteredOrders: filtered, filter: true });
      } else {
        this.setState({ filteredOrders: [], filter: false });
      }
    }
  };

  clearFields = async () => {
    await this.setState({
      date:"", status:"", name:"", filter:false
    })
  }

  render() {
    const { RangePicker } = DatePicker;
    const dateFormat = "DD-MM-YYYY";
    if (!this.state.error) {
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
    } else if (this.state.error.response.status === 204) {
      return (
        <div>
          <div className="ordersManagement-bars-container">
            <Sidebar />
            <div className="ordersManagement-main-container">
              <Navbar />
              <Header
                title={"إدارة الطلبات"}
                Icon={<Icon type="carry-out" />}
              />
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
                        onChange={this.ordersDateFilter}
                      />
                    </div>
                    <Input
                      className="ordersManagement_status-filter-input"
                      placeholder="الفلترة حسب الحالة :"
                    />
                    <Input
                      className="ordersManagement_status-filter-input"
                      placeholder="الفلترة حسب اسم الكابتن :"
                    />
                    <Button
                      className="ordersManagement_filter-button"
                      type="primary"
                    >
                      إفراغ الحقول
                    </Button>
                  </div>
                  <div className="ordersManagement_error-class">
                    <h4>لا توجد طلبات للعرض بعد</h4>
                  </div>
                  <TableComponent
                    // viewPopup={viewPopup}
                    // editPopup={editPopup}
                    deletePopup={deletePopup}
                    columns={this.state.orders}
                    pageName="customers"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="ordersManagement_error-class">
          <h1>
            {" "}
            Error {this.state.error.response.status} ,{" "}
            {this.state.error.response.data}{" "}
          </h1>
        </div>
      );
    }
  }
}
export default OrdersManagement;
