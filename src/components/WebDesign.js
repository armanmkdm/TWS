import React from 'react'
import AnimatedPage from "./common/AnimatedPage";
import "./style/WebDesign.css";
import ServiceElement from './common/ServiceElement';
import Heading from './common/Heading';
import LeftCard from './common/LeftCard';
import RightCard from './common/RightCard';


function WebDesign() {
    return (
        <>
            <AnimatedPage>
            <div className='banner'>
                    <img src="images/home1.jpg" className='img-fluid' alt='img' />
                </div>
                <div className='banner-text'>
                    <h1>Web Design</h1>
                </div>
                <ServiceElement serviceImage="images/solution1.png" serviceSubTitle="=WEB DESIGN=" serviceTitle="The Complete Digital Transformation Experience" serviceText1="lorem which will help companies of all sizes to optimize their operations in the current competitive business environment. Our services will help you streamline IT infrastructure costs and reduce operational expenses, enabling you to focus on your core competencies.We specialize in designing, building, and supporting cloud solutions, based on proprietary technology. We are a team of talented professionals, " serviceText2="cloud solutions with world-class expertise.based on proprietary technology. We are a team of talented professionals, who strive to deliver innovative cloud solutions with world-class expertise.cloud solutions with world-class expertise.based on proprietary technology. We are a team of talented professionals, who strive " />


                <Heading subTitle="=DIGITAL SOLUTIONS. DIGITAL RESULTS=" title="A Complete Set Of Digital Services To Help You Ride The Digital Wave" />

                <LeftCard leftCardImage="images/Ecommerce-system.jpg" leftCardTitle="Digital Commerce Ecosystem" leftCardText="Make your business future-ready on a highly scalable Enterprise eCommerce Platform. oOrjit is a highly flexible & customizable customer-merchant engagement platform adaptable to any business model.Make your business future-ready on a highly scalable Enterprise eCommerce Platform. oOrjit is a highly " />

                <RightCard rightCardImage="images/Ecommerce-system.jpg" rightCardTitle="Digital Commerce Ecosystem" rightCardText="Make your business future-ready on a highly scalable Enterprise eCommerce Platform. oOrjit is a highly flexible & customizable customer-merchant engagement platform adaptable to any business model.Make your business future-ready on a highly scalable Enterprise eCommerce Platform. oOrjit is a highly " />
                <LeftCard leftCardImage="images/Ecommerce-system.jpg" leftCardTitle="Digital Commerce Ecosystem" leftCardText="Make your business future-ready on a highly scalable Enterprise eCommerce Platform. oOrjit is a highly flexible & customizable customer-merchant engagement platform adaptable to any business model.Make your business future-ready on a highly scalable Enterprise eCommerce Platform. oOrjit is a highly " />

                <RightCard rightCardImage="images/Ecommerce-system.jpg" rightCardTitle="Digital Commerce Ecosystem" rightCardText="Make your business future-ready on a highly scalable Enterprise eCommerce Platform. oOrjit is a highly flexible & customizable customer-merchant engagement platform adaptable to any business model.Make your business future-ready on a highly scalable Enterprise eCommerce Platform. oOrjit is a highly " />

                <LeftCard leftCardImage="images/Ecommerce-system.jpg" leftCardTitle="Digital Commerce Ecosystem" leftCardText="Make your business future-ready on a highly scalable Enterprise eCommerce Platform. oOrjit is a highly flexible & customizable customer-merchant engagement platform adaptable to any business model.Make your business future-ready on a highly scalable Enterprise eCommerce Platform. oOrjit is a highly " />

                <RightCard rightCardImage="images/Ecommerce-system.jpg" rightCardTitle="Digital Commerce Ecosystem" rightCardText="Make your business future-ready on a highly scalable Enterprise eCommerce Platform. oOrjit is a highly flexible & customizable customer-merchant engagement platform adaptable to any business model.Make your business future-ready on a highly scalable Enterprise eCommerce Platform. oOrjit is a highly " />

            </AnimatedPage>
        </>
    )
}

export default WebDesign