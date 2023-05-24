import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./CommonStyle/Footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios'
// import { Mailer } from 'nodemailer-react'
// import { Link } from "react-router-dom"

// const transport = {
//     service: "gmail",
//     auth: {
//         user: "arman.techstreat@gmail.com",
//         pass: "lrqpfyfjigomdkqo"
//     },
//     port: 465,
//     host: "smtp.gmail.com"
// }

// const WelcomeEmail = ({ firstName }) => ({
//     subject: `👋 ${firstName}`,
//     body: (
//       <div>
//         <p>Hello {firstName}!</p>
//         <p>Hope you'll enjoy the package!</p>
//       </div>
//     )
//   })

//   const defaults = {
//     from: "arman.techstreat@gmail.com",
//   }

// const mailer = Mailer(
// { transport, defaults },
// { WelcomeEmail}
// )

function Footer() {

    const [getMail, setMail] = useState('');
    const [getName, setName] = useState('');
    const [getNum, setNum] = useState('');

    const submitMailer = async (e) => {
        e.preventDefault()
        console.log('here');

        const config = {
            method: 'post',
            url: 'http://localhost:3001/sendmail',
            data: {
                email: getMail,
                name: getName,
                number: getNum
            }
        }
        const result = await axios(config)

        if (result.status === 200)
            window.location.href = '/'

    }

    return (
        <>
            <div className='footer-area'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 col-lg-4'>
                            <h5>
                                About us
                            </h5>
                            <p>
                                We help you upscale your business with right tools to your service
                            </p>
                            <ul className='d-flex icons-ul'>

                                <li className='social-media-icons'>
                                    <a href="/" target="_blank" without rel="noreferrer"><FaTwitter /></a>
                                </li>

                                <li className='social-media-icons'>
                                    <a href="https://www.facebook.com/TechstreatWebSolution/" target="_blank" without rel="noreferrer"><AiFillFacebook />
                                    </a>
                                </li>
                                <li className='social-media-icons'>
                                    <a href="https://www.instagram.com/techstreat_web_solutions/" target="_blank" without rel="noreferrer"><FaInstagram />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-sm-12 col-lg-2 ul-links'>
                            <h5>
                                Quick Links
                            </h5>
                            <ul>
                                <li>
                                    <Link exact to="/"> Home</Link>
                                </li>
                                <li>
                                    <Link exact to="/contact"> Contact</Link>
                                </li>
                                <li>
                                    <Link exact to="/blogs">Blogs</Link>
                                </li>
                                <li>
                                    <Link exact to="/ourworks"> Our Works</Link>
                                </li>
                                <li>
                                    <Link exact to="/about">About us</Link>
                                </li>
                                <li>
                                    <a href='https://techstreatacademy.com/'>Academy</a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-sm-12 col-lg-2 ul-links'>
                            <h5>
                                Services
                            </h5>
                            <ul>
                                <li>
                                    <Link exact to="/webdesign">Web Design</Link>
                                </li>
                                <li>
                                    <Link exact to="/webdevelopment">Web Development</Link>
                                </li>
                                <li>
                                    <Link exact to="/digitalmarketing">Digital Marketing</Link>
                                </li>
                                <li>
                                    <Link exact to="/uiuxdesign">UI/UX Design</Link>
                                </li>
                                <li>
                                    <Link exact to="/mobileapplicationdevelopment">Mobile App Development</Link>
                                </li>
                                <li>
                                    <Link exact to="/emailservice">Email Services</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-sm-12 col-lg-4 footer-form-section'>
                            <Form onSubmit={(e) => { submitMailer(e) }} className='footer-form'>

                                <h4>Contact us</h4>

                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Control onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Enter name" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicNumber">
                                    <Form.Control onChange={(e) => { setNum(e.target.value) }} type="tel" placeholder="Enter number" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control onChange={(e) => { setMail(e.target.value) }} type="email" placeholder="Enter email" required />
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1" >
                                    <Form.Control as="textarea" placeholder="Message" rows={3} />
                                </Form.Group>

                                <Button className='footer-btn' type="submit">
                                    Send
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>Copyright @ {new Date().getFullYear()} All rights reserved by <span>TECHSTREAT Web Solutions</span>
                </p>
            </div>
        </>
    )
}

export default Footer