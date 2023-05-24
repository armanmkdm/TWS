import './App.css';
import React from 'react';
// import Card from "./components/common/Card";
// import Heading from "./components/common/Heading";
// import Navbar from "./components/common/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import OurWorks from './components/OurWorks';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import WebDevelopment from "./components/WebDevelopment";
import WebDesign from "./components/WebDesign";
import DigitalMarketing from "./components/DigitalMarketing";
import UiUxDesigning from "./components/UiUxDesigning";
import MobileAppDev from "./components/MobileAppDev";
import EmailServices from "./components/EmailServices";
// import Academy from "./components/Academy";
import { AnimatePresence } from 'framer-motion';
import { useEffect } from "react";
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import { ThemeProvider } from 'styled-components';
import GoToTop from './components/common/GoToTop';
import WebSecurity from './components/BlogPages/WebSecurity';
import Http from './components/BlogPages/Http';
import Seo from './components/BlogPages/Seo';
import Cdn from './components/BlogPages/Cdn';
import Gcp from './components/BlogPages/Gcp';
import CyberSec from './components/BlogPages/CyberSec';
import Azure from './components/BlogPages/Azure';
import Ai from './components/BlogPages/Ai';
import BigData from './components/BlogPages/BigData';
import Gbadge from './components/common/Gbadge';

function App() {

  const { pathname } = useLocation();

  useEffect(() => {

    window.scrollTo(0, 0);

  },
    [pathname]);

  const theme = {
    colors: {
      btn: {
        backgroundColor: " #fff",
        color: "156afd"
      }
    },
    media: { mobile: "768px" }
  };

  return (

    <>

      <ThemeProvider theme={theme}>
        <AnimatePresence >
          <Navbar />
          <Routes >
            <Route path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/blogs' element={<Blogs />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/ourworks' element={<OurWorks />} />
            <Route exact path='/webdesign' element={<WebDesign />} />
            <Route exact path='/webdevelopment' element={<WebDevelopment />} />
            <Route exact path='/digitalmarketing' element={<DigitalMarketing />} />
            <Route exact path='/uiuxdesign' element={<UiUxDesigning />} />
            <Route exact path='/mobileappdevelopment' element={<MobileAppDev />} />
            <Route exact path='/emailservices' element={<EmailServices />} />
            <Route exact path='/websec' element={<WebSecurity />} />
            <Route exact path='/http' element={<Http />} />
            <Route exact path='/seo' element={<Seo />} />
            <Route exact path='/cdn' element={<Cdn />} />
            <Route exact path='/cybersec' element={<CyberSec />} />
            <Route exact path='/gcp' element={<Gcp />} />
            <Route exact path='/azure' element={<Azure />} />
            <Route exact path='/ai' element={<Ai />} />
            <Route exact path='/bigdata' element={<BigData />} />
          </Routes>
          <GoToTop />
          <Gbadge/>
          <Footer />
        </AnimatePresence>
      </ThemeProvider>
    </>

  );
};

export default App;



