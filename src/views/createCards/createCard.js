import React, { Component } from 'react'

import '../../assets/css/createcard.css'

import Notification from '../../components/Notifications/notification';
import Account from '../../components/accounts/account';
import { Card, Input, Form, Row, Col, Label, Button, CardImg, CardBody } from 'reactstrap'
import Switches from '../../components/swiitch/switch';
import SimpleSelect from '../../components/select/select';
import DateAndTimePickers from '../../components/datepicker/datepicker';
import HelpText from '../../components/HelpText/HelpText';
import { FormGroup } from '@material-ui/core';
import ImageUpload from '../../components/crop/uploadCrop';

import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import ImageGallery from '../../components/ImageGallery/ImageGallery';


export default class CreateCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notificationOpen: false,
            accountOpen: false,
            headerText: '',
            subtitleText: '',
            descriptionText: '',
            ImageModal: false,
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

    onOpenModal = () => {
        this.setState({
            ImageModal: true
        })
    }
    onCloseModal = () => {
        this.setState({
            ImageModal: false
        })
    }

    handleHeaderText = (event) => {
        if (event.target.value.length > 28) {
            alert("you can't write more than 28 characters!");
            return;
        }
        const remainingCharacters = (28 - event.target.value.length) + " Characters remaining"
        this.setState({
            headerText: remainingCharacters
        })
    }

    handleSubtitleText = (event) => {
        if (event.target.value.length > 28) {
            alert("you can't write more than 28 characters!");
            return;
        }
        const remainingCharacters = (28 - event.target.value.length) + " Characters remaining"
        this.setState({
            subtitleText: remainingCharacters
        })
    }

    handleDescriptionText = (event) => {
        if (event.target.value.length > 28) {
            alert("you can't write more than 28 characters!");
            return;
        }
        const remainingCharacters = (28 - event.target.value.length) + " Characters remaining"
        this.setState({
            descriptionText: remainingCharacters
        })
    }

    render() {
        return (
            <>
                <div className="container wrapper  ">
                    <div className="row">
                        <div className="col-md-12 d-flex ">
                            <div>
                                <h3 className="header-heading ">Create Card</h3>
                                <span style={{ color: '#414A4B', fontWeight: '600' }} className="">January 17, 2021</span>
                            </div>
                            <div className="header-right">
                                <span style={{ cursor: 'pointer' }} onClick={this.handleAccount} className="avatar">JD</span>
                                <span style={{ cursor: 'pointer' }} onClick={this.handleNotification}><i class="fas fa-lg fa-bell" style={{ color: '#0A0E0D' }}></i></span>
                                <span style={{ cursor: 'pointer' }} onClick={this.handleNotification} class="badge bg-danger">9</span>
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-12 col-sm-12">
                            <Card className="section-card reset-card-shadow rounded mt-5 ">
                                <Row>
                                    <Col md={{ size: 12 }}>
                                        <h6 style={{ marginLeft: '60px' }} className="fw-bold p-3 ps-3">New Card</h6>
                                        <Label style={{ fontSize: '14px', color: '#7F48F7', marginLeft: '60px' }} className="ps-3">Limit Post</Label ><span className="icon-bolt"><i class="fas fa-xs text-secondary fa-bolt"></i></span>
                                        <Switches />
                                    </Col>
                                    <Col className="mb-3" lg={12} md={12}>
                                        <Row>
                                            <Col style={{ borderRight: '2px solid #d7dad7', marginLeft: '50px', overflowY: 'scroll', maxHeight: '525px' }} className="pb-4" md={{ size: 6 }}>
                                                <FormGroup>
                                                    <Label style={{ fontSize: '14px' }} className="ps-4">Header Title</Label >
                                                    <Input style={{ backgroundColor: '#F5F6F7' }} type="text" className="mb-3 input-field ms-4 mt-1" onChange={this.handleHeaderText} />
                                                    <HelpText text={this.state.headerText} />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label style={{ fontSize: '14px' }} className="ps-4">Subtitle</Label >
                                                    <Input className="input-field" style={{ backgroundColor: '#F5F6F7' }} type="text" className="mb-3 input-field ms-4  mt-1 " onChange={this.handleSubtitleText} />
                                                    <HelpText text={this.state.subtitleText} />

                                                </FormGroup>

                                                <FormGroup>
                                                    <Label style={{ fontSize: '14px' }} className="ps-4">Price</Label >
                                                    <Input className="input-field" style={{ backgroundColor: '#F5F6F7', width: '100px' }} type="number" className="mb-3  ms-4 mt-1 " />

                                                </FormGroup>

                                                <FormGroup>
                                                    <Label style={{ fontSize: '14px' }} className="ps-4">Long Description </Label >
                                                    <Input className="input-field" style={{ backgroundColor: '#F5F6F7' }} type="textarea" rows="4" className="mb-3 input-field  ms-4 mt-1 " onChange={this.handleDescriptionText} />
                                                    <HelpText text={this.state.descriptionText} />
                                                </FormGroup>

                                                <Label style={{ fontSize: '14px' }} className="ps-4">Category </Label >
                                                <SimpleSelect label="Choose" />

                                                <Label style={{ fontSize: '14px' }} className="ps-4 mt-4 mb-1">Card Date and Time Limit </Label >
                                                <div className=" ms-4 datepicker">
                                                    <DateAndTimePickers />
                                                </div>

                                                <p style={{ opacity: '0.5', fontSize: '14px', fontWeight: '500' }} className="mt-3 mb-3 ps-4  text-secondary ">Reoccusing</p>
                                                <p className="ps-2"> <Switches className="ms-0 ms-2" /></p>
                                                <div className="d-flex mb-4">
                                                    <SimpleSelect label="Weekly" />
                                                    <SimpleSelect label="Days" />
                                                </div>

                                                <Label style={{ fontSize: '14px' }} className="ps-4 mt-4 mb-1">Header Image </Label ><br></br>
                                                <img className="ps-4" height="100" width="300" src="https://cdn.pixabay.com/photo/2017/08/01/12/43/kitchen-2565105_960_720.jpg" />
                                                <Button className="bg-transparent text-dark border border-none btn-draft ms-4 mb-md-0 mb-sm-2 mt-3" onClick={this.onOpenModal}>Import From Gallery <span><img style={{width: 20, marginBottom: 5, marginLeft: 5}} src={require('../../assets/svg/edit.svg').default} alt="choose image" /></span> </Button>
                                                <div>
                                                    <Modal open={this.state.ImageModal} onClose={this.onCloseModal} center
                                                        classNames={{
                                                            overlay: 'customOverlay',
                                                            modal: 'importImage',
                                                        }}>
                                                        <h6>Select Image</h6>
                                                        <ImageGallery />
                                                        {/* <ImageUpload /> */}
                                                    </Modal>
                                                </div>

                                                <Label style={{ fontSize: '14px' }} className="ps-4 mt-4 mb-1">Publish Card </Label ><br></br>
                                                <div style={{ float: 'left' }} class="button-section  mt-4">
                                                    <Button className="bg-transparent text-dark border border-none btn-publish ms-4 mb-md-0 mb-sm-2">Publish Now &nbsp; &nbsp;<i style={{ color: '#7F48F7' }} class="fas fa-lg fa-upload"></i></Button>
                                                    <Button className="bg-transparent text-dark border border-none btn-draft">Save as Draft&nbsp; &nbsp;<i style={{ color: '#7F48F7' }} class="fas fa-lg fa-wrench"></i></Button>
                                                </div>

                                            </Col>

                                            <Col md={4} className="mx-auto ps-0" style={{ overflowY: 'scroll', maxHeight: '525px' }}>
                                                <h6 className="fw-bold mt-2 text-center">Live Preview</h6>
                                                <Card style={{ width: '272px' }} className="card-wrapper  rounded">
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
                                                            <span> 4.2 <br></br> &nbsp;&nbsp; <span className="fw-normal">KM</span></span>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                                <Card style={{ width: '272px' }} className="card-wrapper mr-1 rounded">
                                                    <CardImg top className="card-img" src="https://cdn.pixabay.com/photo/2017/08/01/12/43/kitchen-2565105_960_720.jpg" alt="Card image cap" />
                                                    <CardBody>
                                                        <div className="card-img-2"></div>
                                                        <span className="dollar ">$4</span>
                                                        <div style={{ lineHeight: '80%', marginTop: '1.25rem' }}>
                                                            <span className="card-heading" >Title Card Listing</span><br></br>
                                                            <span className="card-sub-description" >Remax [comapnay name]</span> <span style={{ fontSize: 'small', fontWeight: 'bold', color: '#7f48f8' }}> <i style={{ color: '#F2D338' }} class="fas fa-star"></i> <span>4.2</span></span>
                                                            <p className="ms-5 mt-1" style={{ fontSize: 'x-small' }}>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel arcu orci. Mauris maximus arcu sit amet enim imperdiet, non tempor velit pretium.
                                                            </p>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>
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
