import React from 'react';
import { Card, Input, Form, Row, Col, Label, Button } from 'reactstrap'

import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const Gallery = () => {

    const [ImageModal, setImageModal] = React.useState(false);

    const onOpenModal = () => {
        setImageModal(true);
    }
    const onCloseModal = () => {
        setImageModal(false);
    }

    return (
        <>
            <span className="ps-3">Image Gallery</span>

            <Card className="ms-3 mb-3">
                <Row className="p-4">
                    <Col className="text-center" md={4}>
                        <Button className="folders bg-transparent p-2 mt-2 text-dark border border-none w-100 fw-bold" style={{ fontSize: '13px', fontWeight: '400' }}> Folder Name 01 <i style={{ color: '#7F48F7', marginLeft: '20px', fontSize: '22px' }} class="fas fa-lg ps-3 fa-folder"></i> </Button>
                    </Col>
                    <Col className="text-center" md={4}>
                        <Button className="folders bg-transparent p-2 mt-2 text-dark border border-none w-100 fw-bold" style={{ fontSize: '13px', fontWeight: '400' }}> Folder Name 02 <i style={{ color: '#7F48F7', marginLeft: '20px', fontSize: '22px' }} class="fas fa-lg ps-3 fa-folder"></i> </Button>
                    </Col>
                    <Col className="text-center  " md={4}>
                        <Button className="folders bg-transparent p-2 mt-2 text-dark border border-none w-100 fw-bold" style={{ fontSize: '13px', fontWeight: '400' }}> Folder Name 03 <i style={{ color: '#7F48F7', marginLeft: '20px', fontSize: '22px' }} class="fas fa-lg ps-3 fa-folder"></i> </Button>
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
                            <Button className="bg-transparent p-2 text-dark border border-none" style={{ borderRadius: '4px', fontSize: '14px', fontWeight: '500' }}>New Folder <i class="fas fa-folder ms-1" style={{ color: '#7F48F7' }}></i> </Button>
                            <Button className="bg-transparent p-2 text-dark border border-none" onClick={onOpenModal} style={{ borderRadius: '4px', fontSize: '14px', fontWeight: '500' }}>Upload Image <i style={{ color: '#7F48F7' }} class="fas fa-upload ms-1"></i>  </Button>
                            {/* <Label style={{ fontSize: '14px', border: '1px solid #d7dad7', borderRadius: '4px', fontWeight: '500', cursor: 'pointer' }} className="bg-transparent text-dark border border-none p-2 mt-4 mb-1"> <input className="d-none" type="file" />Upload Image &nbsp;</Label > */}
                        </div>
                        <div>
                            <Modal open={ImageModal} onClose={onCloseModal} center
                                classNames={{
                                    overlay: 'customOverlay',
                                    modal: 'importImage alert-box',
                                }}>
                                <div className="modal-header"> <h6>Alert</h6> </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <p>Are you sure you want to upload this file?</p>
                                        </div>
                                        <div className="col-auto ms-auto">
                                            <Button onClick={onCloseModal} className="me-3 bg-transparent p-2 text-dark border border-none" style={{ borderRadius: '4px', fontSize: '14px', fontWeight: '500' }}>Save <i class="fas fa-save ms-1" style={{ color: '#7F48F7' }}></i> </Button>
                                            <Button onClick={onCloseModal} className="bg-transparent p-2 text-dark border border-none" style={{ borderRadius: '4px', fontSize: '14px', fontWeight: '500' }}>Cancel <i class="fas fa-times ms-1" style={{ color: '#7F48F7' }}></i> </Button>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </Col>
                </Row>
            </Card>
        </>
    );
};

export default Gallery;