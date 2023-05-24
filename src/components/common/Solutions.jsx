import React from 'react';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
// import Wrapper from "styled-components"
import './CommonStyle/Solutions.css'


const Solutions = () => {
    const [cards] = useState([
        {
            image: "images/solution1.png",
            title: 'INFRASTRUCTURE SOLUTIONS',
            text: 'We help our clients design, implement, and manage best-in-class, highly secured, and scalable enterprise IT infrastructure solutions.'
        },
        {
            image: "images/solution2.png",
            title: 'CLOUD SOLUTIONS',
            text: 'Take the full advantage of cloud innovation and accelerate your business by relying on effective hybrid and multi cloud approach from us'
        },
        {
            image: "images/solution3.png",
            title: 'CYBER SECURITY SOLUTIONS',
            text: 'It is our mission to ensure Data security in many different forms it takes. We provide cyber security solutions to protect digital assets of your organization.'
        },
        {
            image: "images/solution4.png",
            title: 'MANAGED IT SERVICE',
            text: 'Achieve highest level of efficiency of your business with all levels of IT Support to cover all your technology needs.'
        },
        {
            image: "images/solution5.png",
            title: 'DIGITAL SOLUTIONS',
            text: 'Creating digital solutions to solve conventional business challenges by using latest in Web, AI, and Blockchain technologies'
        },
        {
            image: "images/solution5.png",
            title: 'DIGITAL SOLUTIONS',
            text: 'Creating digital solutions to solve conventional business challenges by using latest in Web, AI, and Blockchain technologies'
        },

    ])
    return (
        <>


            <div className='sol-container'>
                <div className='sol-cards'>
                    {
                        cards.map((card, index) => (
                            <div key={index} className='sol-card'>
                                <div>
                                    <img src={card.image} alt='img' />
                                </div>
                                <div className='sol-card-data'>
                                    <h3>
                                        {card.title}
                                    </h3>
                                    <p>
                                        {card.text}
                                    </p>
                                    <Button>Learn More</Button>
                                </div>


                            </div>
                        ))
                    }
                </div>
            </div>


        </>
    )
}

export default Solutions