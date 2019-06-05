import React, { Component } from "react";
import { withRouter } from "react-router";
import { Table, Divider, Tag, Icon } from "antd";
import PropTypes from "prop-types";
import DropdownMenu from "./dropdownMenu";
import "./style.css";

// the passed input to this component has to be in the following form:
// (pageName (orders or customers or captains or singleCaptain or singleCustomer) ,[{key: "id", customer:"", email:"", mobileNo:"", date:"", status:"", address:"", captain:"", price:""},{},{}], viewPopup, editPopup, deletePopup, viewHtml, editHtml, deleteHtml).

class TableCmponent extends Component {
  state = {
    pageSize: "10",
    singleCustomer: {
      editVisibilty: false
    }
  };

  handleClick = (value1, value2) => (e) => {
    this.setState(
      prev => {
        return {
          [value1]: {
            [value2]: !prev[value1][value2]
          }
        };
      });
  };

  paginationSize = pageSize => {
    this.setState({ pageSize });
  };

  render() {
    
    const { viewPopup, editPopup, EditPopup, deletePopup, columns, viewHtml, editHtml, deleteHtml } = this.props;
    const { Column } = Table;
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
                ? columns.length
                : parseInt(this.state.pageSize)
            }}
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
                  
                    <Icon
                      onClick={event => viewPopup(record.key,record, viewHtml)}
                      style={{
                        fontSize: "1.2rem",
                        color: "rgba(0, 0, 0, 0.65)"
                      }}
                      type="profile"
                    />
                  
                  <Divider type="vertical" />
                  
                    <Icon onClick={event => editPopup(record.key,record, editHtml)}
                      style={{
                        fontSize: "1.2rem",
                        color: "rgba(0, 0, 0, 0.65)"
                      }}
                      type="edit"
                    />
                  
                  <Divider type="vertical" />
                  
                    <Icon onClick={event => deletePopup(record.key,record, deleteHtml)}
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
                  <Icon
                    onClick={() => {
                      this.props.history.push(
                        `/customers/profile/${record.key}`
                      );
                    }}
                    style={{
                      fontSize: "1.2rem",
                      color: "rgba(0, 0, 0, 0.65)"
                    }}
                    type="profile"
                  />
                  <Divider type="vertical" />
                    <Icon onClick={event => editPopup(record.key,record, editHtml)}
                      style={{
                        fontSize: "1.2rem",
                        color: "rgba(0, 0, 0, 0.65)"
                      }}
                      type="edit"
                    />
                  <Divider type="vertical" />
                    <Icon onClick={event => deletePopup(record.key,record, deleteHtml)}
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
                    <Icon onClick={event => viewPopup(record.key,record, viewHtml)}
                      style={{
                        fontSize: "1.2rem",
                        color: "rgba(0, 0, 0, 0.65)"
                      }}
                      type="profile"
                    />
                  <Divider type="vertical" />
                    <Icon
                    onClick={this.handleClick(
                      "singleCustomer",
                      "editVisibilty"
                    )}
                    style={{
                      fontSize: "1.2rem",
                      color: "rgba(0, 0, 0, 0.65)"
                    }}
                    type="edit"
                  />
                  <EditPopup
                    visible={this.state.singleCustomer.editVisibilty}
                    visibleFun = {this.handleClick}
                    id={record.key}
                    information={record}
                  />
                  <Divider type="vertical" />
                    <Icon onClick={event => deletePopup(record.key,record,deleteHtml)}
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
                    <Icon onClick={event => editPopup(record.key,record,editHtml)}
                      style={{
                        fontSize: "1.2rem",
                        color: "rgba(0, 0, 0, 0.65)"
                      }}
                      type="edit"
                    />
                  <Divider type="vertical" />
                    <Icon onClick={event => deletePopup(record.key,record,deleteHtml)}
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
                    <Icon onClick={event => viewPopup(record.key,record,viewHtml)}
                      style={{
                        fontSize: "1.2rem",
                        color: "rgba(0, 0, 0, 0.65)"
                      }}
                      type="profile"
                    />
                  <Divider type="vertical" />
                    <Icon onClick={event => editPopup(record.key,record,editHtml)}
                      style={{
                        fontSize: "1.2rem",
                        color: "rgba(0, 0, 0, 0.65)"
                      }}
                      type="edit"
                    />
                  <Divider type="vertical" />
                    <Icon onClick={event => deletePopup(record.key,record,deleteHtml)}
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
  editPopup: PropTypes.func.isRequired,
  deletePopup: PropTypes.func.isRequired,
  viewHtml: PropTypes.string.isRequired,
  editHtml: PropTypes.string.isRequired,
  deleteHtml: PropTypes.string.isRequired,
};

const TableComponent = withRouter(TableCmponent);

export default TableComponent;
