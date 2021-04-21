// import { BarChart } from '@material-ui/icons';
import { Box } from '@material-ui/core';
import React, { Component } from 'react'
import { Container, Row, Col, Card, CardBody, CardImg, Table, CardHeader } from 'reactstrap'
import Account from '../../components/accounts/account';
import BarChart from '../../components/barChart/barchart';
import DatePickers from '../../components/datepicker/dashboardDatePicker';
import LineChart from '../../components/linechart/linechart';
import Charts from '../../components/linechart/linechart';
import Notification from '../../components/Notifications/notification'
import Eclipseselect from '../../components/select/dashboardSelect';
import Engagement from '../../components/select/Engagement';
import FilterbyCards from '../../components/select/FilterbyCards';
import FilterMonth from '../../components/select/FilterMonth';
import SortCards from '../../components/select/SortCards';
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
                <div className="container wrapper">
                    <Row>
                        <div className="col-md-12 d-flex ">
                            <div>
                                <h3 className="header-heading">Dashboard</h3>
                                <span style={{color: '#414A4B', fontWeight: '600'}} className="">January 17, 2021</span>
                            </div>
                            <div className="header-right">
                                <span style={{ cursor: 'pointer' }} onClick={this.handleAccount} className="avatar">JD</span>
                                <span style={{ cursor: 'pointer' }} onClick={this.handleNotification}><i class="fas fa-lg fa-bell" style={{ color: '#0A0E0D' }}></i></span>
                                <span style={{ cursor: 'pointer' }} onClick={this.handleNotification} class="badge bg-danger">9</span>
                            </div>
                        </div>

                        <Col className="pt-5" lg={8}>
                            <Row>
                                <Col className="ps-0 pt-2" md={4}>
                                    <Card className="shadow-sm">
                                        <div className="p-3 card-bg bg-exposure">
                                            <h6 style={{ fontWeight: '800' }} className="pb-0 mb-0 ">EXPOSURE</h6>
                                            <span style={{ fontSize: '9px', marginTop: '-10px', fontWeight: '500' }} className="text-secondary">From January, 2021</span>
                                            <p style={{ fontWeight: '700', fontSize: 'large' }} className="mt-2">8514</p>
                                            <span style={{ color: '#7F48F7', fontWeight: '500' }} > 56% <i class="fas ps-1 fa-arrow-alt-up"></i></span>
                                            <div style={{ float: 'right', marginTop: '-90px' }} class="fas opacity-3 dots text-secondary "><Eclipseselect/></div>
                                        </div>

                                    </Card>

                                </Col>
                                <Col className="ps-0 pt-2" md={4}>
                                    <Card className="shadow-sm">
                                        <div className="p-3 card-bg bg-open-card">
                                            <h6 style={{ fontWeight: '800' }} className="pb-0 mb-0 ">CARD OPENS</h6>
                                            <span style={{ fontSize: '9px', marginTop: '-10px', fontWeight: '500' }} className="text-secondary">From January, 2021</span>
                                            <p style={{ fontWeight: '700', fontSize: 'large' }} className="mt-2">8514</p>
                                            <span style={{ color: '#7F48F7', fontWeight: '500' }} > 74% <i class="fas ps-1 fa-arrow-alt-up"></i></span>
                                            <div style={{ float: 'right', marginTop: '-90px' }} class="fas opacity-3 dots text-secondary "><Eclipseselect/></div>
                                        </div>

                                    </Card>
                                </Col>

                                <Col className="ps-0 pt-2" md={4}>
                                    <Card className="shadow-sm" style={{ backgroundColor: '#7F48F7', color: 'white' }}>
                                        <div className="p-3 card-bg bg-saved-card">
                                            <h6 style={{ fontWeight: '800' }} className="pb-0 mb-0 ">SAVED CARDS</h6>
                                            <span style={{ fontSize: '9px', marginTop: '-10px', fontWeight: '500' }} className="text-white">From January, 2021</span>
                                            <p style={{ fontWeight: '700', fontSize: 'large' }} className="mt-2">23</p>
                                            <span style={{ fontWeight: '500' }}  > 3.9% <i class="fas ps-1 fa-arrow-alt-up"></i></span>
                                            <div style={{ float: 'right', marginTop: '-90px' }} class="fas opacity-3 dots text-secondary "><Eclipseselect/></div>
                                            {/* <i style={{float:'right'}} class="far fa-3x fa-heart "></i> */}
                                        </div>


                                    </Card>

                                </Col>
                                <Col className="pt-2 ps-0" md={12}>
                                    <Card className="shadow-sm">
                                        <CardHeader className="bg-white">

                                            <Row>
                                                <Col md={6}>
                                                    <h6 style={{fontWeight:'800'}} className=" ">DASHBOARD</h6>
                                                    <div style={{ marginTop: '-12px' }}>
                                                        <Engagement selected="Total Engagement" />
                                                        <SortCards selected="All Cards" />
                                                    </div>
                                                </Col>
                                                <Col style={{paddingRight:'0px'}} className="text-end" md={3}>
                                            <div className="pt-2 ">
                                                <span style={{ fontSize: '10px' }} className="text-secondary pt-2 pe-3">FROM</span>
                                                <span style={{ fontWeight: '800' }} className="fw-bold pt-1"><DatePickers /></span>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className="pt-2">
                                                <span style={{ fontSize: '10px' }} className="text-secondary pt-2 pe-3">TO</span>
                                                <span style={{ fontWeight: '800' }} className="fw-bold pt-1"><DatePickers /></span>
                                            </div>
                                        </Col>
                                            </Row>
                                        </CardHeader>
                                        <LineChart />
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col style={{ paddingTop: '55px' }} className="ps-0" lg={4}>
                            <Card className="shadow-sm">
                                <div className="p-3">
                                    <h2 style={{ paddingTop: '45px', paddingBottom: '45px' }} className=" text-center text-danger   fw-bold">
                                        <img width="100%" src={require('../../assets/re-max.jpg').default} alt="Logo" />
                                    </h2>
                                </div>
                                <div className="p-3 py-2" style={{ backgroundColor: '#7F48F7', color: 'white' }}>
                                    <h6 className="pb-0 mb-0 fw-bold">MOST POPULAR CARD</h6>
                                    <p style={{ fontSize: 'x-small' }} className="mb-0">From January, 2021</p>
                                </div>
                                <div className="p-4 pb-2 pt-2 d-flex" style={{ backgroundColor: '#B2B4B3', color: 'white' }}>
                                    <h6 className="pb-0 mb-0 fw-bold">375</h6>
                                    <span style={{ fontSize: '10px',fontWeight:'600', marginLeft: '5px' }} className="mt-1">OPENS</span>
                                </div>
                                <div className="p-3 pt-2">
                                    <Card className="card-wrapper pt-0">
                                        <CardImg top className="card-img" src="https://cdn.pixabay.com/photo/2017/08/01/12/43/kitchen-2565105_960_720.jpg" alt="Card image cap" />
                                        <CardBody>
                                            <div className="card-img-2"></div>
                                            <span className="dollar ">$<b>4</b></span>
                                            <div style={{ lineHeight: '80%' }}>

                                                <span style={{ fontWeight: '800' }} className="card-heading" >Title Card Listing</span><br></br>
                                                <span className="card-description text-secondary" >subtitle and listing description</span><br>
                                                </br>
                                                <span className="card-sub-description" >Remax [comapnay name]</span>
                                            </div>
                                            <div className="star pe-1">
                                                <i style={{ color: '#F2D338' }} class="fas fa-star"></i>
                                                <span><b>4.2</b> <br></br> &nbsp;&nbsp;<span className="fw-normal">KM</span></span>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Card>
                        </Col>
                        <Col className="pt-3 ps-0 " lg={8}>
                            <Card className="shadow-sm"> 
                                <CardHeader className="bg-white">
                                    <Row>
                                        <Col md={6}>
                                            <h6 className="fw-bold pt-2">CARD PERFORMANCE</h6>
                                        </Col>
                                        <Col style={{paddingRight:'0px'}} className="text-end" md={3}>
                                            <div className="pt-2">
                                                <span style={{ fontSize: '10px' }} className="text-secondary pt-2 pe-3">FROM</span>
                                                <span style={{ fontWeight: '800' }} className="fw-bold pt-1"><DatePickers /></span>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className="pt-2">
                                                <span style={{ fontSize: '10px' }} className="text-secondary pt-2 pe-3">TO</span>
                                                <span style={{ fontWeight: '800' }} className="fw-bold pt-1"><DatePickers /></span>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardHeader>

                                <BasicTable />

                            </Card>
                        </Col>
                        <Col className="ps-0 pt-3" lg={4} >
                            <Card className="shadow-sm" style={{ position: 'relative' }} className="">
                                <CardHeader>
                                    <h6 className="fw-bold ">PERFORMANCE BY DAY</h6>
                                    <div style={{ marginTop: '-12px' }}>
                                        <FilterbyCards selected="Total Card Open" />
                                        <FilterMonth selected="Months" />
                                    </div>

                                </CardHeader>
                                <BarChart />
                            </Card>
                        </Col>
                    </Row>
                    <Notification notificationOpen={this.state.notificationOpen} onClick={this.handleNotification} />
                    <Account accountOpen={this.state.accountOpen} onClick={this.handleAccount} />
                </div>
            </>
        )
    }
}
