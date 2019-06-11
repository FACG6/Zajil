import antd, { Icon } from 'antd';
import React, { Component } from 'react'
import validator from 'validator'
import './style.css'

const { Modal, Form, Input, Select } = antd;
const { Option } = Select;
const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line

  class extends React.Component {
    render()
     {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title={(
            <div>
              <Icon type="user-add" className="modeltitle" />
              إضافة مستخدم
              {' '}
            </div>
          )}
          okText="أنشئ"
          cancelText="إالغاء"
          onCancel={onCancel}
          onOk={onCreate}
          className="modalcontainer"
        >
          <Form className='modalform' />
        </Modal>
      )
    }

  },
)
export default CollectionCreateForm;