import React, { Component } from 'react'

import '../../assets/css/companyProfile.css'

import Notification from '../../components/Notifications/notification';
import Account from '../../components/accounts/account';
import { Card, Input, Form, Row, Col, Label, Button } from 'reactstrap'


export default class CompanyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notificationOpen: false,
            accountOpen: false,
        }
    }
    handleNotification = () => {
        this.setState({
            notificationOpen: !this.state.notificationOpen
        })
    }
    handleAccount = () => {
        this.setState({
            accountOpen: !this.state.accountOpen
        })
    }
    render() {
        return (
            <>
                <div className="container wrapper  ">
                    <div className="row">
                        <div className="col-md-12 d-flex ">
                            <div>
                                <h3 className="header-heading ">Company Profile</h3>
                                <span style={{color: '#414A4B', fontWeight: '600'}} className="">January 17, 2021</span>
                            </div>
                            <div className="header-right">
                                <span style={{ cursor: 'pointer' }} onClick={this.handleAccount} className="avatar ">JD</span>
                                <span style={{ cursor: 'pointer' }} onClick={this.handleNotification}><i class="fas fa-lg fa-bell" style={{ color: '#0A0E0D' }}></i></span>
                                <span style={{ cursor: 'pointer' }} onClick={this.handleNotification} class="badge bg-danger">9</span>
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12">
                            <Card className="section-card shadow-sm rounded mt-5 ">
                                <Row className="position-relative">
                                    <Col md={{ size: '11', offset: 1 }}>
                                        <h6 className="fw-bold p-4">Company Details</h6>
                                    </Col>
                                    <Col md={11}>
                                        <Row>
                                            <Col md={{ size: '5', offset: 1 }}>
                                                <Label style={{ fontSize: '14px' }} className="ps-4">Company Name</Label >
                                                <Input style={{ backgroundColor: '#F5F6F7' }} type="text" className="mb-3 ms-md-4 ms-sm-0 mt-1" />
                                            </Col>
                                            <Col md={5}>
                                                <Label style={{ fontSize: '14px' }} className="ps-4">Address</Label >
                                                <Input style={{ backgroundColor: '#F5F6F7' }} type="text" className="mb-3 ms-md-4 ms-sm-0 mt-1 " />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={{ size: '5', offset: 1 }} sm={{ size: '12' }}>
                                                <Label style={{ fontSize: '14px' }} className="ps-4">Hours Of Operation</Label >
                                                <Input style={{ backgroundColor: '#F5F6F7' }} type="textarea" className="mb-3 ms-md-4 ms-sm-0 mt-1" />
                                            </Col>
                                            <Col md={5}>
                                                <Label style={{ fontSize: '14px' }} className="ps-4">Logo Badge</Label >
                                                <div className="d-flex">
                                                    <span className=" text-danger fw-bold shadow logo-text">REMAX</span>
                                                </div>
                                                <Button className="bg-transparent button text-dark edit-button border border-none   "><i style={{ color: '#7F48F7' }} class="far fa-edit"></i> Edit</Button>
                                            </Col>
                                        </Row>

                                    </Col>
                                    <Col md={{ size: '10', offset: '1' }}>
                                        <span className="ps-3">Image Gallery</span>

                                        <Card className="ms-3 mb-3">
                                            <Row className="p-4">
                                                <Col className="text-center" md={4}>
                                                    <Button className="folders bg-transparent p-2 mt-2 text-dark border border-none w-100 fw-bold" style={{fontSize: '13px', fontWeight: '400'}}> Folder Name 01 <i style={{ color: '#7F48F7' }} class="fas fa-lg ps-3 fa-folder"></i> </Button>
                                                </Col>
                                                <Col className="text-center" md={4}>
                                                    <Button className="folders bg-transparent p-2 mt-2 text-dark border border-none w-100 fw-bold" style={{fontSize: '13px', fontWeight: '400'}}> Folder Name 02 <i style={{ color: '#7F48F7' }} class="fas fa-lg ps-3 fa-folder"></i> </Button>
                                                </Col>
                                                <Col className="text-center  " md={4}>
                                                    <Button className="folders bg-transparent p-2 mt-2 text-dark border border-none w-100 fw-bold" style={{fontSize: '13px', fontWeight: '400'}}> Folder Name 03 <i style={{ color: '#7F48F7' }} class="fas fa-lg ps-3 fa-folder"></i> </Button>
                                                </Col>
                                            </Row>
                                            <Row className="p-4">
                                                <Col className="mt-2 text-center" md={4}>
                                                    <img className="uploaded-image" src="https://cdn.pixabay.com/photo/2017/08/01/12/43/kitchen-2565105_960_720.jpg" />
                                                    <p style={{ fontSize: '14px' }} className="text-start mt-1">Post listing banner jpg</p>
                                                </Col>
                                                <Col className="mt-2 text-center" md={4}>
                                                    <img className="uploaded-image" src="https://cdn.pixabay.com/photo/2017/08/01/12/43/kitchen-2565105_960_720.jpg" />
                                                    <p style={{ fontSize: '14px' }} className="text-start mt-1">Post listing banner jpg</p>
                                                </Col>
                                                <Col className="mt-2 text-center" md={4}>
                                                    <img className="uploaded-image" src="https://cdn.pixabay.com/photo/2017/08/01/12/43/kitchen-2565105_960_720.jpg" />
                                                    <p style={{ fontSize: '14px' }} className="text-start mt-1">Post listing banner jpg</p>
                                                </Col>

                                                {/* row 2 */}
                                                <Col className="mt-2 text-center" md={4}>
                                                    <img className="uploaded-image" src="https://cdn.pixabay.com/photo/2017/08/01/12/43/kitchen-2565105_960_720.jpg" />
                                                    <p style={{ fontSize: '14px' }} className="text-start mt-1">Post listing banner jpg</p>
                                                </Col>
                                                <Col className="mt-2 text-center" md={4}>
                                                    <img className="uploaded-image" src="https://cdn.pixabay.com/photo/2017/08/01/12/43/kitchen-2565105_960_720.jpg" />
                                                    <p style={{ fontSize: '14px' }} className="text-start mt-1">Post listing banner jpg</p>
                                                </Col>
                                                <Col className="mt-2 text-center" md={4}>
                                                    <img className="uploaded-image" src="https://cdn.pixabay.com/photo/2017/08/01/12/43/kitchen-2565105_960_720.jpg" />
                                                    <p style={{ fontSize: '14px' }} className="text-start mt-1">Post listing banner jpg</p>
                                                </Col>
                                                {/* row 3 */}
                                                <Col className="mt-2 text-center" md={4}>
                                                    <img className="uploaded-image" src="https://cdn.pixabay.com/photo/2017/08/01/12/43/kitchen-2565105_960_720.jpg" />
                                                    <p style={{ fontSize: '14px' }} className="text-start mt-1">Post listing banner jpg</p>
                                                </Col>
                                                <Col className="mt-2 text-center" md={4}>
                                                    <img className="uploaded-image" src="https://cdn.pixabay.com/photo/2017/08/01/12/43/kitchen-2565105_960_720.jpg" />
                                                    <p style={{ fontSize: '14px' }} className="text-start mt-1">Post listing banner jpg</p>
                                                </Col>
                                                <Col className="mt-2 text-center" md={4}>
                                                    <img className="uploaded-image" src="https://cdn.pixabay.com/photo/2017/08/01/12/43/kitchen-2565105_960_720.jpg" />
                                                    <p style={{ fontSize: '14px' }} className="text-start mt-1">Post listing banner jpg</p>
                                                </Col>
                                            </Row>
                                            <Row className="p-4">
                                                <Col className="mt-5">
                                                    <div class="ms-auto button-section">
                                                        <Button className="bg-transparent p-2 text-dark border border-none" style={{borderRadius: '4px', fontSize: '14px', fontWeight: '500'}}>New Folder <i class="fas fa-folder ms-1" style={{ color: '#7F48F7' }}></i> </Button>
                                                        <Label style={{ fontSize: '14px', border: '1px solid #d7dad7', borderRadius: '4px', fontWeight: '500', cursor: 'pointer' }} className="bg-transparent text-dark border border-none p-2 mt-4 mb-1"> <input className="d-none" type="file" />Upload Image &nbsp; <i style={{ color: '#7F48F7' }} class="fas fa-upload ms-1"></i> </Label >
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card>

                        </div>

                        <Notification notificationOpen={this.state.notificationOpen} onClick={this.handleNotification} />
                        <Account accountOpen={this.state.accountOpen} onClick={this.handleAccount} />
                    </div>
                </div>
            </>
        )
    }
}
