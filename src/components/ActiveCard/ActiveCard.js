import React, { Component } from 'react'
import { Col, Row, Card, Button, CardImg, CardBody } from 'reactstrap'
import '../../assets/css/ActiveCards.css'
import { Link } from 'react-router-dom'
import Datepickers from '../datepicker/dashboardDatePicker'
import CardDropdown from '../select/selectCard'
import FilterDateRange from '../select/DateFilter'

export default class ActiveCard extends Component {
    render() {
        return (
            <>
                <Card className=" section-card shadow-sm  mt-4">
                    <Row className="p-4">
                        <Col md={4} sm={12}>
                            <h3>Title post Listing</h3>
                            <p className="text-secondary" style={{fontSize: '14px'}}>Subtitle post listing description</p>
                            <p className="mb-0" style={{fontWeight: '500', fontSize: '14px'}}>Expiry:-</p><br></br>
                            <p className="  text-secondary "> <CardDropdown selected="Active" /> </p>
                            <h6>Price:$4.00</h6>


                            <div class="button-section">
                                <Button className="bg-transparent text-dark border border-none  "><i class="fas fa-edit"></i> Edit</Button>
                                <Button className="bg-transparent text-dark border border-none"><i class="fas fa-trash-alt"></i> Delete</Button>
                            </div>

                        </Col>
                        
                        <Col md={4} sm={12}>
                            <p className="text-secondary d-flex align-items-center">
                                <span>Date range</span>
                                <span style={{ color: '#7F48F7' }}> <FilterDateRange /> </span>
                            </p>

                            <div className="d-flex">
                                <span className="box rounded">
                                    <span><b>Exposure</b></span><br></br>
                                    <span className="text-secondary"><b style={{ color: '#7F48F7' }} >8514</b></span>
                                </span>
                                <span className="box rounded">
                                    <span><b>Opens</b></span><br></br>
                                    <span className="text-secondary"><b style={{ color: '#7F48F7' }}>3514</b></span>
                                </span>
                            </div>
                            <div className="d-flex">
                                <span className="box rounded">
                                    <span><b>Saves</b></span><br></br>
                                    <span className="text-secondary"><b style={{ color: '#7F48F7' }}>3514</b></span>
                                </span>
                                <span className="box rounded">
                                    <span><b>Shares</b></span><br></br>
                                    <span className="text-secondary"><b style={{ color: '#7F48F7' }}>3514</b></span>
                                </span>
                            </div>
                        </Col>

                        <Col md={4} sm={12}>

                            <Card className="card-wrapper shadow-sm rounded">
                                <CardImg top className="card-img" src="https://cdn.pixabay.com/photo/2017/08/01/12/43/kitchen-2565105_960_720.jpg" alt="Card image cap" />
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
                        </Col>
                    </Row>
                </Card>
            </>
        )
    }
}
