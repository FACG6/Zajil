import React from "react";
import { Menu, Dropdown, Icon } from "antd";
import PropTypes from "prop-types";

const DropdownMenu = ({ pageSize, paginationSize }) => {
  const handleMenuClick = e => {
    paginationSize(e.key);
  };
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="10">10</Menu.Item>
      <Menu.Item key="30">30</Menu.Item>
      <Menu.Item key="50">50</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="الكل">الكل</Menu.Item>
    </Menu>
  );
  return (
    <div className="table-dropdown">
      {` عرض `}
      <Dropdown overlay={menu} trigger={["click"]}>
        <span className="ant-dropdown-link">
          <span>{pageSize} </span>
          <Icon type="down" />
        </span>
      </Dropdown>
      {` عناصر `}
    </div>
  );
};

DropdownMenu.propTypes = {
  pageSize: PropTypes.string.isRequired,
  paginationSize: PropTypes.func.isRequired
};

export default DropdownMenu;
