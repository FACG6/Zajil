import React from "react";
import { Button, Modal, Form, Select, Input } from "antd";
import './style.css';
import { Upload, Icon } from 'antd';
import { notification } from 'antd';

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
    componentDidMount() {
      const id = 6;
      // const { id } = this.props.id;
      fetch(`/api/v1/getCaptainDetails/${id}`)
        .then(res => res.json())
        .then(res => {

          if (res.result) {
            const rows = res.result[0];
            this.props.form.setFieldsValue({
              name: rows.s_name, email: rows.s_email, phone: rows.s_mobile_number,
              address: rows.s_address, IDNumber: rows.s_id_number, licenceNumber: rows.s_driver_licence_number,
              status: rows.b_status, avatar: rows.s_image, password: rows.s_password,
            });

          }
          else {
            notification.open({
              message: 'fail',
              description:
                res.error,
              icon: <Icon type="meh" style={{ color: '#108ee9' }} />,
            });
          }

        })

        .catch(err =>
          notification.open({
            message: 'fail',
            description:
              err,
            icon: <Icon type="meh" style={{ color: '#108ee9' }} />,
          })
        );
    }
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
          title="تعديل كابتن"
          okText="حفظ"
          onCancel={onCancel}
          onOk={onCreate}
          cancelText="إلغاء"
        >
          <Form >
            <div className="edit-captain-container-left">
              <Form.Item label="رقم الهوية" >
                {getFieldDecorator("IDNumber", {
                  rules: [
                    { required: true, message: "يرجى ملئ الحقل بارقام ", pattern: /^[0-9]{9}$/ }
                  ]
                })(<Input type="text" id="IDNumber" />)}
              </Form.Item>
              <Form.Item label="رقم الرخصة">
                {getFieldDecorator("licenceNumber", {
                  rules: [
                    { required: true, message: "يرجى ملئ الحقل بارقام ", pattern: /^[0-9]{7}$/ }
                  ]
                })(<Input type="text" id="licenceNumber" />)}
              </Form.Item>
              <Form.Item label="الحالة">
                {getFieldDecorator("status", {
                  rules: [
                    { required: true, message: "يرجى اختيار حالة" }
                  ]
                })(
                  <Select style={{ width: 80 }} id='status'>
                    <Option value="false">غير فعال</Option>
                    <Option value="true">فعال </Option>
                  </Select>
                )}
              </Form.Item>

              <Form.Item label="صورة الهوية">
                {getFieldDecorator("avatar", {
                  rules: [
                    {
                      required: true,
                      message: "يرجى رفع صورة الكابتن"
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
            <div className='edit-captain-container-center'></div>
            <div className='edit-captain-container-right'>
              <Form.Item label="الاسم">
                {getFieldDecorator("name", {
                  rules: [
                    { required: true, message: "يرجى ملئ الحقل بحروف ", pattern: /^([أ-يa-z]|\s)+$/ }
                  ]
                })(<Input type="text" id="name"
                />)}
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
                      pattern: /^\+?[0-9]{10,12}$/
                    }
                  ]
                })(<Input type="text" id="phone" />)}
              </Form.Item>

              <Form.Item label="العنوان" dir="ltr">
                {getFieldDecorator("address", {
                  rules: [
                    { required: true, message: "يرجى ملئ الحقل بحروف ", pattern: /^[أ-يa-z]*$/ }
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
      if (err) {
        return;
      }
      console.log(values);
      // const { id } = this.props.id;
      const id = 6;
      form.resetFields();

      fetch(`/api/v1/putCaptain/${id}`, {
        method: 'PUT',
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
            notification.open({
              message: 'success',
              description:
                'captain edit successfuly',
              icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
            });
          }
          else {
            notification.open({
              message: 'fail',
              description: res.error,
              icon: <Icon type="meh" style={{ color: '#108ee9' }} />,
            });
          }
        })
        .catch(err =>
          notification.open({
            message: 'fail',
            description: err,
            icon: <Icon type="meh" style={{ color: '#108ee9' }} />,
          })
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
