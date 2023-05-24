import React from 'react'
import "./style/OurWorks.css";
import AnimatedPage from "./common/AnimatedPage";

function OurWorks() {
    return (
        <>

            <AnimatedPage>
                <div className='work-section'>
                    <div className='container'>
                        <h3>
                            See How We Help You Upscale Your Business
                        </h3>
                        <p>
                            We provide right tools to your service
                        </p>
                        <div className='work-wrapper'>
                            <div>
                                <div className="imageWraperAnimation">
                                    <img src="images/vipimage.png" className="websiteImg" alt="img" />
                                </div>
                                <a href="https://vipnumberstudio.com/" className="websiteDetails">
                                    <span className='project-name'> Vip Number Studio</span>
                                </a>
                            </div>
                            <div>
                                <div className="imageWraperAnimation">
                                    <img src="images/lockandkey.jpg" className="websiteImg" alt="img" />
                                </div>
                                <a href="https://lockandkey.in/" className="websiteDetails">
                                    <span className='project-name'>lock and key</span>
                                </a>
                            </div>
                            {/* <div>
                                <div className="imageWraperAnimation">
                                    <img src="https://cdn-ftp.b-cdn.net/assets/images/website-images/neuholidays.png" className="websiteImg" alt="neuholidays.com" />
                                </div>
                                <a href="https://travel.neuholidays.com/" className="websiteDetails">
                                    <span className='project-name'>NeuHolidays</span>

                                </a>
                            </div> */}  
                        </div>
                    </div>
                </div>

            </AnimatedPage>
        </>
    )
}

export default OurWorks