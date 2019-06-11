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
          <Form className='modalform'>
            <div className='modalform__right-container'>
              <Form.Item label="الاسم" layout="horizontal" className='modalform_formitem'>
                {getFieldDecorator('name', {
                  rules: [{ required: true, validator: this.handelName }],
                })(<div>
                  <Input />
                </div>
                )}
              </Form.Item>
              <div style={{ display: 'flex' }}>
                <Form.Item label="الهاتف" layout="horizontal" className='modalform_formitem'>
                  {getFieldDecorator('phone', {
                    rules: [
                      {
                        required: true,
                        validator: this.handlePhone

                      }],
                  })(
                    <Input />
                  )}
                </Form.Item>
                <Form.Item layout="horizontal" className='modalform_formitem'>
                  {getFieldDecorator('prefixPhone', { initialValue: '970' })(
                    <Select
                      className='modalform_formitem-select'
                    >
                      <Option value="970">+970</Option>
                      <Option value="972">+972</Option>
                    </Select>)}
                </Form.Item>
              </div>
              <Form.Item label="الحالة" layout="horizontal" className='modalform_formitem'>
                {getFieldDecorator('status', {
                  rules: [{ required: true, message: 'يرجى ادخال حالة المستخدم' }],
                })(<Select>
                  <Option value="true">فعال</Option>
                  <Option value="false">غير فعال</Option>
                </Select>)}
              </Form.Item>
            </div>
            <div className='modalform__left-container'>
              <Form.Item label="البريدالالكتروني" layout="horizontal" className='modalform_formitem'>
                {getFieldDecorator('email', {
                  rules: [{ required: true, message: '', validator: this.handelEmail }],
                })(<Input />)}
              </Form.Item>
              <Form.Item
                label="العنوان"
              >
                {getFieldDecorator('address', {
                  rules: [{ required: true, message: 'يرجى ادخال العنوان' }],
                })(<Input />)}
              </Form.Item>
            </div>
          </Form>
        </Modal>
      )
    }

  },
)
export default CollectionCreateForm;