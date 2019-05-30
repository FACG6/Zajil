import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import PropTypes from 'prop-types';

const DropdownMenu = ({ pageSize, paginationSize }) => {
  const handleMenuClick = (e) => {
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
      <Dropdown overlay={menu} trigger={['click']}>
        <a className=" ant-dropdown-link">
          {pageSize}
          <Icon type="down" />
        </a>
      </Dropdown>
      {` عناصر `}
    </div>
  );
};

DropdownMenu.propTypes = {
  pageSize: PropTypes.string.isRequired,
  paginationSize: PropTypes.func.isRequired,
};

export default DropdownMenu;
