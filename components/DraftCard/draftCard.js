import React, { Component } from 'react'
import { Col, Row, Card, Button, CardImg, CardBody } from 'reactstrap'
import '../../assets/css/draftCards.css'
export default class DraftCard extends Component {
    render() {
        return (
            <>
                <Card className=" section-card shadow-sm mt-4">
                    <Row className="p-4">
                        <Col md={6} sm={12}>
                            <h3>Title post Listing</h3>
                            <p className="text-secondary">Subtitle post listing description</p>
                            <p className="mb-0">Expiry:-</p><br></br>

                            <p className="  text-secondary "> <i class="fas fa-circle "></i> Draft <i class="fas fa-sort-down"></i></p>
                            <h6>Price:$4.00</h6>


                            <div class="button-section">
                                <Button className="bg-transparent text-dark border border-none  "><i class="far fa-edit"></i> Edit</Button>
                                <Button className="bg-transparent text-dark border border-none"><i class="far fa-trash-alt"></i> Delete</Button>
                            </div>

                        </Col>
                        <Col md={6} sm={12}>
                            <Card className="card-wrapper">
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
                                    <div className="star">
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
