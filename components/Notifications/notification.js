import React, { Component } from 'react'
import '../../assets/css/notification.css'

export default class Notification extends Component {
    render() {
        return (
            <>
                <div className={` ${this.props.notificationOpen?"d-block":"d-none"} notification-wrapper`}>
                    <div class="notification-header d-flex">
                        <p className="notification-text">Notifications</p>
                        <span onClick={this.props.onClick}class="cross-icon"><i class="fas fa-lg fa-times"></i></span>
                    </div>
                    <div>
                        <span className="circle-icon"><i class="fas text-white fa-lg fa-info-circle"></i></span>
                        <div style={{ lineHeight: '80%',marginLeft:'30px',marginTop:'30px' }}>
                            <p className=" status text-secondary">STATUS</p><br></br>
                            <span className="notification-title" >Main Header Title of the notification</span><br></br>
                            <p className="notification-description text-secondary" >full notification body text eaxample full
                            full notification body text eaxample full
                            full notification body text eaxample full
                            full notification body text eaxample full</p><br>
                            </br>
                            
                        </div>
                        <div className="date"
                            style={{ color: '#2DB2AF' }} >
                            <span><i class="fas text-success fa-circle "></i> Apr 2</span>
                        </div>
                    </div>
                    <div>
                        <span className="circle-icon"><i class="fas text-white fa-lg fa-info-circle"></i></span>
                        <div style={{ lineHeight: '80%',marginLeft:'30px',marginTop:'30px' }}>
                            <p className=" status text-secondary">STATUS</p><br></br>
                            <span className="notification-title" >Main Header Title of the notification</span><br></br>
                            <p className="notification-description text-secondary" >full notification body text eaxample full
                            full notification body text eaxample full
                            full notification body text eaxample full
                            full notification body text eaxample full</p><br>
                            </br>
                            
                        </div>
                        <div className="date"
                            style={{ color: '#2DB2AF' }} >
                            <span><i class="fas text-success fa-circle "></i> Apr 2</span>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
