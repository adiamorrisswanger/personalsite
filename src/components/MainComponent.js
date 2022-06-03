import React from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Portfolio from './PortfolioComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import { Routes, Route } from 'react-router-dom'; 


function Main() {


    return (
        <div>
            <Header />
            <Routes>
                <Route index path='/' element={<Home />} />
                <Route path='portfolio' element={<Portfolio />} />
                <Route path='contact' element={<Contact />} />
                
            </Routes>
            <Footer />
        </div>
    )
}

export default Main;