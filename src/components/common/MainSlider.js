import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CommonStyle/MainSlider.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function MainSlider() {
    return (
        <>
            <Swiper
                // spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src="images/slider1.jpg" alt="" />
                    <div>
                        <p>Be innovative with disruptive technologies for a future</p>
                        <h3>
                            INNOVATIVE
                        </h3>
                    </div>
                    {/* <Button className="standard-btn">
                        Request a Callback
                    </Button> */}
                </SwiperSlide>
                <SwiperSlide><img src="images/slider2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="images/slider3.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </>
    )
}

export default MainSlider