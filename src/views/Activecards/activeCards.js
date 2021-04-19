import React, { Component } from 'react'

import '../../assets/css/draftCards.css'
import ActiveCard from '../../components/ActiveCard/ActiveCard'
import Notification from '../../components/Notifications/notification';
import Account from '../../components/accounts/account';


export default class ActiveCards extends Component {
    constructor(props) {
        super(props);
        this.state={
            notificationOpen:false,
            accountOpen:false,
        }
    }
    handleNotification=()=>{
        this.setState({
            notificationOpen:!this.state.notificationOpen
        })
    }
    handleAccount=()=>{
        this.setState({
            accountOpen:!this.state.accountOpen
        })
    }
    render() {
        return (
            <>
                <div className="container wrapper">
                    <div className="row">
                        <div className="col-md-12 d-flex ">
                            <div>
                                <h3 className="header-heading ">Active Cards</h3>
                                <span style={{color: '#414A4B', fontWeight: '600'}} className="">January 17, 2021</span>
                            </div>
                            <div className="header-right">
                                <span style={{cursor:'pointer'}} onClick={this.handleAccount} className="avatar ">JD</span>
                                <span style={{cursor:'pointer'}} onClick={this.handleNotification}><i class="fas fa-lg fa-bell"></i></span>
                                <span style={{cursor:'pointer'}} onClick={this.handleNotification} class="badge   bg-danger">9</span>
                            </div>
                        </div>
                        <div className="col-lg-11 col-md-10 colsm-12">
                        <ActiveCard/>

                        </div>
                        <div className="col-lg-11 col-md-10 col-sm-12">
                        <ActiveCard/>


                        </div>
                        <div className="col-lg-11 col-md-10 col-sm-12">
                        <ActiveCard/>


                        </div>
                        <Notification notificationOpen={this.state.notificationOpen} onClick={this.handleNotification}/>
                        <Account accountOpen={this.state.accountOpen} onClick={this.handleAccount}/>
                    </div>
                </div>
            </>
        )
    }
}
