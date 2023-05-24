import React from 'react';
import "./style/EmailServices.css";
import AnimatedPage from "./common/AnimatedPage";
import ServiceElement from './common/ServiceElement';
import LeftCard from './common/LeftCard';
import RightCard from './common/RightCard';


function EmailServices() {
    return (
        <>

            <AnimatedPage>
                <div className='banner'>
                    <img src="images/home1.jpg" className='img-fluid' alt='img' />
                </div>
                <div className='banner-text'>
                    <h1>Email Services</h1>
                </div>
                <ServiceElement serviceImage="images/emailservicesimg.jpg" serviceSubTitle="=EMAIL SERVICES=" serviceText1="Email services refer to the provision of email communication capabilities over the internet. Email services provide users with an email address, a web-based interface to manage their email, and the ability to send and receive emails. Some common email services include Gmail, Yahoo Mail, Outlook, and ProtonMail." serviceText2="Email services play a critical role in communication and collaboration in personal and professional settings. It is important to choose a reliable and secure email service that meets the needs and preferences of the individual or organization." />


                <LeftCard leftCardImage="images/Ecommerce-system.jpg" leftCardTitle="Gmail Services" leftCardText="Gmail is a free email service offered by Google. It provides users with an email address, a web-based interface to manage their email, and the ability to send and receive emails. Gmail is one of the most popular email services in the world, with over 1.5 billion active users." />

                <RightCard rightCardImage="images/Ecommerce-system.jpg" rightCardTitle="Yahoo Mail Services" rightCardText="Yahoo Mail is a free email service provided by Yahoo, a subsidiary of Verizon Media. It provides users with an email address, a web-based interface to manage their email, and the ability to send and receive emails. Yahoo Mail provides users with unlimited storage for their emails and attachments." />

                <LeftCard leftCardImage="images/Ecommerce-system.jpg" leftCardTitle="ProtonMail Services" leftCardText="ProtonMail is a secure email service provided by Proton Technologies AG. It provides users with an encrypted email address, a web-based interface to manage their email, and the ability to send and receive encrypted emails.ProtonMail is a secure and privacy-focused email service that provides users with a secure and private email experience. " />

                <RightCard rightCardImage="images/Ecommerce-system.jpg" rightCardTitle="Outlook Mail " rightCardText="Outlook is a personal information management and email service provided by Microsoft. It provides users with an email address, a web-based interface to manage their email, calendar, and contacts, and the ability to send and receive emails.Outlook is a comprehensive personal information management and email service that provides users with a convenient and integrated experience." />

            </AnimatedPage>
        </>
    )
}

export default EmailServices