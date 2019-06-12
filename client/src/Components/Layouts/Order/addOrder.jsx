import antd, { Icon } from 'antd';
import React from 'react'
import validator from 'validator'
import './style.css';
const { Button, Modal, Form, Input, Select } = antd;
const { Option } = Select;
const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    handelName = (rule, value, cb) => {
      if (!value) cb('!يرجى ادخال اسم الزبون')
      else cb()
    }
    handelCaptainName = (rule, value, cb) => {
      if (!value) cb('!يرجى ادخال اسم الكابتن')
      else cb()
    }
    handelMarket = (rule, value, cb) => {
      if (!value) cb('!يرجى ادخال اسم المتجر')
      else cb()
    }
    handelItem = (rule, value, cb) => {
      if (!value) cb('!يرجى اضافة العنصر')
      else cb()
    }
    handelTitle = (rule, value, cb) => {
      if (!value) cb('!يرجى ادخال العنوان')
      else cb()
    }
    handlePhone = (rule, value, cb) => {
      if (value) {
        console.log(value)
        if (value.length !== 9) cb('!يجب ان يكون رقم الهاتف 9 خانات فقط')
        else cb()
      } else cb('!يرجى ادخال رقم الهاتف')
    }

    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title={<div><Icon type="user-add" className='title' />اضافة طلب </div>}
          okText="أنشئ"
          cancelText="إالغاء"
          onCancel={onCancel}
          onOk={onCreate}
          className="modalcontainer"

        >
          <Form
            style={{ display: "flex" }}
          >
            <div className='right-container'>
              <Form.Item label="اسم الزبون" layout="horizontal" className='userName'>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, validator: this.handelName }],
                })(<div>
                  <Input />
                </div>
                )}
                
              </Form.Item>
              <div style={{ display: 'flex' }}>
                <Form.Item label="الهاتف" layout="horizontal" className='phone'>
                  {getFieldDecorator('phone', {
                    rules: [
                      { required: true, validator: this.handlePhone }],
                  })(
                    <Input />
                  )}
                </Form.Item>
                <Form.Item layout="horizontal" style={{ direction: 'rtl' }}>
                  {getFieldDecorator('phone1', { initialValue: '970' })(
                    <Select style={{
                      direction: 'ltr', width: '83px',marginRight:'-6px'
                    }}>
                      <Option value="970">+970</Option>
                      <Option value="972">+972</Option>
                    </Select>)}
                </Form.Item>
                
              </div>
              <Form.Item label="اسم الكابتن" layout="horizontal" style={{ direction: 'rtl' }} >
                {getFieldDecorator('captainName', {
                  rules: [{ required: true, validator: this.handelCaptainName }],
                })(<div>
                  <Input />
                </div>
                )}
                
              </Form.Item>
              <Form.Item label="اضافة عنصر" layout="horizontal" style={{ direction: 'rtl' }} >
                {getFieldDecorator('item', {
                  rules: [{ required: true, validator: this.handelItem }],
                })(<div>
                  <Input />
                </div>
                )}
                
              </Form.Item>

            </div>
            <div className='left-container'>
              <Form.Item label="اختر متجر" layout="horizontal" style={{ direction: 'rtl' }}>
                {getFieldDecorator('markit', {
                  rules: [{ required: true, message: '', validator: this.handelMarket }],
                })(<Input />)}
              </Form.Item>
              <Form.Item style={{ display: "block" }} label="العنوان">
                {getFieldDecorator('address', {
                  rules: [{ required: true, message: 'يرجى ادخال العنوان' }],
                })(<Input />)}
              </Form.Item>
            </div>
          </Form>
        </Modal>
      );
    }
  },
)
export default class CollectionsPage extends React.Component {
  state = {
    visible: false,

  };

  showModal = () => {
    this.setState({ visible: true });
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
 
  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      console.log(values)

      if (err) {
        return;
      }
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          إضافة مستخدم <Icon type="user" /></Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          onchange={this.onchange}
        />
      </div>
    );
  }
}