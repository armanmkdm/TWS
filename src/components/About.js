import React from 'react';
import "./style/About.css";
import home1 from "./images/home1.jpg"
import experience from "./images/experience.jpg"
import vision from "./images/vision.jfif"
import mission from "./images/mission.jfif";
// import Heading from "./common/Heading";
// import ValueSlider from "./common/ValueSlider";
import AnimatedPage from "./common/AnimatedPage";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Box, Grid, Typography } from '@mui/material';
// import { Image } from '@mui/icons-material';
// import Card  from './common/Card';


function About() {
    return (
        <>

            <AnimatedPage>
                <div className='banner'>
                    <img src={home1} className='img-fluid' alt='img' />
                </div>
                <div className='banner-text'>
                    <h1>About</h1>
                </div>

                {/* experience section */}

                <div className='experience-section'>
                    <div className='container'>
                        <div className="row">
                            <div className='experience-left col-lg-5'>
                                <div>
                                    <img src={experience} className='img-fluid' alt='img' />
                                </div>
                                <div className='experience-year'>
                                    <span className='since'>
                                        since <br />
                                        2017
                                    </span>
                                    <strong>6</strong>
                                    <span className='years'>
                                        YEARS<br />
                                        EXPERIENCE
                                    </span>
                                </div>
                            </div>
                            <div className='experience-right col-lg-7'>
                                <p>At <strong>Techstreat Web Solutions</strong> we believe in the power of technology to drive growth and success. That's why we stay up-to-date with the latest trends and innovations in web development and digital marketing, and invest in the tools and resources needed to deliver the best possible outcomes for our clients..</p>
                                <p>
                                    We understand that each business is unique and that a one-size-fits-all approach simply won't cut it. That's why we work closely with our clients to understand their needs and goals, and create customized strategies that deliver results.Our goal is to help our clients reach their target audience and achieve their business objectives through digital channels.
                                </p>
                                <p>
                                    If you're looking for a trusted partner to help you succeed online, look no further than Techstreat Web Solutions. Get in touch with us today to learn more about how we can help you reach your goals.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

                {/* unique section */}

                <div className='unique-section my-5'>
                    <div className='container'>
                        <div className='row'>
                            <div className='unique-left col-lg-7'>
                                <p><strong>Techstreat Web Solutions</strong> is a dynamic and innovative digital agency, offering a wide range of web development and digital marketing services to businesses and organizations of all sizes. Our team of talented and experienced professionals is passionate about helping our clients succeed online.
                                    With a focus on delivering high-quality solutions that are tailored to meet the unique needs of each client, we offer a full suite of web development services, including custom <strong>website design and development, e-commerce development, mobile app development, and website maintenance and support.</strong> We are dedicated to helping our clients achieve their goals and reach their target audience through effective and engaging digital channels.
                                    In addition to web development, we offer a comprehensive range of digital marketing services, including SEO, PPC, social media marketing, content marketing, email marketing, and influencer marketing. Our goal is to help our clients create a strong online presence, reach their target audience, and achieve their business objectives through digital channels.
                                    At Techstreat Web Solutions, we understand the importance of collaboration and communication in achieving success.
                                </p>
                            </div>
                            <div className='unique-right col-lg-5'>
                                <h3>Why We are Unique:</h3>
                                <ul class="checklist">
                                    <div className='d-flex'>
                                        <li className='check-icon'><MdOutlineKeyboardArrowRight className='unique-icons' /></li><li className='unique-list'>24/7 service desk provides round the clock critical support to all our customers</li>
                                    </div>
                                    <div className='d-flex'>
                                        <li className='check-icon'><MdOutlineKeyboardArrowRight className='unique-icons' /></li><li className='unique-list'>We have been lucky to have served some incredible clients over the years.</li>
                                    </div>
                                    <div className='d-flex'>
                                        <li className='check-icon'><MdOutlineKeyboardArrowRight className='unique-icons' /></li><li className='unique-list'>Our clients range in diverse industries and backgrounds.</li>
                                    </div>
                                    <div className='d-flex'>
                                        <li className='check-icon'><MdOutlineKeyboardArrowRight className='unique-icons' /></li><li className='unique-list'>We design brands, build websites, apps, design products.</li>
                                    </div>
                                    <div className='d-flex'>
                                        <li className='check-icon'><MdOutlineKeyboardArrowRight className='unique-icons' /></li><li className='unique-list'>Well defined call classification and escalation matrix with professionalism</li>
                                    </div>
                                    <div className='d-flex'>
                                        <li className='check-icon'><MdOutlineKeyboardArrowRight className='unique-icons' /></li><li className='unique-list'>As a CSR initiative , we extend support to non-customers ( in case of any IT emergency )</li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                {/* vision and mission section */}

                {/* <div className='vm-section'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-5 col-lg-3 text-center'>
                                <div className='vm-image'>
                                    <img className="img-fluid" src={vision} alt="img" />
                                </div>
                            </div>
                            <div className='col-7 col-lg-3'>
                                <div className="vm-content">
                                    <h4>OUR VISION</h4>
                                    <p>To be the most trusted digital solutions partner for our customer to deliver business excellence</p>
                                </div>
                            </div>
                            <div className='col-5 col-lg-3 text-center'>
                                <div className='vm-image'>
                                    <img className='img-fluid' src={mission} alt="img" />
                                </div>
                            </div>
                            <div className='col-7 col-lg-3'>
                                <div className='vm-content'>
                                    <h4>OUR MISSION</h4>
                                    <p>Empowering and transforming businesses through modern technology</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <Grid
                rowSpacing={2}
                    container
                    justifyContent="center"
                >
                    <Grid item xs={6} md={3} lg={3} pt={0} >
                        <Box textAlign="center" alignItems="center" >

                            <img className="img-fluid" src={vision} alt="img" />

                        </Box>
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                        <Box sx={{height:"300px",backgroundColor:"#f4f4f4"}} p={4}>
                            <Typography
                                sx={{ fontWeight: "700" }} variant="h5" gutterBottom>
                                OUR VISION
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                To be the most trusted digital solutions partner for our customer to deliver business excellence
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                        <Box>
                            <Box textAlign="center" className='vm-image'>
                                <img className="img-fluid" src={mission} alt="img" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid  item xs={6} md={3} lg={3}>
                        <Box sx={{height:"300px",backgroundColor:"#f4f4f4"}} p={4} >
                            <Typography
                                sx={{ fontWeight: "700" }} variant="h5" gutterBottom>
                                OUR MISSION
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Empowering and transforming businesses through modern technology
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>


                {/* our values */}

                {/* <Heading subTitle="=OUR VALUES=" title="Know About Us All" />

                <Card/> */}

                {/* <ValueSlider /> */}

            </AnimatedPage>


        </>
    )
}

export default About