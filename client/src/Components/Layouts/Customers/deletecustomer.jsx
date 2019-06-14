import React,{Component} from 'react'
import { Modal,Button } from 'antd';

  // eslint-disable-next-line
  class  Deletepopup  extends Component {
    state = 
    { visible: this.props.visible,
     id:this.props.id
   
   }
   onCancel = e => {
    this.props.visibleFun("customersPage", "deleteVisibility")(e);
    console.log(this.state.id)
  };
  onDelete=e=>{
fetch(`api/v1/deleteCustomer/${this.props.id}`,
{method:"DELETE" ,
// body:{this.props.id}
}).then(res=>res.json()).then(console.log('هنا راح يستدعي دالة الحزف من الفرونت'))
  }
  componentWillReceiveProps(props) {
    const { visible, id } = props;
    this.setState({ visible, id });
  }
    render() {
      
      return (
        <Modal
        title="حذف مستخدم"
        visible={this.state.visible}
        onOk={this.ondelete}
        cancelText="الغاء"
        okText="حذف"
        onCancel={this.onCancel}
        closable={false}
        style={{ direction: "rtl", }}
        className="deleteModal"
      >
        <p>هل تريد بالتأكيد حذف المستخدم؟</p>

        </Modal>
      );
     }}
  export default  Deletepopup 

