import React, { Component } from "react";

import { Icon } from "antd";

import CountBox from "../../CommonComponent/CountBox";

import "./style.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="box">
        <div className="box__container">
          <CountBox
            title="الزبائن"
            number="10"
            color="#156FE9"
            icon={<Icon type="team" />}
          />
        </div>
        <div className="box__container">
          <CountBox
            title="الكباتن"
            number="15"
            color="#F86363"
            icon={<Icon type="car" />}
          />
        </div>
        <div className="box__container">
          <CountBox
            title="الطلبات"
            number="40"
            color="#55B690"
            icon={<Icon type="shopping-cart" />}
          />
        </div>
      </div>
    );
  }
}

export default Home;
