// import { BarChart } from '@material-ui/icons';
import React, { Component } from 'react'
import { Container, Row, Col, Card, CardBody, CardImg, Table, CardHeader } from 'reactstrap'
import Account from '../../components/accounts/account';
import BarChart from '../../components/barChart/barchart';
import DatePickers from '../../components/datepicker/dashboardDatePicker';
import LineChart from '../../components/linechart/linechart';
import Charts from '../../components/linechart/linechart';
import Notification from '../../components/Notifications/notification'
import BasicTable from '../../components/table/table';

export default class Dashboard extends Component {
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
                <Container fluid>
                    <Row>
                        <div className="col-md-12 d-flex ">
                            <div>
                                <h3 style={{fontWeight:'800'}} className="header-heading ">Dashboard</h3>
                                <span className="">January 17,2021</span>
                            </div>
                            <div className="header-right">
                                <span style={{ cursor: 'pointer' }} onClick={this.handleAccount} className="avatar ">JD</span>
                                <span style={{ cursor: 'pointer' }} onClick={this.handleNotification}><i class="fas fa-lg fa-bell text-secondary"></i></span>
                                <span style={{ cursor: 'pointer' }} onClick={this.handleNotification} class="badge   bg-danger">9</span>
                            </div>
                        </div>

                        <Col className="pt-5" md={9}>
                            <Row>
                                <Col className="ps-0 pt-2" md={4}>
                                    <Card>
                                        <div className="p-3 card-bg bg-exposure">
                                            <h6 style={{fontWeight:'800'}} className="pb-0 mb-0 ">EXPOSURE</h6>
                                            <span  style={{ fontSize: '10px', marginTop: '-10px',fontWeight:'500' }} className="text-secondary">From January,2021</span>
                                            <p style={{fontWeight:'800'}} className="">8514</p>
                                            <span style={{ color: '#7F48F7',fontWeight:'500' }} > 56% <i class="fas ps-1 fa-long-arrow-alt-up"></i></span>
                                            <i style={{ float: 'right', marginTop: '-90px' }} class="fas opacity-3 dots text-secondary fa-ellipsis-h"></i>
                                        </div>

                                    </Card>

                                </Col>
                                <Col className="ps-0 pt-2" md={4}>
                                    <Card>
                                        <div className="p-3 card-bg bg-open-card">
                                            <h6 style={{fontWeight:'800'}} className="pb-0 mb-0 ">CARD OPENS</h6>
                                            <span  style={{ fontSize: '10px', marginTop: '-10px',fontWeight:'500' }} className="text-secondary">From January,2021</span>
                                            <p style={{fontWeight:'800'}} className="">8514</p>
                                            <span style={{ color: '#7F48F7',fontWeight:'500' }} > 74% <i class="fas ps-1 fa-long-arrow-alt-up"></i></span>
                                            <i style={{ float: 'right', marginTop: '-90px' }} class="fas dots opacity-3 text-secondary fa-ellipsis-h"></i>
                                        </div>

                                    </Card>
                                </Col>

                                <Col className="ps-0 pt-2" md={4}>
                                    <Card style={{ backgroundColor: '#7F48F7', color: 'white' }}>
                                        <div className="p-3 card-bg bg-saved-card">
                                            <h6 style={{fontWeight:'800'}} className="pb-0 mb-0 ">SAVED CARDS</h6>
                                            <span  style={{ fontSize: '10px', marginTop: '-10px',fontWeight:'500' }} className="text-white">From January,2021</span>
                                            <p style={{fontWeight:'800'}}className="">23</p>
                                            <span style={{ fontWeight:'500' }}  > 3.9% <i class="fas ps-1 fa-long-arrow-alt-up"></i></span>
                                            <i style={{ float: 'right', marginTop: '-90px' }} class="fas   fa-ellipsis-h"></i>
                                            {/* <i style={{float:'right'}} class="far fa-3x fa-heart "></i> */}
                                        </div>


                                    </Card>

                                </Col>
                                <Col className="pt-2 ps-0" md={12}>
                                    <Card>
                                        <CardHeader className="bg-white">

                                            <Row>
                                                <Col md={8}>
                                                    <h6  className=" ">DASHBOARD</h6>
                                                    <div style={{ marginTop: '-12px' }}>
                                                        <span clasName="text-secondary" style={{ fontSize: '8px' }}>Total Engagments <i class="fas ps-2 fa-caret-down"></i></span>
                                                        <span className="ps-3 text-secondary" style={{ fontSize: '8px' }}>All Cards <i class="fas ps-2 fa-caret-down"></i></span>
                                                    </div>
                                                </Col>
                                                <Col md={2}>
                                                    <div className="pt-2">
                                                        <span style={{ fontSize: '6px' }} className="text-secondary pt-2 pe-3">FROM</span>
                                                        <span style={{ fontSize: '11px',fontWeight:'800' }} className="fw-bold pt-1"><DatePickers/></span>
                                                        <span clasName="text-secondary" style={{ fontSize: '6px', opacity: '0.5' }}><i class="fas ps-2 fa-caret-down"></i><i style={{ position: 'absolute', marginLeft: '-12px', marginTop: '8px' }} class="fas ps-2 fa-caret-up"></i></span>
                                                    </div>
                                                </Col>
                                                <Col md={2}>
                                                    <div className="pt-2">
                                                        <span style={{ fontSize: '6px', }} className="text-secondary pt-2 pe-3">TO</span>
                                                        <span style={{ fontSize: '11px',fontWeight:'800' }} className="fw-bold pt-1"><DatePickers/></span>
                                                        <span clasName="text-secondary" style={{ fontSize: '6px', opacity: '0.5' }}><i class="fas ps-2 fa-caret-down"></i><i style={{ position: 'absolute', marginLeft: '-12px', marginTop: '8px' }} class="fas ps-2 fa-caret-up"></i></span>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CardHeader>
                                        <LineChart />
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col style={{ paddingTop: '55px' }} className="ps-0  " md={3}>
                            <Card>
                                <div className="p-3">
                                    <h2 style={{ paddingTop: '70px', paddingBottom: '70px' }} className=" text-center text-danger   fw-bold">REMAX</h2>

