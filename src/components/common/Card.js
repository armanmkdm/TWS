import React from 'react';
import { useState } from 'react';
import "./CommonStyle/Card.css";
import { IoMdArrowDropright } from "react-icons/io"
import { MdDoubleArrow } from "react-icons/md"
// import { Link } from 'react-router-dom';


function Card() {
    const [cards] = useState([
        {

            link: "/webdevelopment",
            title: 'WEB DEVELOPMENT',
            text: 'Take advantage of cloud innovation and accelerate your business by relying on effective hybrid and multi cloud approach...'
        },
        {
            link: "/digitalmarketing",
            title: 'DIGITAL MARKETING',
            text: 'Achieve highest level of efficiency of your business with all levels of IT Support to cover all your technology support…'
        },
        {
            link: "/uiuxdesign",
            title: 'UI/UX DESIGNING',
            text: 'A digital workspace makes it easy for organizations to embrace new technologies and the cloud with security and great user…'
        },
        {
            link: "/mobileappdevelopment",
            title: 'MOBILE APP DEVELOPMENT',
            text: 'We pride ourselves in providing most innovative learning technology solutions and eLearning content development services...'
        },
        {
            link: "/emailservices",
            title: 'EMAIL SERVICES',
            text: 'We pride ourselves in providing most innovative learning technology solutions and eLearning content development services...'
        },
        {
            link: "https://techstreatacademy.com/",
            title: 'ACADEMY',
            text: 'We pride ourselves in providing most innovative learning technology solutions and eLearning content development services...'
        },

    ])


    return (
        <>
            <div>
                <section>
                    <div className='container'>
                        <div className='cards'>
                            {
                                cards.map((card, index) => (
                                    <div key={index} className='card'>
                                        <h4>
                                            <span> <MdDoubleArrow /></span>
                                            {card.title}
                                        </h4>
                                        <p>
                                            {card.text}
                                        </p>
                                        <a className='card-link' href={card.link}>
                                            Learn More
                                            <span>
                                                <IoMdArrowDropright />
                                            </span>
                                        </a>
                                        <span className='crd-icon'>

                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Card