import React from 'react';
import "./CommonStyle/ChooseUs.css";
import { useState } from 'react';


function ChooseUs() {
    const [chooseuscards] = useState([

        {
            image: "images/qualityicon.png",
            title: 'High Quality Markup',
            text: 'A well-structured markup makes it easier for people with disabilities to access and understand a website.'
        },

        {
            image: "images/codeicon.png",
            title: 'Seo Semantic Coding',
            text: 'Helps search engines better understand the context and relevance of content'
        },

        {
            image: "images/satisfiedicon.png",
            title: '100% Satisfaction Quarantee',
            text: 'You will be fully satisfied with our work and service'
        },

        {
            image: "images/browsericon.png",
            title: 'Latest Browser Compatibility',
            text: 'Ensure that a website is accessible and functional on the most recent versions of popular web browsers '
        },

        {
            image: "images/costicon.png",
            title: 'Cost Efficient',
            text: 'We provide good value for money by delivering high-quality results at a reasonable cost.'
        },

        {
            image: "images/supporticon.png",
            title: '365 Days Free Support',
            text: 'We offer free assistance and support for 365 days a year, with no restrictions or limitations.'
        },

    ])

    return (
        <>
            <div>
                <section>
                    <div className='container'>
                        <div className='chooseus-cards'>
                            {
                                chooseuscards.map((chooseuscard, index) => (
                                    <div key={index} className='chooseus-card'>
                                        <div className='d-flex'>
                                            <div className='chooseus-img'>
                                                <img src={chooseuscard.image} className="img-fluid" alt='' />
                                            </div>
                                            <div>
                                                <h5>
                                                    {chooseuscard.title}
                                                </h5>
                                                <p>
                                                    {chooseuscard.text}
                                                </p>
                                            </div>
                                        </div>
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

export default ChooseUs