                                </div>
                                <div className="p-3 pb-1 pt-1" style={{ backgroundColor: '#7F48F7', color: 'white' }}>
                                    <h6 className="pb-0 mb-0 fw-bold">MOST POPULAR CARD</h6>
                                    <span style={{ fontSize: '8px', marginTop: '-10px' }} className="">From January,2021</span>
                                </div>
                                <div className="p-4 pb-2 pt-2 d-flex" style={{ backgroundColor: '#B2B4B3', color: 'white' }}>
                                    <h6 className="pb-0 mb-0 fw-bold">375</h6>
                                    <span style={{ fontSize: '10px', marginLeft: '5px' }} className="">Opens</span>
                                </div>
                                <div className="p-3 pt-2">
                                    <Card className="card-wrapper pt-0">
                                        <CardImg top className="card-img" src="https://via.placeholder.com/80" alt="Card image cap" />
                                        <CardBody>
                                            <div className="card-img-2"></div>
                                            <span className="dollar ">$<b>4</b></span>
                                            <div style={{ lineHeight: '80%' }}>

                                                <span style={{fontWeight:'800'}} className="card-heading" >Title Card Listing</span><br></br>
                                                <span className="card-description text-secondary" >subtitle and listing description</span><br>
                                                </br>
                                                <span className="card-sub-description" >Remax [comapnay name]</span>
                                            </div>
                                            <div className="star">
                                                <i style={{ color: '#F2D338' }} class="fas fa-star"></i>
                                                <span><b>4.2</b> <br></br> &nbsp;&nbsp;KM</span>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Card>
                        </Col>
                        <Col className="pt-3 ps-0 " md={9} >
                            <Card>
                                <CardHeader className="bg-white">
                                    <Row>
                                        <Col md={8}>
                                            <h6 className="fw-bold pt-2">CARD PERFORMANCE</h6>
                                        </Col>
                                        <Col md={2}>
                                            <div className="pt-2">
                                                <span style={{ fontSize: '6px' }} className="text-secondary pt-2 pe-3">FROM</span>
                                                <span style={{ fontSize: '11px',fontWeight:'800' }} className="fw-bold pt-1"><DatePickers/></span>
                                                <span clasName="text-secondary" style={{ fontSize: '6px', opacity: '0.5' }}><i class="fas ps-2 fa-caret-down"></i><i style={{ position: 'absolute', marginLeft: '-12px', marginTop: '8px' }} class="fas ps-2 fa-caret-up"></i></span>
                                            </div>
                                        </Col>
                                        <Col md={2}>
                                            <div className="pt-2">
                                                <span style={{ fontSize: '6px' }} className="text-secondary pt-2 pe-3">TO</span>
                                                <span style={{ fontSize: '11px',fontWeight:'800' }} className="fw-bold pt-1"><DatePickers/></span>
                                                <span clasName="text-secondary" style={{ fontSize: '6px', opacity: '0.5' }}><i class="fas ps-1 fa-caret-down"></i><i style={{ position: 'absolute', marginLeft: '-12px', marginTop: '8px' }} class="fas ps-2 fa-caret-up"></i></span>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardHeader>

                                <BasicTable />

                            </Card>
                        </Col>
                        <Col className="ps-0 pt-3" md={3} >
                            <Card style={{ position: 'relative' }} className="">
                                <CardHeader>

                                    <h6 className="fw-bold ">PERFORMANCE BY DAY</h6>
                                    <div style={{ marginTop: '-12px' }}>
                                        <span clasName="text-secondary" style={{ fontSize: '8px' }}>Total Card Opens <i class="fas ps-2 fa-caret-down"></i></span>
                                        <span className="ps-3 text-secondary" style={{ fontSize: '8px' }}>Months <i class="fas ps-2 fa-caret-down"></i></span>
                                    </div>


                                </CardHeader>
                                <BarChart />
                            </Card>
                        </Col>
                    </Row>
                    <Notification notificationOpen={this.state.notificationOpen} onClick={this.handleNotification} />
                    <Account accountOpen={this.state.accountOpen} onClick={this.handleAccount} />
                </Container>

            </>
        )
    }
}
