import antd, { Icon, AutoComplete } from 'antd';
import React from 'react'
import WrappedDynamicFieldSet from './addItem';
import validator from 'validator'
import './style.css';
const { Button, Modal, Form, Input, Select } = antd;
const { Option } = Select;
const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line

  
  class extends React.Component {

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
                  rules: [{ required: true, message: "يرجى ادخال اسم الزبون", pattern: /^[أ-يa-z]*$/ }],
                })(<div>
                  <Input />
                </div>
                )}
                
              </Form.Item>
              <div style={{ display: 'flex' }}>
                <Form.Item label="الهاتف" layout="horizontal" className='phone'>
                  {getFieldDecorator('phone', {
                    rules: [
                      {required: true, message: "يرجى ادخال رقم الهاتف", pattern: /^[0-9]*$/  }],
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
              <Form.Item label="اسم الكابتن" layout="horizontal" className="captainName" >
                {getFieldDecorator('captainName', {
                  rules: [{ required: true, message: "يرجى ادخال اسم الكابتن", pattern: /^[أ-يa-z]*$/ }],
                })(<div>
                  <Input />
                </div>
                )}
                
              </Form.Item>
              <Form.Item label="اضافة عنصر" layout="horizontal" className="itam" >
                {getFieldDecorator('item', {
                  rules: [{ required: true, message: "يرجى ادخال الطلبية", pattern: /^[أ-يa-z]*$/ }],
                })(<div className="addItem">
                  <WrappedDynamicFieldSet />
                </div>
                )}
                
              </Form.Item>

            </div>
            <div className='left-container'>
              <Form.Item label="اختر متجر" layout="horizontal" className="markit">
                {getFieldDecorator('markit', {
                  rules: [{ required: true, message: "يرجى ادخال اسم المتجر", pattern: /^[أ-يa-z]*$/ }],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="عنوان الزبون" className="address">
                {getFieldDecorator('address', {
                  rules: [{ required: true, message: "يرجى ادخال عنوان الزبون ", pattern: /^[أ-يa-z]*$/}],
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
    dataSource: [],
  };
  componentDidMount() {

  }
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
        return
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