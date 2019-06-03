import React, { Component } from 'react';
import './style.css';
import { Input } from 'antd';
import Table from '../../CommonComponent/Table/Table';
import Button from '../../CommonComponent/Button';
import Sidebar from "../../CommonComponent/Sidebar/index";
import Header from "../../CommonComponent/Header/index";
import Navbar from "../../CommonComponent/Navbar/index"
import { viewPopup, editPopup, deletePopup } from "../../CommonComponent/Table/Popups";
import { Icon } from 'antd';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

const Search = Input.Search;



export default class Customers extends Component {
    state = {
        customers: [{
            key: 1, customer: 'fgd', email: "jamalat@em", mobileNo: 'fgdf', status: 'فعال',
        }, {
            key: 2, customer: 'fgd', captain: 'fgdf', date: 'dfsdf',
        }],
        title: ' إدارةالمستخدمين ',
        allData: [],
        filterDateStatus: false,
        filterDate: [],
        filterNameStatus: false,
        filterName: []
    }
    componentDidMount() {
        fetch('api/v1/customers').then(res => res.json()).then(result => {
            console.log(result)
            this.setState({
                customers: result,
                allData: result
            })
        }
        )
    }
    onOk = (value) => {
        console.log(value)
        if (value.length !== 0) {
            const from = value[0]._d.setHours(0, 0, 0, 0);
            const to = value[1]._d.setHours(0, 0, 0, 0);
            let filterOrderDate = this.state.allData.filter(customer => {
                let createdDate = new Date(customer.dt_create_at).setHours(0, 0, 0, 0);
                console.log(createdDate)
                if (createdDate >= from && createdDate <= to) return customer;
            })
            this.setState({
                customers: filterOrderDate,
                filterDateStatus: true,
                filterDate: filterOrderDate

            })
        }
        else {
            this.setState({
                customers: this.state.allData
            })
        }
    }
    onChange = (e) => {
        const value = e.target.value.trim();
        if (!this.state.filterNameStatus) {
            let filterOrderDate = this.state.filterDate.filter(customer => {
                if (customer.s_name.includes(value)) return customer;
            })
            this.setState({
                customers: filterOrderDate,
                filterDateStatus:true,
                filterName:filterOrderDate
            })

        }else{
            this.setState({
                customers: this.state.allData
            }) 
        }

        // else {
        //     let filterOrderDate = this.state.allData.filter(customer => {
        //         if (customer.s_name.includes(value)) return customer;
        //     })
        //     this.setState({
        //         customers: filterOrderDate
        //     })
        // }
    }
    render() {
        const { title } = this.state
        return (
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{ display: "flex", "flex-direction": "column", width: "100vw" }}>
                    <Navbar />
                    <Header title='إدارة المستخدمين' Icon={<Icon type="team" />} />
                    <div className='addcustomer'>
                        <Button name='إضافة مستخدم' icon={<Icon type="user" />} />
                        <div className="filtercontainer">
                            <div classNam="filtercontainer__orderdate">
                                <RangePicker
                                    showTime={{ format: 'HH:mm' }}
                                    format="YYYY-MM-DD HH:mm"
                                    placeholder={['من', 'الى']}
                                    onChange={this.onOk}
                                    style={{ direction: "rtl" }}
                                />
                                <span className='filtercontainer__orderdate-date'>فلترة حسب الوقت</span>
                            </div>
                            <Input size="defaul" placeholder="فلترة حسب الاسم" className="filtercontainer__ordername" onChange={this.onChange} />
                        </div>
                    </div>
                    <Table pageName="customers" columns={this.state.customers} classname='tablecustomer-container' viewPopup={viewPopup}
                        editPopup={editPopup}
                        deletePopup={deletePopup} className="table" />
                </div>
            </div>
        )
    }
}
