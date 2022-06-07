import React from "react";

//To Do: Add social links

function Footer() {

    return(
        <div className='footer'>
             <div className='container'>
                    <div className='row'>
                        <div className='col-md-5'>
                            Designed and created by Adia Morris Swanger
                        </div>
                        <div className='col-lg-1'>
                            <a href='https://www.linkedin.com/in/adia-morris-swanger/'>LinkedIn</a>
                        </div>
                        <div className='col-lg-1'>
                            <a href='https://github.com/adiamorrisswanger'>GitHub</a>
                        </div>
                        <div className='col-lg-1'>
                            <a href='https://twitter.com/longtallsallie'><i className="fa-brands fa-twitter fa-lg" /></a>
                        </div>
                </div>
            </div>
        </div>
       
    )
}

export default Footer;