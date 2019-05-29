import React, { Component } from "react";
import { Table, Divider, Tag, Icon } from "antd";
import DropdownMenu from "./dropdownMenu";
import "./App.css";

// the passed input to this component has to be in the following form:
// pageName,[{key: "id", customer:"", email:"", mobileNo:"", date:"", status:"", address:"", captain:"", price:""},{},{}], viewPopup, editPopup, deletePopup.

class App extends Component {
  state = {
    pageSize: "10"
  };

  paginationSize = pageSize => {
    this.setState({ pageSize });
  };

  render() {
    const { viewPopup, editPopup, deletePopup  } = this.props;
    const { Column } = Table;    
    const data = [
      {
        key: "1",
        customer: "John",
        mobileNo: "51325",
        email: "afsdsf",
        date: 32,
        address: "sdsdf",
        captain: "سمير",
        status: "تم",
        price: 30
      },
      {
        key: "2",
        customer: "Jim",
        date: 42,
        status: "قيد التنفيذ",
        captain: "أحمد",
        price: 50
      },
      {
        key: "3",
        customer: "Joe",
        date: 32,
        status: "تم إلغاؤه",
        captain: "محمود",
        price: 20
      },
      {
        key: "4",
        customer: "John",
        date: 32,
        captain: "سمير",
        status: "تم",
        price: 30
      },
      {
        key: "5",
        customer: "Jim",
        date: 42,
        status: "قيد التنفيذ",
        captain: "أحمد",
        price: 50
      },
      {
        key: "6",
        customer: "Joe",
        date: 32,
        status: "تم إلغاؤه",
        captain: "محمود",
        price: 20
      },
      {
        key: "7",
        customer: "John",
        date: 32,
        captain: "سمير",
        status: "تم",
        price: 30
      },
      {
        key: "8",
        customer: "Jim",
        date: 42,
        status: "قيد التنفيذ",
        captain: "أحمد",
        price: 50
      },
      {
        key: "9",
        customer: "Joe",
        date: 32,
        status: "تم إلغاؤه",
        captain: "محمود",
        price: 20
      },
      {
        key: "10",
        customer: "10",
        date: 32,
        captain: "سمير",
        status: "تم",
        price: 30
      },
      {
        key: "11",
        customer: "11",
        date: 42,
        status: "قيد التنفيذ",
        captain: "أحمد",
        price: 50
      },
      {
        key: "12",
        customer: "12",
        date: 32,
        status: "تم إلغاؤه",
        captain: "محمود",
        price: 20
      }
    ];

    if (this.props.pageName === "orders") {
      return (
        <div className="table-container">
          <DropdownMenu
            pageSize={this.state.pageSize}
            paginationSize={this.paginationSize}
          />
          <Table
            dataSource={data}
            pagination={{ pageSize: isNaN(this.state.pageSize) ? data.length : parseInt(this.state.pageSize) }}
          >
            <Column title="إسم الزبون" dataIndex="customer" key="customer" />
            <Column title="التاريخ" dataIndex="date" key="date" />
            <Column title="إسم الكابتن" dataIndex="captain" key="captain" />
            <Column
              title="الحالة"
              dataIndex="status"
              key="status"
              render={status => (
                <span>
                  <Tag
                    color={
                      status === "تم إلغاؤه"
                        ? "volcano"
                        : status === "تم"
                        ? "green"
                        : "blue"
                    }
                    key={status}
                  >
                    {status}
                  </Tag>
                </span>
              )}
            />
            <Column title="السعر" dataIndex="price" key="price" />
            <Column
              title="خيارات"
              key="options"
              render={(text, record) => (
                <span>
                  <a href="#">
                    <Icon
                      onClick={event => viewPopup(record.id)}
                      style={{
                        fontSize: "1.2rem",
                        color: "rgba(0, 0, 0, 0.65)"
                      }}
                      type="profile"
                    />
                  </a>
                  <Divider type="vertical" />
                  <a href="#">
                    <Icon onClick={event => editPopup(record.id)}
                      style={{
                        fontSize: "1.2rem",
                        color: "rgba(0, 0, 0, 0.65)"
                      }}
                      type="edit"
                    />
                  </a>
                  <Divider type="vertical" />
                  <a href="#">
                    <Icon onClick={event => deletePopup(record.id)}
                      style={{
                        fontSize: "1.2rem",
                        color: "rgba(0, 0, 0, 0.65)"
                      }}
                      type="delete"
                    />
                  </a>
                </span>
              )}
            />
          </Table>
        </div>
      );
    } else if (this.props.pageName === "customers") {
      return (
        <div className="table-container">
          <DropdownMenu
            pageSize={this.state.pageSize}
            paginationSize={this.paginationSize}
          />
          <Table
            dataSource={data}
            pagination={{ pageSize: isNaN(this.state.pageSize) ? data.length : parseInt(this.state.pageSize) }}
          >
            <Column title="إسم الزبوون" dataIndex="customer" key="customer" />
            <Column title="البريد الإلكتروني" dataIndex="email" key="email" />
            <Column title="رقم الجوال" dataIndex="mobileNo" key="mobileNo" />
            <Column
              title="الحالة"
              dataIndex="status"
              key="status"
              render={status => (
                <span>
                  <Tag
                    color={
                      status === "غير فعال"
                        ? "volcano"
                        : status === "فعال"
                        ? "green"
                        : "blue"
                    }
                    key={status}
                  >
                    {status}
                  </Tag>
                </span>
              )}
            />
            <Column
              title="خيارات"
              key="options"
              render={(text, record) => (
                <span>
                  <a href="#">
                    <Icon onClick={event => viewPopup(record.id)}
                      style={{
                        fontSize: "1.2rem",
                        color: "rgba(0, 0, 0, 0.65)"
                      }}
                      type="profile"
                    />
                  </a>
                  <Divider type="vertical" />
                  <a href="#">
                    <Icon onClick={event => editPopup(record.id)}
                      style={{
                        fontSize: "1.2rem",
                        color: "rgba(0, 0, 0, 0.65)"
                      }}
                      type="edit"
                    />
                  </a>
                  <Divider type="vertical" />
                  <a href="#">
                    <Icon onClick={event => deletePopup(record.id)}
                      style={{
                        fontSize: "1.2rem",
                        color: "rgba(0, 0, 0, 0.65)"
                      }}
                      type="delete"
                    />
                  </a>
                </span>
              )}
            />
          </Table>
        </div>
      );
    } else if (this.props.pageName === "singleCustomer") {
      return (
        <div className="table-container">
          <DropdownMenu
            pageSize={this.state.pageSize}
            paginationSize={this.paginationSize}
          />
          <Table
            dataSource={data}
            pagination={{ pageSize: isNaN(this.state.pageSize) ? data.length : parseInt(this.state.pageSize) }}
          >
            <Column title="إسم الكابتن" dataIndex="captain" key="captain" />
            <Column title="التاريخ" dataIndex="date" key="date" />
            <Column
              title="الحالة"
              dataIndex="status"
              key="status"
              render={status => (
                <span>
                  <Tag
                    color={
                      status === "جاري التنفيذ"
                        ? "#FFC700"
                        : status === "تم"
                        ? "green"
                        : "blue"
                    }
                    key={status}
                  >
                    {status}
                  </Tag>
                </span>
              )}
            />
            <Column title="السعر" dataIndex="price" key="price" />
            <Column
              title="خيارات"
              key="options"
              render={(text, record) => (
                <span>
                  <a href="#">
                    <Icon onClick={event => viewPopup(record.id)}
                      style={{
                        fontSize: "1.2rem",
                        color: "rgba(0, 0, 0, 0.65)"
                      }}
                      type="profile"
                    />
                  </a>
                  <Divider type="vertical" />
                  <a href="#">
                    <Icon onClick={event => editPopup(record.id)}
                      style={{
                        fontSize: "1.2rem",
                        color: "rgba(0, 0, 0, 0.65)"
                      }}
                      type="edit"
                    />
                  </a>
                  <Divider type="vertical" />
                  <a href="#">
                    <Icon onClick={event => deletePopup(record.id)}
                      style={{
                        fontSize: "1.2rem",
                        color: "rgba(0, 0, 0, 0.65)"
                      }}
                      type="delete"
                    />
                  </a>
                </span>
              )}
            />
          </Table>
        </div>
      );
    } else if (this.props.pageName === "captains") {
      return (
        <div className="table-container">
          <DropdownMenu
            pageSize={this.state.pageSize}
            paginationSize={this.paginationSize}
          />
          <Table
            dataSource={data}
            pagination={{ pageSize: isNaN(this.state.pageSize) ? data.length : parseInt(this.state.pageSize) }}
          >
            <Column title="إسم الكابتن" dataIndex="captain" key="captain" />
            <Column title="البريد الإلكتروني" dataIndex="email" key="email" />
            <Column title="رقم الجوال" dataIndex="mobileNo" key="mobileNo" />
            <Column title="العنوان" dataIndex="address" key="address" />
            <Column
              title="الحالة"
              dataIndex="status"
              key="status"
              render={status => (
                <span>
                  <Tag
                    color={
                      status === "غير فعال"
                        ? "volcano"
                        : status === "فعال"
                        ? "green"
                        : "blue"
                    }
                    key={status}
                  >
                    {status}
                  </Tag>
                </span>
              )}
            />
            <Column
              title="خيارات"
              key="options"
              render={(text, record) => (
                <span>
                  <a href="#">
                    <Icon onClick={event => viewPopup(record.id)}
                      style={{
                        fontSize: "1.2rem",
                        color: "rgba(0, 0, 0, 0.65)"
                      }}
                      type="profile"
                    />
                  </a>
                  <Divider type="vertical" />
                  <a href="#">
                    <Icon onClick={event => editPopup(record.id)}
                      style={{
                        fontSize: "1.2rem",
                        color: "rgba(0, 0, 0, 0.65)"
                      }}
                      type="edit"
                    />
                  </a>
                  <Divider type="vertical" />
                  <a href="#">
                    <Icon onClick={event => deletePopup(record.id)}
                      style={{
                        fontSize: "1.2rem",
                        color: "rgba(0, 0, 0, 0.65)"
                      }}
                      type="delete"
                    />
                  </a>
                </span>
              )}
            />
          </Table>
        </div>
      );
    } else if (this.props.pageName === "singleCaptain") {
      return (
        <div className="table-container">
          <DropdownMenu
            pageSize={this.state.pageSize}
            paginationSize={this.paginationSize}
          />
          <Table
            dataSource={data}
            pagination={{ pageSize: isNaN(this.state.pageSize) ? data.length : parseInt(this.state.pageSize) }}
          >
            <Column title="إسم الزبون" dataIndex="customer" key="customer" />
            <Column title="التاريخ" dataIndex="date" key="date" />
            <Column
              title="الحالة"
              dataIndex="status"
              key="status"
              render={status => (
                <span>
                  <Tag
                    color={
                      status === "جاري التنفيذ"
                        ? "#FFC700"
                        : status === "تم"
                        ? "green"
                        : "blue"
                    }
                    key={status}
                  >
                    {status}
                  </Tag>
                </span>
              )}
            />
            <Column title="السعر" dataIndex="price" key="price" />
            <Column
              title="خيارات"
              key="options"
              render={(text, record) => (
                <span>
                  <a href="#">
                    <Icon onClick={event => viewPopup(record.id)}
                      style={{
                        fontSize: "1.2rem",
                        color: "rgba(0, 0, 0, 0.65)"
                      }}
                      type="profile"
                    />
                  </a>
                  <Divider type="vertical" />
                  <a href="#">
                    <Icon onClick={event => editPopup(record.id)}
                      style={{
                        fontSize: "1.2rem",
                        color: "rgba(0, 0, 0, 0.65)"
                      }}
                      type="edit"
                    />
                  </a>
                  <Divider type="vertical" />
                  <a href="#">
                    <Icon onClick={event => deletePopup(record.id)}
                      style={{
                        fontSize: "1.2rem",
                        color: "rgba(0, 0, 0, 0.65)"
                      }}
                      type="delete"
                    />
                  </a>
                </span>
              )}
            />
          </Table>
        </div>
      );
    }
  }
}
export default App;
