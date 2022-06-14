import React, { useState } from "react";
import { Button } from 'reactstrap';

//To Do: Add social links

function Footer() {

    const [title, setTitle] = useState('_______')
    const values = ['a dancer','a dog trainer', 'a nonprofit admin', 'an actor', 'a choreographer', 'a TV host', 'a cater waiter', 'a tour guide', 'an office manager', 'an education director', 'a telemarketer', 'a cashier'];

    return(
        <div className='footer'>
             <div className='container'>
                    <div className='row'>
                        <div className='col-lg-2'>
                            <div>
                                <a className='btn btn-social-icon' href='https://www.linkedin.com/in/adia-morris-swanger/'><i className="fa fa-brands fa-linkedin" ></i> LinkedIn</a> 
                            </div>
                            <div>
                                <a className='btn btn-social-icon' href='https://github.com/adiamorrisswanger'><i className="fa fa-brands fa-github" ></i> GitHub</a> 
                            </div>
                            <div>
                                <a className='btn btn-social-icon' href='https://twitter.com/longtallsallie'><i className="fa fa-brands fa-twitter-square social-icon" ></i> Twitter</a> 
                            </div>
                        </div>
                        <div className='col-lg-8 job-button'>
                            I've also been...<Button onClick={() => setTitle(values[Math.floor(Math.random() * values.length)])}>{title}.</Button> 
                        </div>
                        
                        
                    </div>
            </div>
        </div>
       
    )
}

export default Footer;