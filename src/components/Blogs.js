import React from 'react';
import "./style/Blogs.css";
import AnimatedPage from "./common/AnimatedPage";
import { BsArrowRight } from "react-icons/bs"
import { Link } from 'react-router-dom';


function Blogs() {
    return (
        <>
            <AnimatedPage>
                <div className='blogs-section'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-4 col-sm-12 col-xl-4'>
                                <div className='fullblogdiv'>
                                    <div className='blogsimage'>
                                        <img className='img-fluid' src="images/websec.jpg" alt='' />
                                    </div>
                                    <h5>
                                        Importance Of Web Security
                                    </h5>
                                    <p>by Admin | Lorem</p>
                                    <p>
                                        In today's digital age, having a website is crucial for any business looking to establish an online presence. However, simply having a website is not enough.
                                    </p>
                                    <div className='text-center blog-btn-div'>
                                        <Link className='blog-btn' to='/websec'>
                                            know More
                                            <span>
                                                <BsArrowRight />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-sm-12 col-xl-4'>
                                <div className='fullblogdiv'>
                                    <div className='blogsimage'>
                                        <img className='img-fluid' src="images/http.jpg" alt='' />
                                    </div>
                                    <h5>
                                        Hypertext Transfer Protocol Secure
                                    </h5>
                                    <p>by Admin | Lorem</p>
                                    <p>
                                        When a website uses HTTPS, it means that all communications between the website and the user's browser are encrypted, making it much more difficult.
                                    </p>
                                    <div className='text-center blog-btn-div'>
                                        <Link className='blog-btn' to='/http'>
                                            know More
                                            <span>
                                                <BsArrowRight />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-sm-12 col-xl-4'>
                                <div className='fullblogdiv'>
                                    <div className='blogsimage'>
                                        <img className='img-fluid' src="images/seo.jpg" alt='' />
                                    </div>
                                    <h5>
                                        Search Engine Optimization (SEO).
                                    </h5>
                                    <p>by Admin | Lorem</p>
                                    <p>
                                        Another reason why HTTPS is important for digital marketing is that it can help with search engine optimization (SEO).
                                        HTTPS is an essential component of digital marketing.
                                    </p>
                                    <div className='text-center blog-btn-div'>
                                        <Link className='blog-btn' to='/seo'>
                                            know More
                                            <span>
                                                <BsArrowRight />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-sm-12 col-lg-4 col-xl-4'>
                                <div className='fullblogdiv'>
                                    <div className='blogsimage'>
                                        <img className='img-fluid' src="images/cdn.jpg" alt='' />
                                    </div>
                                    <h5>
                                        Content Delivery Network (CDN)
                                    </h5>
                                    <p>by Admin | Lorem</p>
                                    <p>
                                        It's important to ensure that the website is fast and easily accessible to all users, regardless of their location. This is where a Content Delivery Network (CDN) comes in.
                                    </p>
                                    <div className='text-center blog-btn-div'>
                                        <Link className='blog-btn' to='/cdn'>
                                            know More
                                            <span>
                                                <BsArrowRight />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-12 col-lg-4 col-xl-4'>
                                <div className='fullblogdiv'>
                                    <div className='blogsimage'>
                                        <img className='img-fluid' src="images/cybersec.jpg" alt='' />
                                    </div>
                                    <h5>
                                        Importance of Cyber Security
                                    </h5>
                                    <p>by Admin | Lorem</p>
                                    <p>
                                        Cybersecurity refers to the practice of protecting internet-connected systems, including hardware, software, and data, from attack, damage, or unauthorized access.
                                    </p>
                                    <div className='text-center blog-btn-div'>
                                        <Link className='blog-btn' to='/cybersec'>
                                            know More
                                            <span>
                                                <BsArrowRight />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 col-lg-4 col-xl-4'>
                                <div className='fullblogdiv'>
                                    <div className='blogsimage'>
                                        <img className='img-fluid' src="images/gcp.jpg" alt='' />
                                    </div>
                                    <h5>
                                        Google Cloud Platform(GCP)
                                    </h5>
                                    <p>by Admin | Lorem</p>
                                    <p>
                                        Google Cloud Platform (GCP) is a suite of cloud computing services offered by Google. It provides a range of infrastructure, platform, and software services.
                                    </p>
                                    <div className='text-center blog-btn-div'>
                                        <Link className='blog-btn' to='/gcp'>
                                            know More
                                            <span>
                                                <BsArrowRight />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-4 col-sm-12 col-xl-4'>
                                <div className='fullblogdiv'>
                                    <div className='blogsimage'>
                                        <img className='img-fluid' src="images/azure.jpg" alt='' />
                                    </div>
                                    <h5>
                                        What is Microsoft Azure?
                                    </h5>
                                    <p>by Admin | Lorem</p>
                                    <p>
                                        In today's digital age, having a website is crucial for any business looking to establish an online presence. However, simply having a website is not enough.
                                    </p>
                                    <div className='text-center blog-btn-div'>
                                        <Link className='blog-btn' to='/azure'>
                                            know More
                                            <span>
                                                <BsArrowRight />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-sm-12 col-xl-4'>
                                <div className='fullblogdiv'>
                                    <div className='blogsimage'>
                                        <img className='img-fluid' src="images/ai.jpg" alt='' />
                                    </div>
                                    <h5>
                                        what is Artificial Intelligence?
                                    </h5>
                                    <p>by Admin | Lorem</p>
                                    <p>
                                        Artificial Intelligence (AI) is a branch of computer science concerned with building intelligent machines that can perform tasks which require human intelligence.
                                    </p>
                                    <div className='text-center blog-btn-div'>
                                        <Link className='blog-btn' to='/ai'>
                                            know More
                                            <span>
                                                <BsArrowRight />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-sm-12 col-xl-4'>
                                <div className='fullblogdiv'>
                                    <div className='blogsimage'>
                                        <img className='img-fluid' src="images/bigdata.jpg" alt='' />
                                    </div>
                                    <h5>
                                        What is Big Data?
                                    </h5>
                                    <p>by Admin | Lorem</p>
                                    <p>
                                        Big Data refers to the massive and complex data sets that organizations and individuals generate and collect, often through digital means.
                                        <div className='text-center blog-btn-div'>
                                            <Link className='blog-btn' to='/bigdata'>
                                                know More
                                                <span>
                                                    <BsArrowRight />
                                                </span>
                                            </Link>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </AnimatedPage>
        </>
    )
}

export default Blogs