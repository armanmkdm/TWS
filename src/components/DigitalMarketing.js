import React from 'react';
import "./style/DigitalMarketing.css";
import AnimatedPage from "./common/AnimatedPage";
import ServiceElement from './common/ServiceElement';
import Heading from './common/Heading';
import LeftCard from './common/LeftCard';
import RightCard from './common/RightCard';



function DigitalMarketing() {
    return (
        <>

            <AnimatedPage>
                <div className='banner'>
                    <img src="images/home1.jpg" className='img-fluid' alt='img' />
                </div>
                <div className='banner-text'>
                    <h1>Digital Marketing</h1>
                </div>
                <ServiceElement serviceImage="images/dmimg.jpg" serviceSubTitle="=DIGITAL SOLUTIONS DIGITAL RESULTS=" serviceTitle="The Complete Digital Transformation Experience" serviceText1="Digital marketing refers to the promotion of products, services, or brands through digital channels, such as search engines, social media, email, and websites. The goal of digital marketing is to reach a target audience and drive profitable customer action." serviceText2="Digital marketing requires a strong understanding of customer behavior and the use of data and analytics to measure the success of marketing efforts. It also requires a willingness to continuously test, iterate, and improve marketing strategies. " />
            </AnimatedPage>

            <Heading title="A Complete Set Of Digital Services To Help You Ride The Digital Wave." />

            <LeftCard leftCardImage="images/seo.jpg" leftCardTitle="Search engine optimization (SEO):" leftCardText="optimizing websites and content to rank higher in search engine results.The goal of SEO is to drive more organic traffic to a website and increase its visibility to the target audience.Here are some of the key components of an effective SEO strategy:" />

            <RightCard rightCardImage="images/Ecommerce-system.jpg" rightCardTitle="Pay-per-click advertising (PPC):" rightCardText="placing advertisements on search engines, social media, and other websites and paying each time someone clicks on the ad.The highest bidder's ad is displayed at the top of search engine results pages (SERPs) or on other websites, and the advertiser pays each time someone clicks on the ad." />
            <LeftCard leftCardImage="images/Ecommerce-system.jpg" leftCardTitle="Social media marketing:" leftCardText="Social media marketing refers to the process of promoting a product, service, or brand through social media platforms, such as Facebook, Twitter, Instagram, and LinkedIn.Using social media platforms to engage with target audiences, build brand awareness, and drive traffic to a website." />

            <RightCard rightCardImage="images/Ecommerce-system.jpg" rightCardTitle="Content marketing: " rightCardText="Content marketing is a strategic approach to creating and distributing valuable, relevant, and consistent content to attract and retain a target audience and ultimately drive profitable customer action.Creating and sharing valuable, relevant, and consistent content to attract and retain a target audience." />

            <LeftCard leftCardImage="images/Ecommerce-system.jpg" leftCardTitle="Email marketing:" leftCardText="Email marketing is a direct marketing technique that involves sending promotional messages, advertisements, or other types of content to a targeted audience via email. The goal of email marketing is to build relationships with customers, promote products or services, and drive conversions." />

            <RightCard rightCardImage="images/Ecommerce-system.jpg" rightCardTitle="Influencer marketing:" rightCardText="Influencer marketing is a form of marketing that involves partnering with individuals who have a large following on social media or other online platforms, to promote a product, service, or brand to their followers. The goal of influencer marketing is to reach a wider audience, build brand awareness, and drive engagement and conversions." />
        </>
    )
}

export default DigitalMarketing