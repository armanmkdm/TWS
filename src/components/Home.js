import React from 'react';
import "./style/Home.css";
import dmimgslider from "./images/dmimgslider.jpg";
import webdevmain from "./images/webdevmain.jpg";
import slider3 from "./images/slider3.jpg";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import home2 from "./images/home2.png";
import Heading from "./common/Heading";
import AnimatedPage from "./common/AnimatedPage";
import BlogsCard from './common/BlogsCard';
// import Card from "./common/Card"
import ChooseUs from './common/ChooseUs';
import { IoMdArrowDropright } from "react-icons/io";
import ClientSlider from './common/ClientSlider';
import { Link } from 'react-router-dom';
// import MainSlider from './common/MainSlider';


function Home() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>

            <AnimatedPage>
                {/* <div className='mainslider-section'>
                    <MainSlider />
                </div> */}
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src={dmimgslider}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <p>Achieve your business objectives through digital channels.</p>
                            <h3>DIGITAL MARKETING</h3>
                            <Button className="standard-btn" onClick={handleShow}>
                                Request a Callback
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src={webdevmain}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <p>Build, Design and Maintain your Websites </p>
                            <h3>
                                WEB DEVELOPMENT
                            </h3>
                            <Button className="standard-btn" onClick={handleShow}>
                                Request a Callback
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src={slider3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <p>Build seamless and enjoyable UI and UX for users</p>
                            <h3>UI/UX DESIGNING</h3>
                            <Button className="standard-btn" onClick={handleShow}>
                                Request a Callback
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src={slider3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <p>Build high-quality, user-friendly, and functional apps</p>
                            <h3>MOBILE APP DEVELOPMENT</h3>
                            <Button className="standard-btn" onClick={handleShow}>
                                Request a Callback
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src={slider3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <p>Get reliable and secure email services</p>
                            <h3>EMAIL SERVICES</h3>
                            <Button className="standard-btn" onClick={handleShow}>
                                Request a Callback
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                {/* tech section */}

                <div className='technology-section'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-lg-6'>
                                <h2>
                                    About us
                                </h2>
                                <h6>
                                    =SERVING SINCE 2017=
                                </h6>
                                <p>
                                    <strong>Techstreat Web Solutions</strong> is a full-service web development and digital marketing agency, committed to helping businesses and organizations succeed online. Our team of experienced professionals is dedicated to providing high-quality, innovative solutions to meet the unique needs of our clients.

                                </p>
                                <p>
                                    <strong>We specialize in</strong> developing custom websites and mobile apps, as well as offering a range of digital marketing services, including SEO, PPC, social media marketing, content marketing, email marketing, and influencer marketing. Our goal is to help our clients reach their target audience and achieve their business objectives through digital channels.
                                </p>
                            </div>
                            <div className='col-12 col-lg-6'>
                                <img className="img-fluid" src={home2} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Services */}

                <div className='heading-text'>
                    <div className='container'>
                        <div className='text-center'>
                            <h6>=OUR SERVICES=</h6>
                            <h2>Our Services</h2>
                        </div>
                    </div>
                </div>

                <div className='solutions-area'>
                    <div className='container'>
                        <div className='row sol-row'>
                            <div className='col-sm-12 col-lg-3'>
                                <img src='images/webdevimg.jpg' className='img-fluid' alt='' />
                            </div>
                            <div className='col-sm-12 col-lg-3 sol-content content1'>
                                <h4>WEB DEVELOPMENT</h4>
                                <p>Web development refers to the process of creating and maintaining websites,design, front-end development, back-end development.</p>
                                <Link className='standard-btn' to='/webdevelopment'>
                                    Learn More
                                    <span>
                                        <IoMdArrowDropright />
                                    </span>
                                </Link>
                            </div>
                            <div className='col-sm-12 col-lg-3'>
                                <img src='images/dmimg.jpg' className='img-fluid' alt='' />
                            </div>
                            <div className='col-sm-12 col-lg-3 sol-content content2'>
                                <h4>DIGITAL MARKETING</h4>
                                <p>Take the full advantage of cloud innovation and accelerate your business by relying on effective hybrid and multi cloud approach from us.</p>
                                <Link className='standard-btn' to='/digitalmarketing'>
                                    Learn More
                                    <span>
                                        <IoMdArrowDropright />
                                    </span>
                                </Link>
                            </div>

                        </div>
                        <div className='row sol-row'>
                            <div className='col-sm-12 col-lg-3'>
                                <img src='images/uiuximg.jpg' className='img-fluid' alt='' />
                            </div>
                            <div className='col-sm-12 col-lg-3 sol-content content1'>
                                <h4>UI/UX DESIGNING</h4>
                                <p>UI/UX design refers to the process of designing the user interface and user experience of a website, mobile app, or other digital product.</p>
                                <Link className='standard-btn' to='/uiuxdesign'>
                                    Learn More
                                    <span>
                                        <IoMdArrowDropright />
                                    </span>
                                </Link>
                            </div>
                            <div className='col-sm-12 col-lg-3'>
                                <img src='images/appdevimg.jpg' className='img-fluid' alt='' />
                            </div>
                            <div className='col-sm-12 col-lg-3 sol-content content2'>
                                <h4>MOBILE APP DEVELOPMENT</h4>
                                <p>Mobile app development is the process of creating software applications that run on mobile devices, such as smartphones and tablets.</p>
                                <Link className='standard-btn' to='/mobileappdevelopment'>
                                    Learn More
                                    <span>
                                        <IoMdArrowDropright />
                                    </span>
                                </Link>
                            </div>

                        </div>
                        <div className='row sol-row'>
                            <div className='col-sm-12 col-lg-3'>
                                <img src='images/emailservicesimg.jpg' className='img-fluid' alt='' />
                            </div>
                            <div className='col-sm-12 col-lg-3 sol-content content1'>
                                <h4>EMAIL SERVICES</h4>
                                <p>Email services provide users with an email address, a web-based interface to manage their email, and the ability to send and receive emails. </p>
                                <Link className='standard-btn' to='/emailservices'>
                                    Learn More
                                    <span>
                                        <IoMdArrowDropright />
                                    </span>
                                </Link>
                            </div>
                            <div className='col-sm-12 col-lg-3 align'>
                                <img src='images/academyimg.jpg' className='img-fluid' alt='' />
                            </div>
                            <div className='col-sm-12 col-lg-3 sol-content content2'>
                                <h4>ACADEMY</h4>
                                <p>We are a leading digital marketing training provider, dedicated to empowering individuals and businesses with the knowledge and skills.</p>
                                <a className='standard-btn' href='https://techstreatacademy.com/'>
                                    Learn More
                                    <span>
                                        <IoMdArrowDropright />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Choose us section */}

                <Heading subTitle="=WHY CHOOSE US=" title="We Have The Right Expertise" />

                <div className='chooseus-section'>
                    <div className='container'>
                        <ChooseUs />
                    </div>
                </div>

                {/* Blogs */}

                <Heading subTitle="=OUR BLOGS=" title="Read Our Blogs" />


                <div className='blog-section'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <div className='blog-image'>
                                    <img className='img-fluid' src="images/websec.jpg" alt="img" />
                                </div>
                                <div className='blog-cards'>
                                    <BlogsCard blogTitle="Importance Of Web Security" blogText=" In today's digital age, having a website is crucial for any business looking to establish an online presence." />
                                    <Link to='/websec'>
                                        Learn More
                                    </Link>
                                    <span>
                                        <IoMdArrowDropright />
                                    </span>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className='blog-image'>
                                    <img className='img-fluid' src="images/seo.jpg" alt="img" />
                                </div>
                                <div className='blog-cards'>
                                    <BlogsCard blogTitle=" Search Engine Optimization" blogText="Another reason why HTTPS is important for digital marketing is that it can help with search engine optimization (SEO)." />
                                    <Link to='/seo'>
                                        Learn More
                                    </Link>
                                    <span>
                                        <IoMdArrowDropright />
                                    </span>
                                </div>
                            </div>
                            <div className='col-lg-4 '>
                                <div className='blog-image'>
                                    <img className='img-fluid' src="images/cybersec.jpg" alt="img" />
                                </div>
                                <div className='blog-cards'>
                                    <BlogsCard blogTitle="Importance of Cyber Security" blogText="Cybersecurity refers to the practice of protecting internet-connected systems, including hardware, software etc" />
                                    <Link to='/cybersec'>
                                        Learn More
                                    </Link>
                                    <span>
                                        <IoMdArrowDropright />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Clients about us */}

                <Heading subTitle="=OUR CLIENTS=" title="What our client says about Us" />

                <div className='container'>
                    <ClientSlider />
                </div>

                {/* Modal */}

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Request A Callback</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name"
                                    autoFocus
                                />
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your number"
                                    autoFocus
                                />
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    autoFocus
                                />
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1" >
                                    <Form.Control as="textarea" placeholder="Message" rows={3} />
                                </Form.Group>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='standard-btn' onClick={handleClose}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>

            </AnimatedPage>
        </>
    );
}

export default Home;








