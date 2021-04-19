import React, { Component } from 'react'
import { Col, Row, Card, Button, CardImg, CardBody } from 'reactstrap'
import CardDropdown from '../select/selectCard'
import '../../assets/css/draftCards.css'
export default class DraftCard extends Component {
    render() {
        return (
            <>
                <Card className=" section-card shadow-sm mt-4">
                    <Row className="p-4">
                        <Col md={7} sm={12}>
                            <h3>Title post Listing</h3>
                            <p className="text-secondary" style={{fontSize: '14px'}}>Subtitle post listing description</p>
                            <p className="mb-0" style={{fontWeight: '500', fontSize: '14px'}}>Expiry:-</p><br></br>

                            <p className="  text-secondary "> <CardDropdown selected="Draft" /> </p>
                            <h6>Price:$4.00</h6>

                            <div class="button-section">
                                <Button className="bg-transparent text-dark border border-none  "><i class="fas fa-edit"></i> Edit</Button>
                                <Button className="bg-transparent text-dark border border-none"><i class="fas fa-trash-alt"></i> Delete</Button>
                            </div>

                        </Col>
                        <Col md={5} sm={12} className="px-4 py-2">
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
