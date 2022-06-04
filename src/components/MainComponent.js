import React, { useState } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Portfolio from './PortfolioComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import { PROJECTS } from '../shared/portfolioprojects'
import { Routes, Route } from 'react-router-dom'; 


function Main() {

    const [portfolio, setPortfolio ] = useState({PROJECTS});

        return (
            <div>
                <Header />
                <Routes>
                    <Route index path='/' element={<Home />} />
                    <Route path='portfolio' element={<Portfolio portfolio={portfolio} setPortfolio={setPortfolio}/>} />
                    <Route path='contact' element={<Contact />} />
                    
                </Routes>
                <Footer />
            </div>
        )
    }
        

export default Main;