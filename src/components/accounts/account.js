import React, { Component } from 'react'
import '../../assets/css/account.css'

export default class Account extends Component {
    render() {
        return (
            <>
                <div className={` ${this.props.accountOpen?"d-block":"d-none"} notification-wrapper`}>
                    <div class="notification-header d-flex">
                        <p className="notification-text">Account</p>
                        <span onClick={this.props.onClick}class="cross-icon ps-5"><i class="fas fa-lg fa-times"></i></span>
                    </div>
                    
                    <div className="p-4 mt-2">
                    <span className="avatar">JD</span> <span style={{fontSize:'12px'}} className="text-secondary ">FIRST NAME LAST NAME</span>
                       
                    </div>
                </div>

            </>
        )
    }
}
