import React, { useState } from 'react';
import "./style/Contact.css";
import AnimatedPage from "./common/AnimatedPage";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import axios from 'axios'


const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value === "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

function Contact() {
    const [getMail, setMail] = useState('');
    const [getName, setName] = useState('');
    const [getNum, setNum] = useState('');
    const [getMsg, setMsg] = useState('');

    const submitMailer = async (e) => {
        e.preventDefault()
        console.log('here');

        const config = {
            method: 'POST',
            url: 'https://emailpi.techstreat.com/sendmail',
            data: {
                Number: getNum,
                email: getMail,
                name: getName,
                msg : getMsg,
            }
        }
        const result = await axios(config)

        if (result.status === 200)
            window.location.href = '/'

    }
    return (
        <>

            <AnimatedPage>

                <div className="contact-container">
                    <img src="img/shape.png" className="square" alt="" />
                    <div className="form">
                        <div className="contact-info">
                            <h3 className="title">Let's get in touch</h3>
                            <p className="text">
                                Achieve highest level of efficiency of your business with all levels of IT Support
                            </p>
                            <div className="info">
                                <div className="information">
                                    <span><FaMapMarkerAlt /></span>
                                    <p>B/103 Silver Park Near Prime Hospital Mumbra Thane 400612</p>
                                </div>
                                <div className="information">
                                    <span><IoMdMail /></span>
                                    <p>
                                        <a href='mailto:info@techstreat.com'>info@techstreat.com</a>
                                    </p>
                                </div>
                                <div className="information">
                                    <span><BsFillTelephoneFill />
                                    </span>
                                    <p>
                                        <a href='tel: +91 9097445555'>+91 9097445555</a>
                                    </p>
                                </div>
                            </div>

                            <div className="social-media">
                                <p>Connect with us :</p>
                                <div className="social-icons">
                                    <a href="/">
                                        <BsFillTelephoneFill />
                                    </a>
                                    <a href="/">
                                        <AiFillFacebook />
                                    </a>
                                    <a href="/">
                                        <FaTwitter />
                                    </a>
                                    <a href="/">
                                        <FaInstagram />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form">
                            <span className="circle one"></span>
                            <span className="circle two"></span>
                            <form onSubmit={(e) => { submitMailer(e) }} autocomplete="off">
                                <h3 className="title">Contact us</h3>
                                <div className="input-container">
                                    <input onChange={(e) => { setName(e.target.value) }} type="text" name="name" className="input" required />
                                    <span>Name</span>
                                </div>
                                <div className="input-container">
                                    <input onChange={(e) => { setMail(e.target.value) }} type="email" name="email" className="input" required />
                                    <span>Email</span>
                                </div>
                                <div className="input-container">
                                    <input onChange={(e) => { setNum(e.target.value) }} type="tel" name="phone" className="input" required />
                                    <span>Phone</span>
                                </div>
                                <div className="input-container">
                                    <textarea onChange={(e) => { setMsg(e.target.value) }} name="message" className="input"></textarea>
                                    <span>Message</span>
                                </div>
                                <button type="submit" value="send" className="contact-info-btn" >Send</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='iframe-container'>
                    <iframe className='iframe' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15074.869657054538!2d73.0282797!3d19.1638431!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcbf8e6883b261c1c!2sTechsTreaT%20Web%20Solution!5e0!3m2!1sen!2sin!4v1674801869862!5m2!1sen!2sin" title='iframe'>
                    </iframe>
                </div>
            </AnimatedPage>

        </>
    )
}

export default Contact