import React from "react";
import { Button, Modal, Form, Select, Input } from "antd";
import './style.css';
import { Upload, Icon } from 'antd';
import { toast } from "react-toastify";


function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

const CollectionCreateForm = Form.create({ name: "form_in_modal" })(
  class extends React.Component {
    state = {
      loading: false,
    };

    handleChange = info => {
      if (info.file.status === 'uploading') {
        this.setState({ loading: true });
        return;
      }
      if (info.file.status === 'done') {
        getBase64(info.file.originFileObj, imageUrl =>
          this.setState({
            imageUrl,
            loading: false,
          }),
        );
      }
    };
    render() {
      const uploadButton = (
        <div>
          <Icon type={this.state.loading ? 'check-circle' : 'plus'} />
          <div className="ant-upload-text">أرفق صورة</div>
        </div>
      );
      const imageUrl = this.state.imageUrl;

      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      const { Option } = Select;

      return (
        <Modal
          visible={visible}
          title="إضافة كابتن"
          okText="اضافة"
          onCancel={onCancel}
          onOk={onCreate}
          cancelText="إلغاء"
        >
          <Form >
            <div className="add-captain-container-left">
              <Form.Item label="رقم الهوية" >
                {getFieldDecorator("IDNumber", {
                  rules: [
                    { required: true, message: "يرجى ملئ الحقل تسع ارقام ", pattern: /^[0-9]{9}$/ }
                  ]
                })(<Input type="text" id="IDNumber" />)}
              </Form.Item>
              <Form.Item label="رقم الرخصة">
                {getFieldDecorator("licenceNumber", {
                  rules: [
                    { required: true, message: "رقم الرخصة يجب ألا يقل عن سبعة أرقام", pattern: /^[0-9]{7}$/ }
                  ]
                })(<Input type="text" id="licenceNumber" />)}
              </Form.Item>
              <Form.Item label="الحالة">
                {getFieldDecorator("status", {
                  rules: [
                    { required: true, message: "يرجى اختيار حالة" }
                  ]
                })(
                  <Select id="licenceNumber" style={{ width: 80 }}>
                    <Option value="true">غير فعال</Option>
                    <Option value="false">فعال </Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item label="صورة الهوية">
                {getFieldDecorator("avatar", {
                  rules: [
                    {
                      required: true,
                      message: "ىرجى رفع صورة الكابتن"
                    }
                  ]
                })(<Upload
                  accept=".jpg , .png"
                  name="avatar"
                  className="avatar-uploader"
                  showUploadList={false}
                  onChange={this.handleChange}
                >
                  {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
                </Upload>)}
              </Form.Item>

            </div>
            <div className='add-captain-container-center'></div>
            <div className='add-captain-container-right'>
              <Form.Item label="الاسم">
                {getFieldDecorator("name", {
                  rules: [
                    { required: true, message: "يرجى ملئ الحقل بحروف ", pattern: /^([أ-ي]|\s)+$/ }
                  ]
                })(<Input type="text" id="name" />)}
              </Form.Item>
              <Form.Item label="البريد">
                {getFieldDecorator("email", {
                  rules: [
                    {
                      required: true,
                      message: "يرجى ملئ الحقل بريد الكتروني",
                      pattern: /.+\@.+\..+/
                    }
                  ]
                })(<Input type="email" id="email" />)}
              </Form.Item>
              <Form.Item label="كلمة المرور">
                {getFieldDecorator("password", {
                  rules: [
                    {
                      required: true,
                      message: "كلمة المرور يجب ان تحتوي على الاقل رقم واحد وان تكون من اربعة الى ثمانية أحرف",
                      pattern: /^(?=.*\d).{4,8}$/,
                    }
                  ]
                })(<Input type="password" id="password" />)}
              </Form.Item>
              <Form.Item label="الهاتف">
                {getFieldDecorator("phone", {
                  rules: [
                    {
                      required: true,
                      message: "الرجاء ملئ الحقل بارقام",
                      pattern: /^\+?[0-9]+$/
                    }
                  ]
                })(<Input type="text" id="phone" />)}
              </Form.Item>
              <Form.Item label="العنوان" dir="ltr">
                {getFieldDecorator("address", {
                  rules: [
                    { required: true, message: "يرجى ملئ الحقل بحروف ", pattern: /^([أ-ي]|\s)+$/ }
                  ]
                })(<Input type="text" id="address" />)}
              </Form.Item>
            </div>
          </Form>
        </Modal>
      );
    }
  }
);

class CollectionsPage extends React.Component {
  state = {
    visible: false
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
      if (err) {
        return;
      }
      values["avatar"] = values.avatar.file.name;
      form.resetFields();
      fetch('/api/v1/addCaptain', {
        method: 'POST',
        body: JSON.stringify(values),
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })

        .then(res => res.json())
        .then(res => {
          if (res.result) {
            toast.success('Student added successfuly ');
          }
          else {
            toast.error(res.error);
          }
        })
        .catch(err =>
          toast.error(err)
        )
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
          New Collection
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default CollectionsPage;
