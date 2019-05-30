import React, { Component } from 'react';
import Sidebar from '../../CommonComponent/Sidebar';
export default class Customers extends Component{
    state={
        customers:[],
        name:''
    }
    componentDidMount(){
        axios()
    }
    render(){
        return(
            <div>
                <Sidebar/>
                <Navbar name={this.state.name}/>
                <Header  />
            </div>
        )
    }
}