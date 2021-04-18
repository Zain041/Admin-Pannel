import React, { Component } from 'react'
import {Link } from 'react-router-dom'

import '../../assets/css/createcard.css'

import Notification from '../../components/Notifications/notification';
import Account from '../../components/accounts/account';
import {Card,Input, Form,Row,Col, Label,Button,CardImg,CardBody  } from 'reactstrap'
import Switches from '../../components/swiitch/switch';
import SimpleSelect from '../../components/select/select';
import DateAndTimePickers from '../../components/datepicker/datepicker';


export default class EditCard extends Component {
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
                                <h3 className="header-heading ">Edit Card</h3>
                                <span className="">January 17,2021</span>
                            </div>
                            <div className="header-right">
                                <span style={{cursor:'pointer'}} onClick={this.handleAccount} className="avatar ">JD</span>
                                <span style={{cursor:'pointer'}} onClick={this.handleNotification}><i class="fas fa-lg fa-bell text-secondary"></i></span>
                                <span style={{cursor:'pointer'}} onClick={this.handleNotification} class="badge   bg-danger">9</span>
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12">
                      <Card className="section-card shadow-sm rounded mt-5 ">
                      
                            <Row className="position-relative">
                           
                                <Col md={{ size: '11', offset: 1 }}>
                                    
                                <Link to="/active-cards"> <Button style={{fontSize:'14px'}} className="bg-transparent mt-2   text-dark  border border-none   "><i style={{color:'#7F48F7'}} class="fas fa-arrow-left"></i> Back</Button></Link>
                                    <h6 className="fw-bold p-3">New Card</h6>
                                    
                                    <Label style={{fontSize:'14px',color:'#7F48F7'}} className="ps-3">Limit Post</Label ><span className="icon-bolt"><i class="fas fa-xs text-secondary fa-bolt"></i></span>
                                    <Switches/>

                                </Col>
                                <Col className="mb-3" md={11}>
                                    <Row>
                                        <Col style={{borderRight:'2px solid #d7dad7'}} md={{ size: '6', offset: 1 }}>
                                            <Label style={{fontSize:'14px'}} className="ps-4">Headr Title</Label >
                                            <Input  style={{backgroundColor:'#F5F6F7'}} type="text" className="mb-3 input-field ms-4 mt-1"/>
                                            <Label style={{fontSize:'14px'}} className="ps-4">Subtitle</Label >
                                        <Input className="input-field" style={{backgroundColor:'#F5F6F7'}} type="text" className="mb-3 input-field ms-4  mt-1 "/>
                                        <Label style={{fontSize:'14px'}} className="ps-4">Price</Label >
                                        <Input className="input-field" style={{backgroundColor:'#F5F6F7',width:'100px'}} type="text" className="mb-3  ms-4 mt-1 "/>
                                        <Label style={{fontSize:'14px'}} className="ps-4">Long Description </Label >
                                        <Input className="input-field" style={{backgroundColor:'#F5F6F7'}} type="textarea" rows="4" className="mb-3 input-field  ms-4 mt-1 "/>
                                        <Label style={{fontSize:'14px'}} className="ps-4">Category </Label >
                                        <SimpleSelect label="Choose"/>
                                        <Label style={{fontSize:'14px'}} className="ps-4 mt-4 mb-1">Card Date and Time Limit </Label >
                                        <div className=" ms-4 datepicker">
                                        <DateAndTimePickers/>
                                        </div>
                                        <p style={{opacity:'0.5',fontSize:'14px',fontWeight:'500'}} className="mt-3 mb-3 ps-4  text-secondary ">Reoccusing</p>
                                       <p className="ps-2"> <Switches/></p>
                                       <div className="d-flex mb-4">
                                       <SimpleSelect label="Weekly"/>
                                       <SimpleSelect label="Days"/>
                                       </div>
                                       <Label style={{fontSize:'14px'}} className="ps-4 mt-4 mb-1">Header Image </Label ><br></br>
                                       <img className="ps-4" height="100" width="300" src="https://via.placeholder.com/80"/>
                                       <Label style={{fontSize:'14px',border:'1px solid #d7dad7',borderRadius:'4px',fontWeight:'500',cursor:'pointer'}} className="ms-4 p-2 mt-4 mb-1"> <input className="d-none" type="file"/>Select From Gallery&nbsp; <i style={{color:'#7F48F7'}} class="far fa-edit"></i> </Label ><br></br>
                                       <Label style={{fontSize:'14px'}} className="ps-4 mt-4 mb-1">Publish Card </Label ><br></br>
                                       <Button className="bg-transparent button text-dark publish button border border-none ms-4 mb-md-0 mb-sm-2  ">Publish Now &nbsp; &nbsp;<i style={{color:'#7F48F7'}} class="far fa-edit"></i> </Button>
                                      
                                        </Col>
                                        <Col md={5}>
                                        <h6 className="fw-bold mt-2 text-center">Live Preview</h6>
                                        <Card className="card-wrapper ms-4 me-2 shadow-sm rounded">
                                <CardImg top className="card-img" src="https://via.placeholder.com/80" alt="Card image cap" />
                                <CardBody>
                                    <div className="card-img-2"></div>
                                    <span className="dollar ">$4</span>
                                    <div style={{ lineHeight: '80%' }}>

                                        <span className="card-heading" >Title Card Listing</span><br></br>
                                        <span className="card-description text-secondary" >subtitle and listing description</span><br>
                                        </br>
                                        <span className="card-sub-description" >Remax [comapnay name]</span>
                                    </div>
                                    <div style={{}} className="star">
                                        <i style={{ color: '#F2D338' }} class="fas fa-star"></i>
                                        <span>4.2 <br></br> &nbsp;&nbsp;KM</span>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card className="card-wrapper ms-4 me-2 shadow-sm rounded">
                                <CardImg top className="card-img" src="https://via.placeholder.com/80" alt="Card image cap" />
                                <CardBody>
                                    <div className="card-img-2"></div>
                                    <span className="dollar ">$4</span>
                                    <div style={{ lineHeight: '80%' }}>

                                        <span className="card-heading" >Title Card Listing</span><br></br>
                                        <span className="card-description text-secondary" >subtitle and listing description subtitle and listing &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description subtitle and listing description &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subtitle and listing descriptionsubtitle and listing &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;descriptionsubtitle and listing description</span><br>
                                        </br>
                                        <span className="card-sub-description" >Remax [comapnay name]</span>
                                    </div>
                                    <div style={{}} className="star-2">
                                        <i style={{ color: '#F2D338' }} class="fas fa-star"></i>
                                        <span>4.2 <br></br> &nbsp;&nbsp;KM</span>
                                    </div>
                                </CardBody>
                            </Card>
                                        </Col>
                                    </Row>
                                    
                                    
                                </Col>
                            </Row>
                      </Card>

                        </div>
                        
                        <Notification notificationOpen={this.state.notificationOpen} onClick={this.handleNotification}/>
                        <Account accountOpen={this.state.accountOpen} onClick={this.handleAccount}/>
                    </div>
                </div>
            </>
        )
    }
}
