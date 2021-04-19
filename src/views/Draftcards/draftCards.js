import React, { Component } from 'react'
import { Card } from 'reactstrap'
import '../../assets/css/draftCards.css'
import DraftCard from '../../components/DraftCard/draftCard'
import Notification from '../../components/Notifications/notification'
import Account from '../../components/accounts/account';

export default class DraftCards extends Component {
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
                <div className="container wrapper  ">
                    <div className="row">
                        <div className="col-md-12 d-flex ">
                            <div>
                                <h3 className="header-heading ">Draft Cards</h3>
                                <span style={{color: '#414A4B', fontWeight: '600'}} className="">January 17, 2021</span>
                            </div>
                            <div className="header-right">
                                <span style={{cursor:'pointer'}} onClick={this.handleAccount} className="avatar ">JD</span>
                                <span style={{cursor:'pointer'}} onClick={this.handleNotification}><i class="fas fa-lg fa-bell" style={{ color: '#0A0E0D' }}></i></span>
                                <span style={{cursor:'pointer'}} onClick={this.handleNotification} class="badge bg-danger">9</span>
                            </div>
                        </div>
                        <div className="col-lg-9 col-sm-12">
                            <DraftCard />
                        </div>
                        <div className="col-lg-9 col-sm-12">
                            <DraftCard />
                        </div>
                        <Notification notificationOpen={this.state.notificationOpen} onClick={this.handleNotification}/>
                        <Account accountOpen={this.state.accountOpen} onClick={this.handleAccount}/>
                    </div>
                   
                </div>
            </>
        )
    }
}
