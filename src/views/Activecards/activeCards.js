import React, { Component } from 'react'

import '../../assets/css/draftCards.css'
import ExpiredCard from '../../components/ActiveCard/ActiveCard'
import Notification from '../../components/Notifications/notification';


export default class ActiveCards extends Component {
    constructor(props) {
        super(props);
        this.state={
            notificationOpen:false
        }
    }
    handleNotification=()=>{
        this.setState({
            notificationOpen:!this.state.notificationOpen
        })
    }
    render() {
        return (
            <>
                <div className="container wrapper  ">
                    <div className="row">
                        <div className="col-md-12 d-flex ">
                            <div>
                                <h3 className="header-heading ">Active Cards</h3>
                                <span className="">January 17,2021</span>
                            </div>
                            <div className="header-right">
                                <span className="avatar ">JD</span>
                                <span style={{cursor:'pointer'}} onClick={this.handleNotification}><i class="fas fa-lg fa-bell text-secondary"></i></span>
                                <span style={{cursor:'pointer'}} onClick={this.handleNotification} class="badge   bg-danger">9</span>
                            </div>
                        </div>
                        <div className="col-lg-11 col-md-10 colsm-12">
                            <ExpiredCard/>

                        </div>
                        <div className="col-lg-11 col-md-10 col-sm-12">
                        <ExpiredCard/>


                        </div>
                        <div className="col-lg-11 col-md-10 col-sm-12">
                        <ExpiredCard/>


                        </div>
                        <Notification notificationOpen={this.state.notificationOpen} onClick={this.handleNotification}/>
                    </div>
                </div>
            </>
        )
    }
}
