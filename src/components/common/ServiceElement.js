import React from 'react';
import "./CommonStyle/ServicecElement.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function ServiceElement({ serviceImage, serviceSubTitle, serviceTitle, serviceText1, serviceText2 }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className=' service-container'>
                <div className='service-image-area'>
                    <img src={serviceImage} alt="img" />
                </div>
                <div className='service-content-area'>
                    <h6>
                        {serviceSubTitle}
                    </h6>
                    <h2>
                        {serviceTitle}
                    </h2>
                    <p className='firstpara'>
                        {serviceText1}
                    </p>
                    <p className='secondpara'>
                        {serviceText2}
                    </p>

                    <Button className="standard-btn" onClick={handleShow}>
                        Request a Callback
                    </Button>
                </div>

            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Request A Callback</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                autoFocus
                            />
                            <Form.Label></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your number"
                                autoFocus
                            />

                            <Form.Label></Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="standard-btn" onClick={handleShow}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ServiceElement