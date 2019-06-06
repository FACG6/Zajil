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
        name: '',
        date: '',
        filteredcustomersDate: [],
        filteredcustomersName: [],
        filter: false


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

    filter = (date, name) => {
        const value = name.trim();
        if (date) {
            if (this.state.name) {
                this.dateFilter(date, this.state.filteredcustomersName)
            } else this.dateFilter(date, this.state.allData)

        } else if (name) {
            console.log(111111111111111111111,this.state.date)
            if (this.state.date) {
            
                this.nameFilter(name, this.state.filteredcustomersDate)
            } else this.nameFilter(name, this.state.allData)
        } else if (this.state.date) this.setState({
            customers: this.state.filteredcustomersDate
        })
        else if (this.state.name &&name) this.setState({
            customers: this.state.filteredcustomersName
        })
        else {
            this.setState({

                customers: this.state.allData
            })
        }
    };


    dateFilter = (value, customers) => {
        console.log('date filter',customers)
        if (value.length !== 0) {
            const from = value[0]._d.setHours(0, 0, 0, 0);
            const to = value[1]._d.setHours(0, 0, 0, 0);
            let filterCustomer = customers.filter(customer => {
                let createdDate = new Date(customer.dt_create_at).setHours(0, 0, 0, 0);
                if (createdDate >= from && createdDate <= to) return customer;
            })
            this.setState({
                customers: filterCustomer,
                date: value,
                filteredcustomersDate: filterCustomer

            })
        }
        else {
            this.setState({
                customers: this.state.allData
            })
        }
    }
    nameFilter = (name, customers) => {
        console.log('name filter',customers)
        const value = name.trim();
        let filterCustomerDate = customers.filter(customer => {
            if (customer.s_name.includes(value)) return customer;
        })
        this.setState({
            customers: filterCustomerDate,
            name,
            filteredcustomersName: filterCustomerDate
        })
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
                                    onChange={e => this.filter(e, '')}
                                    style={{ direction: "rtl" }}
                                />
                                <span className='filtercontainer__orderdate-date'>فلترة حسب الوقت</span>
                            </div>
                            <Input size="defaul" placeholder="فلترة حسب الاسم" className="filtercontainer__ordername" onChange={e => this.filter('', e.target.value)} />
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
