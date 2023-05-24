import React from 'react';
import "./style/MobileAppDev.css";
import AnimatedPage from "./common/AnimatedPage";
import ServiceElement from './common/ServiceElement';
// import Heading from './common/Heading';
import LeftCard from './common/LeftCard';
import RightCard from './common/RightCard';


function MobileAppDev() {
    return (
        <>
            <AnimatedPage>
                <div className='banner'>
                    <img src="images/home1.jpg" className='img-fluid' alt='img' />
                </div>
                <div className='banner-text'>
                    <h1>Mobile App Development</h1>
                </div>
                <ServiceElement serviceImage="images/appdevimg.jpg" serviceSubTitle="=MOBILE APP DEVELOPMENT=" serviceText1="Mobile app development is the process of creating software applications that run on mobile devices, such as smartphones and tablets. The goal of mobile app development is to create high-quality, user-friendly, and functional apps that meet the needs of the target audience and provide value. " serviceText2="Mobile app development can be complex and time-consuming, but a well-designed and functional app can provide a competitive advantage and generate significant revenue through app downloads, in-app purchases, and advertising. It is important to work with experienced app developers and designers who have a strong understanding of the target audience and app ecosystem to create a successful mobile app." />


                <LeftCard leftCardImage="images/Ecommerce-system.jpg" leftCardTitle="Android App Development" leftCardText="Android app development is the process of creating software applications that run on devices powered by the Android operating system. The Android operating system is open-source and widely used, making it a popular platform for app development." />

                <RightCard rightCardImage="images/Ecommerce-system.jpg" rightCardTitle="IOS App Development" rightCardText="iOS app development is the process of creating software applications that run on devices powered by Apple's iOS operating system, such as iPhones, iPads, and iPods. The iOS operating system is known for its strict app review process and high-quality user experience, making it a popular platform for app development." />

            </AnimatedPage>
        </>
    )
}

export default MobileAppDev