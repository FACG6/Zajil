import React, { Component } from "react";
import axios from "axios";
import TableComponent from "../../CommonComponent/Table/Table";
import {
  viewPopup,
  editPopup,
  deletePopup
} from "../../CommonComponent/Table/Popups";
import WrappedComponent from '../../HOC/WithNavSide';

class OrdersManagement extends Component {
  state = {
    orders: [],
    error: ""
  };

  componentDidMount() {
    axios
      .get("/api/v1//viewOrders")
      .then(res => {
        this.setState({ orders: res.data });
      })
      .catch(error => {
        this.setState({
          error
        });
      });
  }

  render() {
    return (
      <div>
        {/* <OrdersFilter /> */}
        <TableComponent
        columns={this.state.orders}
          pageName="customers"
          />
      </div>
    );
}
}

export default WrappedComponent(OrdersManagement);

// columns={[
//   {
//     key: 54,
//     customer: "fgd",
//     captain: "fgdf",
//     date: "dfsdf"
//   },
//   {
//     key: 56,
//     customer: "fgd",
//     captain: "fgdf",
//     date: "dfsdf"
//   }
// ]}
// viewPopup={viewPopup}
// editPopup={editPopup}
// deletePopup={deletePopup}