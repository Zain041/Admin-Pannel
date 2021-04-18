import React, { Component } from 'react'
import { Col, Row, Card, Button, CardImg, CardBody } from 'reactstrap'
import '../../assets/css/ActiveCards.css'
import {Link } from 'react-router-dom'

export default class ActiveCard extends Component {
    render() {
        return (
            <>
                <Card className=" section-card shadow-sm  mt-4">
                    <Row className="p-4">
                        <Col md={4} sm={12}>
                            <h3>Title post Listing</h3>
                            <p className="text-secondary">Subtitle post listing description</p>
                            <p className="mb-0">Expiry:-</p><br></br>

                            <p className="  text-secondary "> <i class="fas text-success fa-circle "></i> Draft <i class="fas fa-sort-down"></i></p>
                            <h6>Price:$4.00</h6>


                            <div class="button-section">
                               <Link to="/edit-card"><Button className="bg-transparent button text-dark border border-none  "><i class="far fa-edit"></i> Edit</Button></Link> 
                                <Button className="bg-transparent button text-dark border border-none"><i class="far fa-trash-alt"></i> Delete</Button>
                            </div>

                        </Col>
                        <Col md={4} sm={12}>
                            <p className="text-secondary">Date range <span style={{color:'#7F48F7'}}>This week <i class="fas fa-sort-down text-secondary"></i></span></p>
                           
                           <div className="d-flex">
                                <span className="box rounded">
                                <span><b>Exposure</b></span><br></br>
                                <span className="text-secondary"><b  style={{color:'#7F48F7'}} >8514</b></span>
                            </span>
                            <span className="box rounded">
                                <span><b>Opens</b></span><br></br>
                                <span className="text-secondary"><b  style={{color:'#7F48F7'}}>3514</b></span>
                            </span>
                            </div>
                            <div className="d-flex">
                                <span className="box rounded">
                                <span><b>Saves</b></span><br></br>
                                <span className="text-secondary"><b  style={{color:'#7F48F7'}}>3514</b></span>
                            </span>
                            <span className="box rounded">
                                <span><b>Shares</b></span><br></br>
                                <span  className="text-secondary"><b  style={{color:'#7F48F7'}}>3514</b></span>
                            </span>
                            </div>
                        </Col>
                        <Col md={4} sm={12}>
                        
                            <Card className="card-wrapper shadow-sm rounded">
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
                        </Col>
                      
                    </Row>
                </Card>
            </>
        )
    }
}
