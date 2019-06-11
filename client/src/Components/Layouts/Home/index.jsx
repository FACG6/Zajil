import React from 'react';
import { Icon } from 'antd';

import Navbar from '../../CommonComponent/Navbar';
import Sidebar from '../../CommonComponent/Sidebar/index';
import CountBox from '../../CommonComponent/CountBox';
import Header from '../../CommonComponent/Header';

import './style.css';

const Home = () => (
  <div>
    <Sidebar />
    <div className="Home_navbar-and-header-container">
      <Navbar />
      <Header title="الرئيسية" Icon={<Icon type="bank" />} />

      <div>
        <div className="box1">
          <CountBox
            title="الزبائن"
            number="10"
            color="#156FE9"
            icon={<Icon type="team" />}
          />
        </div>
        <div className="box-two">
          <CountBox
            title="الكباتن"
            number="15"
            color="#F86363"
            icon={<Icon type="car" />}
          />
        </div>
        <div className="box-three">
          <CountBox
            title="الطلبات"
            number="40"
            color="#55B690"
            icon={<Icon type="container" />}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
