import React from "react";

//To Do: Add social links

function Footer() {

    return(
        <div className='footer'>
             <div className='container'>
                    <div className='row'>
                        <div className='col-md-5 footer-bottom-text'>
                            Designed and created by Adia Morris Swanger
                        </div>
                        <div className='col-md-2'>
                            <a href='https://www.linkedin.com/in/adia-morris-swanger/'>LinkedIn</a>
                        </div>
                        <div className='col-md-2'>
                            <a href='https://github.com/adiamorrisswanger'>GitHub</a>
                        </div>
                        <div className='col-md-2'>
                            <a href='https://twitter.com/longtallsallie'>Twitter</a>
                        </div>
                </div>
            </div>
        </div>
       
    )
}

export default Footer;