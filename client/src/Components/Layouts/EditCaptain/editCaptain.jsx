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
      name: "",
      email: "",
      phone: "",
      address: "",
      IDNumber: " ",
      licenseNumber: " ",
      status: " ",
      avatar: " ",
      password: "",
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
      fetch(`/api/v1//getCaptainDetails/${id}`)
        .then(res => {
          if (res.result) {
            const rows = res.result;
            return this.setState({
              name: rows.s_name,
              email: rows.s_email,
              phone: rows.s_mobile_number,
              address: rows.s_address,
              IDNumber: rows.s_id_number,
              licenseNumber: rows.s_driver_licence_number,
              status: rows.b_status,
              avatar: rows.s_image,
              password: rows.s_password,
            })
          }
          else {
            toast.error(res.error);
          }

        })
        .catch(err => toast.error(err));
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
                })(<Input type="text" id="IDNumber" value={this.state.IDNumber} />)}
              </Form.Item>
              <Form.Item label="رقم الرخصة">
                {getFieldDecorator("licenceNumber", {
                  rules: [
                    { required: true, message: "يرجى ملئ الحقل بارقام ", pattern: /^[0-9]{7}$/ }
                  ]
                })(<Input type="text" id="licenceNumber" value={this.state.licenseNumber} />)}
              </Form.Item>
              <Form.Item label="الحالة">
                {getFieldDecorator("status", {
                  rules: [
                    { required: true, message: "يرجى اختيار حالة" }
                  ]
                })(
                  <Select id="licenceNumber" style={{ width: 80 }} value={this.state.status}>
                    <Option value="0">غير فعال</Option>
                    <Option value="1">فعال </Option>
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
                  value={this.state.avatar}
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
                })(<Input type="text" id="name" value={this.state.name} />)}
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
                })(<Input type="email" id="email" value={this.state.email} />)}
              </Form.Item>
              <Form.Item label="كلمة المرور">
                {getFieldDecorator("password", {
                  rules: [
                    {
                      required: true,
                    }
                  ]
                })(<Input type="password" id="password" value={this.state.password} />)}
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
                })(<Input type="text" id="phone" value={this.state.phone} />)}
              </Form.Item>

              <Form.Item label="العنوان" dir="ltr">
                {getFieldDecorator("address", {
                  rules: [
                    { required: true, message: "يرجى ملئ الحقل بحروف ", pattern: /^[أ-يa-z]*$/ }
                  ]
                })(<Input type="text" id="address" value={this.state.address} />)}
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
      // const { id } = this.props.id;
      const id = 6;
      values["avatar"] = values.avatar.file.name;
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
        .then(res => {
          if (res.result) {
            toast.success('captain edit successfuly ');
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
