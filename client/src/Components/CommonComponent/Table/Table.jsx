import React, { Component } from "react";
import { withRouter } from "react-router";
import { Table, Divider, Tag, Icon } from "antd";
import PropTypes from "prop-types";
import DropdownMenu from "./dropdownMenu";
import "./style.css";

// the passed input to this component has to be in the following form:
// (pageName (orders or customers or captains or singleCaptain or singleCustomer) ,[{key: "id", customer:"", email:"", mobileNo:"", date:"", b_status:"", address:"", captain:"", price:""},{},{}], viewPopup, editPopup, deletePopup).

class TableCmponent extends Component {
  state = {
    pageSize: "10",
    stores: []
  };

  componentWillReceiveProps(props) {
    this.setState({ tableData: props.columns });
  }

  paginationSize = pageSize => {
    this.setState({ pageSize });
  };

  render() {
    const {
      viewPopup,
      EditPopup,
      deletePopup,
      columns,
    } = this.props;
    const { Column } = Table;
    const { tableData: columns} = this.state;
    if (this.props.pageName === "orders") {
      return (
        <div className="table-container">
          <DropdownMenu
            pageSize={this.state.pageSize}
            paginationSize={this.paginationSize}
          />
          <Table
            dataSource={columns}
            pagination={{
              pageSize: isNaN(this.state.pageSize)
                ? columns
                  ? columns.length
                  : parseInt(this.state.pageSize)
                : parseInt(this.state.pageSize)
            }}
          >
            <Column title="إسم الزبون" dataIndex="customer" key="customer" />
            <Column title="التاريخ" dataIndex="date" key="date" />
            <Column title="إسم الكابتن" dataIndex="captain" key="captain" />
            <Column
              title="الحالة"
              dataIndex="b_status"
              key="b_status"
              render={b_status => (
                <span>
                  <Tag
                    color={
                      b_status === false
                        ? "volcano"
                        : b_status === true
                        ? "green"
                        : "blue"
                    }
                    key={b_status}
                  >
                    {b_status === true
                      ? "تم"
                      : b_status === false
                      ? "لم يتم"
                      : b_status}
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
                  <Icon
                    onClick={event => viewPopup(record.key, record)}
                    style={{
                      fontSize: "1.2rem",
                      color: "rgba(0, 0, 0, 0.65)"
                    }}
                    type="profile"
                  />

                  <Divider type="vertical" />

                  <EditPopup
                    customerName={record.customer}
                    phoneNumber={record.phone ? record.phone : ""}
                    customerAddress={record.address}
                    itemsArray={record.items}
                    storeId={record.storeId}
                    stores={this.props.stores}
                    orderId={record.key}
                  />

                  <Divider type="vertical" />

                  <Icon
                    onClick={event =>
                      deletePopup(record.key, record)
                    }
                    style={{
                      fontSize: "1.2rem",
                      color: "rgba(0, 0, 0, 0.65)"
                    }}
                    type="delete"
                  />
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
            dataSource={columns}
            pagination={{
              pageSize: isNaN(this.state.pageSize)
                ? columns.length
                : parseInt(this.state.pageSize)
            }}
          >
            <Column title="إسم الزبوون" dataIndex="customer" key="customer" />
            <Column title="البريد الإلكتروني" dataIndex="email" key="email" />
            <Column title="رقم الجوال" dataIndex="mobileNo" key="mobileNo" />
            <Column
              title="الحالة"
              dataIndex="b_status"
              key="b_status"
              render={b_status => (
                <span>
                  <Tag
                    color={
                      b_status === "غير فعال"
                        ? "volcano"
                        : b_status === "فعال"
                        ? "green"
                        : "blue"
                    }
                    key={b_status}
                  >
                    {b_status}
                  </Tag>
                </span>
              )}
            />
            <Column
              title="خيارات"
              key="options"
              render={(text, record) => (
                <span>
                  <Icon
                    onClick={() => {
                      this.props.history.push(
                        `/getCustomerDetails/${record.key}`
                      );
                    }}
                    style={{
                      fontSize: "1.2rem",
                      color: "rgba(0, 0, 0, 0.65)"
                    }}
                    type="profile"
                  />
                  <Divider type="vertical" />
                  <EditPopup />
                  <Divider type="vertical" />
                  <Icon
                    onClick={event =>
                      deletePopup(record.key, record)
                    }
                    style={{
                      fontSize: "1.2rem",
                      color: "rgba(0, 0, 0, 0.65)"
                    }}
                    type="delete"
                  />
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
            dataSource={columns}
            pagination={{
              pageSize: isNaN(this.state.pageSize)
                ? columns.length
                : parseInt(this.state.pageSize)
            }}
          >
            <Column title="إسم الكابتن" dataIndex="captain" key="captain" />
            <Column title="التاريخ" dataIndex="date" key="date" />
            <Column
              title="الحالة"
              dataIndex="b_status"
              key="b_status"
              render={b_status => (
                <span>
                  <Tag
                    color={
                      b_status === "جاري التنفيذ"
                        ? "#FFC700"
                        : b_status === "تم"
                        ? "green"
                        : "blue"
                    }
                    key={b_status}
                  >
                    {b_status}
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
                    <Icon onClick = {this.props.viewValues("singleCustomer", "viewVisibility", record.key, record)}
                      style={{
                        fontSize: "1.2rem",
                        color: "rgba(0, 0, 0, 0.65)"
                      }}
                      type="profile"
                    />
                  <Divider type="vertical" />
                    <Icon onClick = {this.props.viewValues("singleCustomer",
                      "editVisibilty",
                      record.key,
                      record)}
                    style={{
                      fontSize: "1.2rem",
                      color: "rgba(0, 0, 0, 0.65)"
                    }}
                    type="edit"
                  />
                  <Divider type="vertical" />
                    <Icon onClick = {this.props.viewValues("singleCustomer", "deleteVisibility", record.key, record)}
                      style={{
                        fontSize: "1.2rem",
                        color: "rgba(0, 0, 0, 0.65)"
                      }}
                      type="delete"
                    />
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
            dataSource={columns}
            pagination={{
              pageSize: isNaN(this.state.pageSize)
                ? columns.length
                : parseInt(this.state.pageSize)
            }}
          >
            <Column title="إسم الكابتن" dataIndex="captain" key="captain" />
            <Column title="البريد الإلكتروني" dataIndex="email" key="email" />
            <Column title="رقم الجوال" dataIndex="mobileNo" key="mobileNo" />
            <Column title="العنوان" dataIndex="address" key="address" />
            <Column
              title="الحالة"
              dataIndex="b_status"
              key="b_status"
              render={b_status => (
                <span>
                  <Tag
                    color={
                      b_status === "غير فعال"
                        ? "volcano"
                        : b_status === "فعال"
                        ? "green"
                        : "blue"
                    }
                    key={b_status}
                  >
                    {b_status}
                  </Tag>
                </span>
              )}
            />
            <Column
              title="خيارات"
              key="options"
              render={(text, record) => (
                <span>
                  <Icon
                    onClick={() => {
                      this.props.history.push(
                        `/getCaptainDetails/${record.key}`
                      );
                    }}
                    style={{
                      fontSize: "1.2rem",
                      color: "rgba(0, 0, 0, 0.65)"
                    }}
                    type="profile"
                  />
                  <Divider type="vertical" />
                  <EditPopup />
                  <Divider type="vertical" />
                  <Icon
                    onClick={event =>
                      deletePopup(record.key, record)
                    }
                    style={{
                      fontSize: "1.2rem",
                      color: "rgba(0, 0, 0, 0.65)"
                    }}
                    type="delete"
                  />
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
            dataSource={columns}
            pagination={{
              pageSize: isNaN(this.state.pageSize)
                ? columns.length
                : parseInt(this.state.pageSize)
            }}
          >
            <Column title="إسم الزبون" dataIndex="customer" key="customer" />
            <Column title="التاريخ" dataIndex="date" key="date" />
            <Column
              title="الحالة"
              dataIndex="b_status"
              key="b_status"
              render={b_status => (
                <span>
                  <Tag
                    color={
                      b_status === "جاري التنفيذ"
                        ? "#FFC700"
                        : b_status === "تم"
                        ? "green"
                        : "blue"
                    }
                    key={b_status}
                  >
                    {b_status}
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
                  <Icon
                    onClick={event => viewPopup(record.key, record)}
                    style={{
                      fontSize: "1.2rem",
                      color: "rgba(0, 0, 0, 0.65)"
                    }}
                    type="profile"
                  />
                  <Divider type="vertical" />
                  <EditPopup />
                  <Divider type="vertical" />
                  <Icon
                    onClick={event =>
                      deletePopup(record.key, record)
                    }
                    style={{
                      fontSize: "1.2rem",
                      color: "rgba(0, 0, 0, 0.65)"
                    }}
                    type="delete"
                  />
                </span>
              )}
            />
          </Table>
        </div>
      );
    }
  }
}

TableCmponent.propTypes = {
  columns: PropTypes.array.isRequired,
  viewPopup: PropTypes.func.isRequired,
  deletePopup: PropTypes.func.isRequired,
};

const TableComponent = withRouter(TableCmponent);

export default TableComponent;
