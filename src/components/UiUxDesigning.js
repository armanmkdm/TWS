import React from 'react';
import "./style/UiUxDesigning.css";
import AnimatedPage from "./common/AnimatedPage";
import ServiceElement from './common/ServiceElement';
// import Heading from './common/Heading';
import LeftCard from './common/LeftCard';
import RightCard from './common/RightCard';


function UiUxDesigning() {
    return (
        <>

            <AnimatedPage>
                <div className='banner'>
                    <img src="images/home1.jpg" className='img-fluid' alt='img' />
                </div>
                <div className='banner-text'>
                    <h1>UI/UX Designing</h1>
                </div>
                <ServiceElement serviceImage="images/uiuximg.jpg" serviceSubTitle="=UI/UX Design=" serviceText1="UI/UX design refers to the process of designing the user interface and user experience of a website, mobile app, or other digital product. The goal of UI/UX design is to create a seamless and enjoyable experience for users, making it easy for them to find what they need and complete their desired actions." serviceText2="UI/UX design is a crucial component of digital product development, as a well-designed interface and user experience can improve user engagement, satisfaction, and conversions." />


                <LeftCard leftCardImage="images/Ecommerce-system.jpg" leftCardTitle="UI DESIGNING" leftCardText="UI (User Interface) design focuses on the visual and interactive elements of a digital product, including buttons, icons, color scheme, typography, and layout. A good UI design should be visually appealing, easy to use, and consistent across all platforms.understanding the target audience, their goals, and pain points to inform the design." />

                <RightCard rightCardImage="images/Ecommerce-system.jpg" rightCardTitle="UX DESIGNING" rightCardText="UX (User Experience) design, on the other hand, focuses on the overall experience a user has when interacting with a digital product, including their emotions, needs, and behaviors. A good UX design should be user-centered, solving the user's problems and meeting their needs through a well-designed interface and seamless user journey." />

            </AnimatedPage>
        </>
    )
}

export default UiUxDesigning