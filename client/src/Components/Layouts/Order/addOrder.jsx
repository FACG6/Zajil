import antd, { Icon } from "antd";
import React from "react";
import validator from "validator";
import "./style.css";
const { Button, Modal, Form, Input, Select, AutoComplete, notification } = antd;
const { Option } = Select;
let id = 0;
const openNotificationWithIcon = (type, message) => {
  notification[type]({
    message
  });
};
const CollectionCreateForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    state = {
      dataSourceCaptains: [],
      dataSourcePlaces: [],
      error: {
        errCaptain: "",
        errPalce: ""
      }
    };
    componentDidMount() {
      fetch("/api/v1/getCaptainsNames")
        .then(res => res.json())
        .then(res => {
          const { error } = res;
          if (error) {
            this.openNotificationWithIcon("error", error);
          } else {
            this.setState({ dataSourceCaptains: res.result });
          }
          return fetch("/api/v1/getPlacesNames");
        })
        .then(res => res.json())
        .then(res => {
          const { error } = res;
          if (error) {
            this.openNotificationWithIcon("error", error);
          } else {
            this.setState({ dataSourcePlaces: res.result });
          }
        })
        .catch(() => {
          this.openNotificationWithIcon(
            "erro",
            "Something error please refersh the page"
          );
        });
    }
    remove = k => {
      const { form } = this.props;
      const keys = form.getFieldValue("keys");
      if (keys.length === 1) {
        return;
      }
      form.setFieldsValue({
        keys: keys.filter(key => key !== k)
      });
    };

    add = () => {
      const { form } = this.props;
      const keys = form.getFieldValue("keys");
      const nextKeys = keys.concat(id++);
      form.setFieldsValue({
        keys: nextKeys
      });
    };
    handleBlureCaptain = value => {
      const { dataSourceCaptains } = this.state;
      if (!value || !dataSourceCaptains.some(data => data.s_name === value)) {
        this.setState(prev => {
          return {
            error: {
              ...prev.error,
              errCaptain: "الرجاء مليء الحقل من القائمة المقترحة"
            }
          };
        });
        this.props.selectedCaptain("");
      } else
        this.setState(prev => {
          return {
            error: {
              ...prev.error,
              errCaptain: ""
            }
          };
        });
    };
    handleBlurePlace = value => {
      const { dataSourcePlaces } = this.state;
      if (!value || !dataSourcePlaces.some(data => data.s_name === value)) {
        this.setState(prev => {
          return {
            error: {
              ...prev.error,
              errPalce: "الرجاء مليء الحقل من القائمة المقترحة"
            }
          };
        });
        this.props.selectedPlaces("");
      } else
        this.setState(prev => {
          return {
            error: {
              ...prev.error,
              errPalce: ""
            }
          };
        });
    };

    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator, getFieldValue } = form;
      const {
        dataSourceCaptains,
        dataSourcePlaces,
        error: { errCaptain, errPalce }
      } = this.state;
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 20 }
        }
      };
      const formItemLayoutWithOutLabel = {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 20, offset: 4 }
        }
      };
      getFieldDecorator("keys", { initialValue: [] });
      const keys = getFieldValue("keys");
      const formItems = keys.map((k, index) => (
        <Form.Item
          {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
          label={index === 0 ? "" : ""}
          required={false}
          key={k}
        >
          {getFieldDecorator(`items[${k}]`, {
            validateTrigger: ["onChange", "onBlur"],
            rules: [
              {
                required: true,
                whitespace: true,
                message: "الرجاء اضافة الطلبية"
              }
            ]
          })(
            <Input
              placeholder="اضف طلبية"
              style={{ width: "60%", marginRight: 8 }}
            />
          )}
          {keys.length > 1 ? (
            <Icon
              className="dynamic-delete-button"
              type="minus-circle-o"
              onClick={() => this.remove(k)}
            />
          ) : null}
        </Form.Item>
      ));
      const optionsCaptains = dataSourceCaptains.map(group => (
        <AutoComplete.Option
          key={group.pk_i_id}
          value={group.s_name}
          onClick={() => this.props.selectedCaptain(group.pk_i_id)}
        >
          {group.s_name}
        </AutoComplete.Option>
      ));

      const optionsPlaces = dataSourcePlaces.map(group => (
        <AutoComplete.Option
          key={group.pk_i_id}
          value={group.s_name}
          onClick={() => this.props.selectedPlaces(group.pk_i_id)}
        >
          {group.s_name}
        </AutoComplete.Option>
      ));

      return (
        <Modal
          visible={visible}
          title={
            <div>
              <Icon type="user-add" className="title" />
              اضافة طلب{" "}
            </div>
          }
          okText="أنشئ"
          cancelText="إالغاء"
          onCancel={onCancel}
          onOk={onCreate}
          className="modalcontainer"
        >
          <Form style={{ display: "flex" }}>
            <div className="right-container">
              <Form.Item
                label="اسم الزبون"
                layout="horizontal"
                className="userName"
              >
                {getFieldDecorator("userName", {
                  rules: [
                    {
                      required: true,
                      message: "يرجى ملئ الحقل ",
                      pattern: /^([أ-يa-z0-9]|\s)*$/
                    }
                  ]
                })(
                  <div>
                    <Input />
                  </div>
                )}
              </Form.Item>
              <Form.Item label="عنوان الزبون" className="address">
                {getFieldDecorator("address", {
                  rules: [
                    {
                      required: true,
                      message: "يرجى ملئ الحقل ",
                      pattern: /^([أ-يa-z0-9-]|\s)*$/
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <div style={{ display: "flex" }}>
                <Form.Item label="الهاتف" layout="horizontal" className="phone">
                  {getFieldDecorator("phone", {
                    rules: [
                      {
                        required: true,
                        message: "يرجى مليء الحقل بتسعة ارقام",
                        pattern: /^([0-9]){9}$/
                      }
                    ]
                  })(<Input />)}
                </Form.Item>
                <Form.Item
                  layout="horizontal"
                  style={{ direction: "rtl", flexDirection: "row-reverse" }}
                >
                  {getFieldDecorator("phone1", { initialValue: "970" })(
                    <Select
                      style={{
                        direction: "ltr",
                        width: "83px",
                        marginRight: "-6px"
                      }}
                    >
                      <Option value="970">+970</Option>
                      <Option value="972">+972</Option>
                    </Select>
                  )}
                </Form.Item>
              </div>
              <Form.Item
                label="اسم الكابتن"
                layout="horizontal"
                className="captainName"
              >
                <AutoComplete
                  className="certain-category-search"
                  dropdownClassName="certain-category-search-dropdown"
                  dropdownMatchSelectWidth={false}
                  dropdownStyle={{ width: 300 }}
                  size="large"
                  style={{ width: "100%" }}
                  dataSource={optionsCaptains}
                  placeholder="اختر الكابتن"
                  optionLabelProp="value"
                  onBlur={this.handleBlureCaptain}
                  filterOption={(inputValue, option) =>
                    option.props.children
                      .toUpperCase()
                      .indexOf(inputValue.toUpperCase()) !== -1
                  }
                />
                {errCaptain && (
                  <p className="auto-complete-error">{errCaptain}</p>
                )}
              </Form.Item>
            </div>
            <div className="left-container">
              <Form.Item
                label="اختر متجر"
                layout="horizontal"
                className="markit"
              >
                <AutoComplete
                  className="certain-category-search"
                  dropdownClassName="certain-category-search-dropdown"
                  dropdownMatchSelectWidth={false}
                  dropdownStyle={{ width: 300 }}
                  size="large"
                  style={{ width: "100%" }}
                  dataSource={optionsPlaces}
                  placeholder="اختر المتجر"
                  optionLabelProp="value"
                  onBlur={this.handleBlurePlace}
                  filterOption={(inputValue, option) =>
                    option.props.children
                      .toUpperCase()
                      .indexOf(inputValue.toUpperCase()) !== -1
                  }
                />
                {errPalce && <p className="auto-complete-error">{errPalce}</p>}
              </Form.Item>
              <div className="addOrder">
                {formItems}
                <Form.Item {...formItemLayoutWithOutLabel}>
                  <Button
                    type="dashed"
                    onClick={this.add}
                    style={{ width: "60%" }}
                  >
                    <Icon type="plus" /> اضافة طلب
                  </Button>
                </Form.Item>
                <Form.Item {...formItemLayoutWithOutLabel} />
              </div>
            </div>
          </Form>
        </Modal>
      );
    }
  }
);
export default class CollectionsPage extends React.Component {
  state = {
    visible: false,
    selectedCaptain: "",
    selectedPlaces: ""
  };
  handleVisible = () => {
    this.setState(prev => {
      return { visible: !prev.visible };
    });
    this.formRef.props.form.resetFields();
  };
  handleSlectedCaptain = id => {
    this.setState({ selectedCaptain: id });
  };
  handleSelectedPlaces = id => {
    this.setState({ selectedPlaces: id });
  };

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      const { address, items, phone, phone1, username } = values;
      const { selectedCaptain, selectedPlaces } = this.state;
      if (err || !items || !selectedCaptain || !selectedPlaces) {
        openNotificationWithIcon("warning", "يرجى ملىء جميع الحقول");
      } else {
        const orderData = {
          address,
          items,
          phone: `+${phone1}${phone}`,
          customerName: username,
          placeId: selectedPlaces,
          captainId: selectedCaptain
        };
        fetch("/api/v1/addOrder", {
          method: "POST",
          body: JSON.stringify(orderData),
          headers: { "content-type": "application/json" }
        })
          .then(res => res.json())
          .then(res => {
            if (res.error) {
              openNotificationWithIcon("error", "لم تتم عملية الاضافة");
            } else openNotificationWithIcon("success", "تمت عملية الاضافة بنجاح");
            this.handleVisible();
          })
          .catch(() => {
            openNotificationWithIcon('warning', 'هناك خطأ ما الرجاء اعادة المحاولة')
          })
      }
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleVisible}>
          إضافة مستخدم <Icon type="user" />
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleVisible}
          onCreate={this.handleCreate}
          onchange={this.onchange}
          selectedCaptain={this.handleSlectedCaptain}
          selectedPlaces={this.handleSelectedPlaces}
          destroyOnClose={true}
        />
      </div>
    );
  }
}
