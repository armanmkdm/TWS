import React from 'react';
import "./CommonStyle/RightCard.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function RightCard({ rightCardImage, rightCardTitle, rightCardText }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <div className='rightcard-container'>
                <div className='rightcard-content-area'>
                    <h3>
                        {rightCardTitle}
                    </h3>
                    <p>
                        {rightCardText}
                    </p>
                    <div className='leftcard-btndiv'>
                        <Button className="standard-btn" onClick={handleShow}>
                            Know More
                        </Button>
                    </div>
                </div>
                <div className='rightcard-image-area'>
                    <div className='rightcarddiv'>
                        <img src={rightCardImage} alt="img" />
                    </div>
                </div>

            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Request A Callback</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                autoFocus
                            />
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your number"
                                autoFocus
                            />

                            <Form.Label>Email address</Form.Label>
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
                        Request a Callback
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default RightCard