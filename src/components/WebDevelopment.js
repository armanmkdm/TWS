import React from 'react';
import "./style/WebDevelopment.css";
import AnimatedPage from "./common/AnimatedPage";
import ServiceElement from './common/ServiceElement';
// import Heading from './common/Heading';
// import LeftCard from './common/LeftCard';
// import RightCard from './common/RightCard';

function WebDevelopment() {
    return (
        <>

            <AnimatedPage>
                <div className='banner'>
                    <img src="images/home1.jpg" className='img-fluid' alt='img' />
                </div>
                <div className='banner-text'>
                    <h1>Web Development</h1>
                </div>
                <ServiceElement serviceImage="images/webdevimg.jpg" serviceSubTitle="=WEB DEVELOPMENT=" serviceText1="Web development refers to the process of creating and maintaining websites. It involves various aspects such as design, front-end development, back-end development, content creation, and web server administration. " serviceText2="Front-end development deals with the user interface, and involves the use of HTML, CSS, and JavaScript to create visually appealing and interactive websites.Back-end development focuses on the server-side functionality and database management, and requires the use of programming languages such as Python, Ruby, PHP, and Node.js." />


            </AnimatedPage>
        </>
    )
}

export default WebDevelopment