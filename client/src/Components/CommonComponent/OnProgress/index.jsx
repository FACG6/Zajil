import React from 'react';
import './style.css';
import { Spin, Icon } from 'antd';



export default function index() {
    const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
    return (
      <section className="onProgress">
        <div>
          <Spin className="onProgressIcon" indicator={antIcon} />
          <span className="onProgressTitle">قيد الانشاء</span>
        </div>
      </section>
    );
}