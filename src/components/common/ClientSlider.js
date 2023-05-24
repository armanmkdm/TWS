// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "./CommonStyle/ClientSlider.css";
// import { Pagination } from "swiper";

// function ClientSlider() {


//     return (
//         <>
//             <div className="clientslider-section">
//                 <Swiper
//                     slidesPerView={3}
//                     spaceBetween={30}
//                     pagination={{
//                         clickable: true,
//                     }}
//                     modules={[Pagination]}
//                     className="mySwiper"
//                 >
//                     <SwiperSlide><img src="images/gcp.jpg" alt="img"/></SwiperSlide>
//                     <SwiperSlide><img src="images/gcp.jpg" alt="img"/></SwiperSlide>
//                     <SwiperSlide><img src="images/gcp.jpg" alt="img"/></SwiperSlide>
//                     <SwiperSlide><img src="images/gcp.jpg" alt="img"/></SwiperSlide>
//                     <SwiperSlide><img src="images/gcp.jpg" alt="img"/></SwiperSlide>
//                     <SwiperSlide><img src="images/gcp.jpg" alt="img"/></SwiperSlide>
//                     <SwiperSlide><img src="images/gcp.jpg" alt="img"/></SwiperSlide>
//                     <SwiperSlide><img src="images/gcp.jpg" alt="img"/></SwiperSlide>

//                 </Swiper>
//             </div>
//         </>
//     )
// }

// export default ClientSlider


import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import "swiper/css/pagination";
import "./CommonStyle/ClientSlider.css";
// import required modules
import { Pagination } from "swiper";



function ClientSlider() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                <SwiperSlide className="swiper-section">
                    <div className="d-flex swiperclient-img">
                        <div>
                            <img className="" src="images/clientslider1.png" alt="img" />
                        </div>
                        <div>
                            <h5>
                                Faisal K
                            </h5>
                            <h6>
                                Mumbra Football Academy
                            </h6>
                        </div>
                    </div>
                    <div>
                        <p>
                            <FaQuoteLeft className="swiper-icon" />
                            The best Digital Marketing agency which promote your brand and do marketing for you at a very affordable price. I will suggest this to everyone!!
                            <FaQuoteRight className="swiper-icon" />
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-section">
                    <div className="d-flex swiperclient-img">
                        <div>
                            <img className="" src="images/clientslider1.png" alt="img" />
                        </div>
                        <div>
                            <h5>
                                Tanwir S
                            </h5>
                            <h6>
                                ImpulseB2B
                            </h6>
                        </div>
                    </div>
                    <div>
                        <p>
                            <FaQuoteLeft className="swiper-icon" />
                            Very satisfied with the service provided by the TECHSTREAT team, they are highly qualified and best in the market, smart professionals, I would highly recommend them.
                            <FaQuoteRight className="swiper-icon" />
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-section">
                    <div className="d-flex swiperclient-img">
                        <div>
                            <img className="" src="images/clientslider1.png" alt="img" />
                        </div>
                        <div>
                            <h5>
                                Azhar K
                            </h5>
                            <h6>
                                Hkay Engineers
                            </h6>
                        </div>
                    </div>
                    <div>
                        <p>
                            <FaQuoteLeft className="swiper-icon" />
                            Skillful & Professional staff with great knowledge of their field. Awesome Service!!
                            <FaQuoteRight className="swiper-icon" />
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-section">
                    <div className="d-flex swiperclient-img">
                        <div>
                            <img className="" src="images/clientslider1.png" alt="img" />
                        </div>
                        <div>
                            <h5>
                                Sufiyan U
                            </h5>
                            <h6>
                                Miran Rentals
                            </h6>
                        </div>
                    </div>
                    <div>
                        <p>
                            <FaQuoteLeft className="swiper-icon" />
                            Best and quality website designing & web Development company in Mumbra. We are very satisfied with the web services!!
                            <FaQuoteRight className="swiper-icon" />
                        </p>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide className="swiper-section">
                    <div className="d-flex swiperclient-img">
                        <div>
                            <img className="" src="images/clientslider1.png" alt="img" />
                        </div>
                        <div>
                            <h5>
                                Lorem
                            </h5>
                            <h6>
                                Lorem
                            </h6>
                        </div>
                    </div>
                    <div>
                        <p>
                            <FaQuoteLeft className="swiper-icon" />
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse aliquid error voluptates totam non fugiat, quisquam tempore nobis reiciendis, officia rem inventore a eius quas aspernatur dolorum dolor voluptatum in!
                            <FaQuoteRight className="swiper-icon" />
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-section">
                    <div className="d-flex swiperclient-img">
                        <div>
                            <img className="" src="images/clientslider1.png" alt="img" />
                        </div>
                        <div>
                            <h5>
                                Lorem
                            </h5>
                            <h6>
                                Lorem
                            </h6>
                        </div>
                    </div>
                    <div>
                        <p>
                            <FaQuoteLeft className="swiper-icon" />
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse aliquid error voluptates totam non fugiat, quisquam tempore nobis reiciendis, officia rem inventore a eius quas aspernatur dolorum dolor voluptatum in!
                            <FaQuoteRight className="swiper-icon" />
                        </p>
                    </div>
                </SwiperSlide> */}


            </Swiper>
        </>
    )
}

export default ClientSlider