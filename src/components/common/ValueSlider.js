import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import "./CommonStyle/ValueSlider.css"
// import Card from "./Card";
import { FaHandHoldingHeart } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { TiDocumentText } from "react-icons/ti";
import { BsPeopleFill } from "react-icons/bs";
import { RiUserSettingsFill } from "react-icons/ri";


function Slider() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <>
            <div className='container'>
                <Carousel
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                >

                    <div className='expertise-cards text-center'>
                        <a href='/'>
                            <RiUserSettingsFill className='slider-icon' />
                            <h4>
                                Integrity
                            </h4>
                            <p>We operate with full transparency in all aspects of our relationships.</p>
                        </a>
                    </div>
                    <div className='expertise-cards text-center'>
                        <a href='/'>
                            <FaHandHoldingHeart className='slider-icon' />
                            <h4>Care</h4>
                            <p>We deeply care about our staff, customers, and the eco-system in which we are in.</p>
                        </a>
                    </div>
                    <div className='expertise-cards text-center'>
                        <a href='/'>
                            <HiLightBulb className='slider-icon' />
                            <h4>Innovative</h4>
                            <p>We encourage learning and development to offer innovative ICT Solutions.</p>
                        </a>
                    </div>
                    <div className='expertise-cards text-center'>
                        <a href='/'>
                            <TiDocumentText className='slider-icon' />
                            <h4>Committed</h4>
                            <p>We are committed to fulfil the promise given, by focusing and ensuring value delivery.</p>
                        </a>
                    </div>
                    <div className='expertise-cards text-center'>
                        <a href='/'>
                            <BsPeopleFill className='slider-icon' />
                            <h4>Together</h4>
                            <p>We work for a common purpose with a shared vision and a collaborative model.</p>
                        </a>
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default Slider