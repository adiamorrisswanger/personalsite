import React from 'react';
import { Link } from 'react-router-dom';


function Home() {

   
    return (
        <div className='home'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <h1>Adia Morris Swanger</h1>
                        <h2>Web Developer</h2>
                    </div>
                    <div className='col-lg-3'>
                        <img src='./assets/images/ProfilePic2.jpg' width='200' alt='Head and shoulders of Adia, salt and pepper hair, brown eyes, brown skin, smiling, wearing polka dot shirt' />
                    </div>
                </div>
                <div className='row mx-auto'>
                    <div className='col-lg-4'>
                        
                    </div>
                    <div className='col-lg-3'>
                        <p tabIndex={0}>Hi, I'm Adia. Like "Nadia", no "N".</p> 
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-4'>

                    </div>
                <div className='col-lg-3'>
                    <p>I'm a problem-solver and a maker, and my <Link to='/portfolio'>latest work</Link> is in web development.</p>
                </div>
                </div>
                
                
            </div>
            
        </div>
    );
}

export default Home;